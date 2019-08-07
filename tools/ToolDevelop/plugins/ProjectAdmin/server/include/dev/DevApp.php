<?php
/**
 *
 * @framework: Merma
 * @package: Tools
 * @subpackage: Develop
 * @version: 0.1 

 * @description: DevApp es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 10/10/2010
 * @update-Date: 12/10/2010
 * @license: GPL v2
 *
 */
	include_once "DevStruct.php";
	class DevApp extends DevStruct
	{
		public function __construct($data, $tpl="defaultApp/", $projPath="../../", $optionalDir=array(
			"css", 
			"img", 
			"log",
			"common",
			"config",
			"include",
			"controllers",
			"views"
		), $tplPath="templates/app/", $path="app/")
		{
			parent::__construct($data, $tplPath.$tpl, $projPath.$path, $optionalDir);

			$this->data["name"] = "Main";
			$this->dir   = array("client/js", "server");
			$this->files = array(
				"client.tpl"=>"client/js/Main.js", 
				"server.tpl"=>"server/Main.php"
			);
		}
	}
?>
