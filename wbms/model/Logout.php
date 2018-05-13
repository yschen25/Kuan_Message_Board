<?php
require_once('App.php');

class Logout extends App
{
    public function onCreate()
    {
        unset($_SESSION['isLogin']);
        header('Location: login.php');
        exit();
    }
}