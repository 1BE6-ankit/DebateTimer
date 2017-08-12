/* Our php files are in php folder inside the main projects Folder. To access the files we need to specify the full path to 
	the php folder. So the default name for the Project is DebateTimer and this name may be changed. So the name of the file is stored 
	inside rootFile.json and the name of the project is stored there	
*/
var rootLocation = "";


var potentialDifference = 0; // no difference ,means data is not to be sent to client
var name, motion;

$(document).ready(function() {

    // get the name of the project folder so that other php files can be accessed while making AJAX requests
    $.getJSON("js/rootFile.json", function(file) {
        rootLocation = file.projectName;
    });

    $("#conformButton").hide();
    $("#timerStop").hide();

    $("#send-button").click(function() {
        $("#conformButton").show();
    });

    $("#conformButton").click(function() {
        name = $(".name-field").val(); //value of points from the input field to increase the point
        motion = $("select").val();

        $("#score-controls").hide();
        $("#timerStop").show();

        potentialDifference = 1; // since admin has registered new user, data is to be sent to client
        $.ajax({
            url: rootLocation + 'php/update_player.php',
            type: 'post',
            data: {
                user_name: name,
                potential_difference: potentialDifference,
                motion: motion
            },
            async: true,
            cache: false,
            success: function(data) {
                console.log("Player Updated");
                // console.log(data);
                // alert(data);
            }
        });
    });

    $("#timerStop").click(function() {
        $("#score-controls").show();
        $("#timerStop").hide();
        $("#conformButton").hide();

        potentialDifference = 0; //since stop is pressed, timer is to stopped
        $.ajax({
            url: rootLocation + 'php/update_player.php',
            type: 'post',
            data: {
                user_name: name,
                potential_difference: potentialDifference,
                motion: motion
            },
            async: true,
            cache: false,
            success: function(data) {}
        });
    });

});