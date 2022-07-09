<?php
header('Content-Type:Application/Json');

$pathname = $_POST['pathname'];

$defintions = file_get_contents(".${pathname}.json");

echo $defintions;
