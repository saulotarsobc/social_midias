<?php
header('Content-Type:Application/Json');

$pathname = $_POST['pathname'];

// echo json_encode($pathname);

// die;

$defintions = file_get_contents(".${pathname}.json");

echo $defintions;
