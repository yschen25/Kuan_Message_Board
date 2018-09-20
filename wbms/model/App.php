<?php
$root = dirname(dirname(__FILE__));
require_once($root . '/util/OUtil.php');
require_once($root . '/util/DBUtil.php');

class App
{
    private $template = '';
    private $content = '';

    public function __construct()
    {
        session_start();
        date_default_timezone_set("Asia/Taipei");
    }

    public function onAjax()
    {

    }

    public function onCreate()
    {

    }

    private function onCreateView()
    {
        if (!empty($this->content) && !empty($this->template)) {
            $content = $this->content;
            /** @noinspection PhpIncludeInspection */
            include($this->template);
        }
    }

    /**
     * set template
     *
     * @param $template
     * @return $this
     */
    public function setTemplate($template)
    {
        $this->template = $template;
        return $this;
    }

    /**
     * set content
     *
     * @param $content
     * @return $this
     */
    public function setContent($content)
    {
        $this->content = $content;
        return $this;
    }

    /**
     * run app
     */
    public function run()
    {
        if (OUtil::isAjax()) {
            $this->onAjax();
            exit();
        }
        $this->onCreate();
        $this->onCreateView();
    }
}