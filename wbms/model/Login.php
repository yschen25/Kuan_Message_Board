<?php
require_once('App.php');

class Login extends App
{
    public function onAjax()
    {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $DBUtil = new DBUtil();
        $isLogin = $DBUtil->checkLogin($username, $password);
        if ($isLogin === true) {
            $_SESSION['isLogin'] = true;
            OUtil::responseJson(
                array(
                    'status' => true,
                    'message' => "SUCCESS"
                )
            );
        } else {
            $_SESSION['isLogin'] = false;
            OUtil::responseJson(
                array(
                    'status' => false,
                    'message' => 'FAILED'
                )
            );
        }
    }

    public function onCreate()
    {
        if (!empty($_SESSION['isLogin']) && $_SESSION['isLogin'] === true) {
            header('Location: index.php');
            exit();
        }
    }
}