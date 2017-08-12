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
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 input-box-wrapper animated pulse">
                    <h2 id="info-header">Debate Timer</h2>
                    <div id="score-controls" class="load-and-send">

                        <div class="form-group">
                            <label class="label-name">Name</label>
                            <div class="col-10">
                                <input type="text" class="form-control name-field" placeholder="">
                            </div>
                        </div>

                        <form>
                            <select>
                                <option selected="selected">For</option>
                                <option>Against</option>
                            </select>
                        </form>
                        <button id='send-button' class='btn btn-success'>
                            OK
                        </button>

                        <div class="row">
                            <div id="conformButton" class="some-button hand-cursor animated shake">
                                Proceed?
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            </div>


            <div class="row">
                <div id="timerStop" class="some-button hand-cursor animated bounceIn">
                    STOP
                </div>
            </div>
        </div>

    </body>

    </html>