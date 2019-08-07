<?php defined('STD_ACCESS') OR die('No direct access allowed.');
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: php
 * @version: 0.1

 * @description: DriverManager es una libreria para cargar dinamicamente los drivers del framework
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 06/11/2010
 * @update-Date: 06/11/2010
 * @license: GPL v3
 *
 */
	class DriverManager
	{
		public  static $path = "../../lib/";
		private static $drivers = array();
		//...........................................................
		public static function factory($driver, $params=0) 
		{
			if(is_array($driver)){
				$file = self::$path.$driver["file"];
				$class = $driver['class'];
			}else{
				$file = self::$path.$driver."/".$driver.STD_EXT;
				$class = $driver;
			}
			return self::load($file, $class, $params);
		}
		//...........................................................
		private static function load($path, $class, $params=0)
		{
			if(!isset(self::$drivers[$class])){
				if(include_once $path){
					self::$drivers[$class] = array(
						'file'=>$path.$class.STD_EXT,
						'obj'=>Factory::instantiate($class, $params)
					);
				}else throw new Exception('Driver not found');	
			}
			return self::$drivers[$class]["obj"];
		}
		//...........................................................
		public static function getDriverList()
		{
			return self::$drivers;
		}
		//...........................................................
	}
?>
