<?php
require_once('model/Login.php');

$login = new Login();
$login->setTemplate('view/template.php')
    ->setContent('view/_login.html')
    ->run();
