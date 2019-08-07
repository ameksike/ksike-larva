<?php
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: php
 * @version: 0.1

 * @description: Utils es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 02/06/2010
 * @update-Date: 02/06/2010
 * @license: GPL v3
 *
 */
	class Utils
	{
		static function getDatabyId($id)
		{
			if(isset($_REQUEST[$id])){
				$datos = $_REQUEST[$id];
				return stripslashes($datos);
			}else return false;
		}

		public static function is_dir($dirname)
		{
			$ignore = array ('.', '..', '.svn');
			if(!in_array($dirname, $ignore)) return true;
			return false;			
		}

		public static function is_php($filename)
		{
			$php = stristr($filename, STD_EXT);
			$tmp = stristr($filename, STD_NEXT);
			if($php && !$tmp) return true;
			return false;
		}
	}
?>
