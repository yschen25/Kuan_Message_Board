<?php
require_once('model/Index.php');

$index = new Index();
$index->setTemplate('view/template.php')
    ->setContent('view/_index.html')
    ->run();
