/* Our php files are in php folder inside the main projects Folder. To access the files we need to specify the full path to 
    the php folder. So the default name for the Project is DebateTimer and this name may be changed. So the name of the file is stored 
    inside rootFile.json and the name of the project is stored there    
*/
var rootLocation = "";

var activityTimer, contentTimer;
var callSec = 500; //millisec to call the change in activities

var dataReceived = false; // initially no user_name and motion are received

var offsetValue,
    offsetValueCounter,
    circum;
var timerCalls = -1; //store how many times getActivities is called, because getActivities is set to 500 but 
//timer should be increased at 1000 so -> timerCalls%2==0 , then timer can be increased


var sec, overTime;


// code to make the timer work
function startTimer() {
    progressTime();

    var minutes = Math.floor(sec / 60);
    var secPrint = Math.floor(sec % 60);

    if (sec > 0) {
        sec--;
        showTime(sec);
        if (sec == 30) {
            changeColor();
        }
    } else {
        $("#over-time").show();
        ++overTime;
        showTime(overTime);
    }
}

function showTime(timeToDisplay) {
    var tempMin = Math.floor(timeToDisplay / 60);
    var tempSec = Math.floor(timeToDisplay % 60);
    if (tempSec < 10) tempSec = "0" + tempSec;
    $("#seconds").text(tempMin + ":" + tempSec);
}

function changeColor() {
    $("#seconds").css({
        'fill': 'rgb(225,0,0)',
        'transition': 'all 1s linear'
    });
    $("#mainCircle").css({
        'stroke': 'rgb(225,0,0)',
        'transition': 'all 1s linear'
    });
}

function progressTime() {
    //    $('.circleFill').attr('class', 'circleFill filled');
    console.log("Not increasing");
    $("#mainCircle").css({
        'stroke-dashoffset': offsetValue,
        'transition': 'all 1s linear'
    });
    offsetValue += offsetValueCounter;
}


$(document).ready(function() {

    // get the name of the project folder so that other php files can be accessed while making AJAX requests
    $.getJSON("js/rootFile.json", function(file) {
        rootLocation = file.projectName;
    });

    var radius = 120; //radius of the cirlce
    circum = Math.round(2 * Math.PI * radius) + 7;
    $("#mainCircle").css({
        'stroke-dasharray': circum,
        'stroke-dashoffset': 0
    });
    $("#over-time").hide();
});


function playerContent() {
    $.ajax({
        type: 'post',
        url: rootLocation + 'php/player.php',
        async: true,
        data: {
            data_received: dataReceived
        },
        cache: false,
        success: function(data) {
            // alert(dataReceived);
            console.log(data);
            console.log("inside player content");
            if (data && dataReceived == false) {
                dataReceived = true;
                $("#over-time").hide();
                $("#name-and-motion").html(data);

                //code to set the timer
                overTime = 0;
                secInitial = 3 * 60;
                sec = secInitial;
                offsetValueCounter = circum / secInitial, offsetValue = offsetValueCounter;
                timerCalls = 0;

                clearInterval(contentTimer);
                contentTimer = undefined;
                setActivities();
            }
        },
        errror: function(jqXHR, exception) {
            alert(jqXHR.responseText);
            alert("Error while getting player content");
        }
    });
}

function getActivities() {
    console.log("in activities");
    if (++timerCalls % 2 == 0)
        startTimer();

    $.ajax({
        type: 'post',
        url: rootLocation + 'php/player.php',
        async: true,
        data: {
            data_received: dataReceived
        },
        cache: false,
        success: function(data) {
            if (data) {
                dataReceived = false;

                $("#seconds").css({
                    'fill': '#15ad15',
                    'transition': 'all 1s linear'
                });
                $("#mainCircle").css({
                    'stroke': '#15ad15',
                    'transition': 'all 1s linear'
                });


                $("#mainCircle").css({
                    'stroke-dashoffset': 0,
                    'transition': 'all 1s linear'
                });

                clearInterval(activityTimer);
                activityTimer = undefined;
                setPlayerContent();
            }
        },
        errror: function(jqXHR, exception) {
            alert(jqXHR.responseText);
            alert("Error while getting activity state of the timer");
        }
    });
}

function setPlayerContent() {
    clearInterval(contentTimer);
    contentTimer = setInterval(playerContent, callSec);
}
setPlayerContent();

function setActivities() {
    clearInterval(activityTimer);
    activityTimer = setInterval(getActivities, callSec);
    clearInterval(contentTimer);
}