<?php

    $player_array = json_decode(file_get_contents("../json/client.json"),true);

    $player_array['user_name'] = $_POST['user_name'];
    $player_array['potential_difference'] = $_POST['potential_difference'];
    $player_array['motion'] = $_POST['motion'];

    file_put_contents("../json/client.json", json_encode($player_array));
?>
