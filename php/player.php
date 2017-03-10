<?php
    $main_array = json_decode(file_get_contents("../json/client.json"),true);

    if($_POST['player_number']!=$main_array['player_number']){
        echo "<h1 class='main-name animated rubberBand'>".$main_array['user_name']."</h1> (".$main_array['motion'].")";
    }
    if($_POST['activity_number']!=$main_array['activity_number']){
        echo 1;
    }

?>
