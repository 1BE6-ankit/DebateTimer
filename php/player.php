<?php
    $main_array = json_decode(file_get_contents("../json/client.json"),true);

    /*
        The boolean value sent by the client - data_received is treated as string because php treats the
        received data as string
    */

    // this block sends data to the client only when the admin has pressed --confirm--. When confirmed
    // potential_difference is set to 1 by the admin. --data_received-- is needed because client is to be sent the data
    // only once and there should not be any conflict
    if($main_array['potential_difference']==1 && $_POST['data_received']=="false"){
        echo "<h1 class='main-name animated slideInDown'>".$main_array['user_name']."</h1> (".$main_array['motion'].")";
    }

    // this part informs the client to stop the timer when --potential_difference-- is set to 0 by the admin (stop is pressed).
    if($_POST['data_received']=="true" && $main_array['potential_difference']==0){
        echo 1;
    }


    // if($_POST['player_number']!=$main_array['player_number']){
    //     echo "<h1 class='main-name animated slideInDown'>".$main_array['user_name']."</h1> (".$main_array['motion'].")";
    // }
    // if($_POST['activity_number']!=$main_array['activity_number']){
    //     echo 1;
    // }

?>
