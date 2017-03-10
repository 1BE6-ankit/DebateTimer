
/* Our php files are in php folder inside the main projects Folder. To access the files we need to specify the full path to 
	the php folder. So the default name for the Project is DebateTimer and this name may be changed. So the name of the file is stored 
	inside rootFile.json and the name of the project is stored there	
*/
var rootLocation;



var activityNumber = 0;
var playerNumber = 0;
var name, motion;

$(document).ready(function () {

	// get the name of the project folder so that other php files can be accessed while making AJAX requests
	$.getJSON("js/rootFile.json", function(file){
		rootLocation  = file.projectName;
	});

    $("#conformButton").hide();
    $("#timerStop").hide();

    $("#send-button").click(function () {
        $("#conformButton").show();
    });

    $("#conformButton").click(function () {
        name = $(".name-field").val(); //value of points from the input field to increase the point
        motion = $("select").val();

        $("#score-controls").hide();
        $("#timerStop").show();

        ++playerNumber;
        $.ajax({
            url: rootLocation + 'php/update_player.php',
            type: 'post',
            data: {
                user_name: name,
                player_number: playerNumber,
                activity_number: activityNumber,
                motion: motion
            },
            async: true,
            cache: false,
            success: function (data) {
            	console.log("Player Updated");
            	console.log(data);
            }
        });
    });

    $("#timerStop").click(function () {
        $("#score-controls").show();
        $("#timerStop").hide();
        $("#conformButton").hide();

        ++activityNumber;
        $.ajax({
            url: rootLocation + 'php/update_player.php',
            type: 'post',
            data: {
                user_name: name,
                player_number: playerNumber,
                activity_number: activityNumber
            },
            async: true,
            cache: false,
            success: function (data) {}
        });
    });

});
