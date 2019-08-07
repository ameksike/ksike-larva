<?php
/**
 *
 * @framework: Merma
 * @package: Tools
 * @subpackage: Develop
 * @version: 0.1 

 * @description: TplAdmin es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 10/10/2010
 * @update-Date: 12/10/2010
 * @license: GPL v2
 *
 */
	class TplAdmin
	{
		public static $path  = "templates/";
		private static $ignore = array ('.', '..', '.svn');
		
		public static function getTemplates($type="")
		{
			$tpl = array();
			$handle = opendir(self::$path.$type);
			while ($i = readdir($handle))						
			    if (is_dir(self::$path.$type."/".$i) && !in_array($i, self::$ignore))
				$tpl[] = $i; 
			closedir($handle); 
			return $tpl;
		}

		public static function makeTemplate()
		{

		}
	}
?>
