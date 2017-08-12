<?php
    $client_array['user_name'] = "";
    $client_array['potential_difference'] = 0;
    $client_array['motion'] = "For";
    file_put_contents("json/client.json", json_encode($client_array));
?>

    <!DOCTYPE html>
    <html lang="">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>

        <script src="assets/jquery-3.1.1.min.js"></script>

        <link rel="stylesheet" href="assets/bootstrap.min.css">
        <link rel="stylesheet" href="assets/animate.css">
	<link rel="stylesheet" href="css/main.css">

        <script src="js/admin.js"></script>

    </head>

    <body>

        <div class="container">
            <div class="row">
                <div id="score-controls" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 load-and-send">
                    <div class='eachUser col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <span class='col-xs-6 col-sm-6 col-md-6 col-lg-4 player-text'>  Player Name  </span>
                        <input type='text' class='col-xs-6 col-sm-6 col-md-6 col-lg-4 name-field'>
                        <button id='send-button' class='col-xs-12 col-sm-12 col-md-12 col-lg-4 btn btn-primary'>
            Send Player
        </button>
                    </div>
                    <form>
                        <select>
                        <option selected="selected">For</option>
                        <option>Against</option>
                    </select>
                    </form>

                    <div class="row">
                        <div id="conformButton" class="some-button hand-cursor animated shake">
                            Proceed?
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div id="timerStop" class="some-button hand-cursor">
                    STOP
                </div>

            </div>
        </div>



    </body>

    </html>
