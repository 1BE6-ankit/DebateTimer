<?php
    $main_array = json_decode(file_get_contents("../json/client.json"),true);

    /*
        The boolean value sent by the client - data_received is treated as string because php treats the
        received data as string
    */

    // this block sends data to the client only if the admin had pressed --confirm--;when confirmed
    // potential_difference is set to 1 by the admin. --data_received-- is needed because client is to be sent the data
    // only once and there should not be any conflict
    if($main_array['potential_difference']==1 && $_POST['data_received']=="false"){
        $user_info = <<<HEREDOC
            <div>
                <span class='main-name animated slideInDown'>
                    {$main_array['user_name']}
                </span>
                <span class="motion-name animated pulse"> ({$main_array['motion']}) </span>
            </div>
HEREDOC;

        echo $user_info;
    }

    // this part informs the client to stop the timer when --potential_difference-- is set to 0 by the admin (stop is pressed).
    if($_POST['data_received']=="true" && $main_array['potential_difference']==0){
        echo 1;
    }

?>
