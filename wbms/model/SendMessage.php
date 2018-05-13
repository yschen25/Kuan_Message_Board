<?php
require_once('App.php');

class SendMessage extends App
{
    public function onAjax()
    {
        $message = $_POST['message'];
        if (empty($message)) {
            OUtil::responseJson(
                array(
                    'status' => false,
                    'message' => 'Message is empty'
                )
            );
        }
        $DBUtil = new DBUtil();
        $result = $DBUtil->sendMessage($message);
        if ($result) {
            OUtil::responseJson(
                array(
                    'status' => true,
                    'message' => 'SUCCESS'
                )
            );
        } else {
            OUtil::responseJson(
                array(
                    'status' => false,
                    'message' => 'FAILED'
                )
            );
        }
    }
}