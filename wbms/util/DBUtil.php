<?php
require_once('OUtil.php');

class DBUtil
{
    const _user = 'id7162828_yschen25';
    const _password = '1234qwer';

    const _DB_type = 'mysql';
    const _DB_host = 'localhost';
    const _DB_name = 'id7162828_kuan_messageboard';
    const _DB_port = '3306';

    public static $DB = null;

    public function __construct()
    {
        $_DSN = self::_DB_type . ':host=' . self::_DB_host . ';dbname=' . self::_DB_name . ';severPort=' . self::_DB_port;
        try {
            self::$DB = new PDO(
                $_DSN, self::_user, self::_password,
                array(
                    PDO::ATTR_PERSISTENT => true
                )
            );
            self::$DB->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
            self::$DB->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);
            self::$DB->exec("SET NAMES 'utf8'");
        } catch (PDOException $PDOException) {
            die ('Connect Error :' . $PDOException->getMessage());
        }
    }

    /**
     * 確認登入狀態
     *
     * @param $username
     * @param $password
     * @return bool
     */
    public function checkLogin($username, $password)
    {
        $sql = "SELECT * FROM `user` WHERE username = :username AND password = :password";
        $sql = self::$DB->prepare($sql);
        $sql->bindValue(':username', $username);
        $sql->bindValue(':password', $password);
        $sql->execute();
        $result = $sql->fetchAll();
        return count($result) > 0;
    }

    /**
     * 傳送信息
     *
     * @param $msg
     * @return bool
     */
    public function sendMessage($msg)
    {
        $sql = "INSERT INTO `id7162828_kuan_messageboard`.`message` (`msg`, `ip`, `time`) VALUES (:msg, :ip, :time)";
        $sql = self::$DB->prepare($sql);
        $sql->bindValue(':msg', $msg);
        $sql->bindValue(':ip', OUtil::getIP());
        $sql->bindValue(':time', date('Y-m-d H:i:s'));
        $result = $sql->execute();
        return $result;
    }

    /**
     * 獲取信息
     *
     * @return array
     */
    public function queryMessage()
    {
        $sql = "SELECT IF(message.ip = ip.ip, ip.user, message.ip) AS username, message.msg as message, message.time as date FROM message JOIN ip";
        $sql = self::$DB->prepare($sql);
        $sql->execute();
        $result = $sql->fetchAll();
        return $result;
    }
}