<?php defined('STD_ACCESS') OR die('No direct access allowed.');
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: php
 * @version: 0.1

 * @description: Router es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 01/06/2010
 * @update-Date: 19/09/2010
 * @license: GPL v3
 *
 */
	class Router
	{
		public static $config = false;
		//................................................................
		public static function getModulePath($class='Main')
		{
			if($class=='Main') return '../../'.STD_APP;		    
			else return '../../'.STD_PLUGINS.$class.'/';
		}
		//................................................................
		public static function getErrorPath($file)
		{
			if(strpos($file, STD_CORE) === false) return '../../'.STD_APP.STD_LOG.STD_PHPERROR;
			else return '../'.STD_LOG.STD_PHPERROR;
		}
		//................................................................

	}
?>
