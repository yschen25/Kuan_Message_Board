<?php
require_once('App.php');

class Index extends App
{
    public function onAjax()
    {
        $DBUtil = new DBUtil();
        $result = $DBUtil->queryMessage();
        if (count($result) > 0) {
            OUtil::responseJson(
                array(
                    'status' => true,
                    'result' => $result
                )
            );
        } else {
            OUtil::responseJson(
                array(
                    'status' => false
                )
            );
        }
    }

    public function onCreate()
    {
        if ($_SESSION['isLogin'] !== true) {
            header('Location: login.php');
        }
    }
}