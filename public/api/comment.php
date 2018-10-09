<?php

require '../../app/common.php';

$chair = Comment::fetchAll();

$json = json_encode($chair, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json
