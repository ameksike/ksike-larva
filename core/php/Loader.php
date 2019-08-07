<?php defined('STD_ACCESS') or die('No direct access allowed.');
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: php
 * @version: 0.1

 * @description: Loader es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 01/06/2010
 * @update-Date: 19/09/2010
 * @license: GPL v3
 *
 */
	include 'Factory.php';
	//................................................................
	class Loader
	{
		public static $config = false;
		public static $confPath = "../config/load.php";
		//................................................................
		public static function getParent($class='Main')
		{
			if($class=='Main') return 'App.php';		    
			else return 'Plugin.php';
		}
		//................................................................
		public static function coreLibs()
		{
			if(!self::$config) self::$config = include self::$confPath;
			foreach(self::$config["core"] as $i) require_once $i;
		}
		//................................................................
		public static function interfaces()
		{
			if(!self::$config) self::$config = include self::$confPath;
			foreach(self::$config["interface"] as $i) require_once STD_INTERFACES.$i;
		}
		//................................................................
		public static function includes($class='Main', $path=false)
		{
			if(!$path) $path = Router::getModulePath($class).STD_INCLUDE;
			if(file_exists($path)){
				$handle = opendir($path);
				if($handle){
				        while ($dat = readdir($handle))	if(Utils::is_dir($dat)){			
					    if (!is_file($path.$dat)) self::includes($class, $path.$dat."/");
					    else if(Utils::is_php($dat)) require_once $path.$dat; 
					}
				        closedir($handle);  
				}
			}
		}
		//................................................................
		public static function &getModule($class='Main')
		{
			if(!class_exists($class, false))
			{
				$file = Router::getModulePath($class).'server/'.$class.STD_EXT;
				if(file_exists($file))
				{
					self::coreLibs();
					self::interfaces();
					self::includes($class);
					require_once self::getParent($class);
					require_once $file;
				} else { print($file); die(' >> No existe'); }
			}
			return Factory::instantiate($class);
		}
	}
?>
