<?php
/**
 *
 * @framework: Merma
 * @package: Tools
 * @subpackage: Develop
 * @version: 0.1 

 * @description: DevProject es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 10/10/2010
 * @update-Date: 12/10/2010
 * @license: GPL v2
 *
 */
	include_once "DevApp.php";
	include_once "DevModule.php";

	class DevProject extends DevStruct
	{
		private $app;
		private $plugins;

		public function __construct($data, $path="../../", $tpl="defaultProject/", $optionalDir=array(
			"lib",
			"tools",
			"core",
			"core/config",
			"plugins"
		), $apptpl="../app/defaultApp/", $optionalDirApp=array(
			"css", 
			"img", 
			"log",
			"common",
			"config",
			"include"
		), $tplPath="templates/project/")
		{
			parent::__construct($data, $tplPath.$tpl, $path.$data["name"]."/", $optionalDir);
			$this->dir  = array(
				"app",
				"core",
				"core/config"
			);
			$this->files = array(
				"index.tpl"=>"index.html", 
				"init.js.tpl"=>"core/config/init.js",
				"init.php.tpl"=>"core/config/init.php"
			);
			$this->app = new DevApp($data, $apptpl, $this->path, $optionalDirApp, $tplPath);
		}
	
		public function build()
		{
			parent::build();
			$this->app->build();
			if(count($this->plugins)>0)
				foreach($this->plugins as $i)
					$i->build();
		}

		public function addPugin($data, $tpl="defaultPlugin/", $optionalDir=null, $tplPath="templates/plugins/")
		{
			$this->plugins[] = new DevModule($data, $tpl, $this->path, $optionalDir, $tplPath);
		}
	}
?>
