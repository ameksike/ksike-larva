<?php defined('STD_ACCESS') OR die('No direct access allowed.');
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: php
 * @version: 0.1 

 * @description: App es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 02/06/2010
 * @update-Date: 02/06/2010
 * @license: GPL v3
 *
 */
    class App extends Primal //implements Security 
    {
	public $linker;
	public function __construct() 
	{
		$this->linker = new Linker();
	}
		
	public static function reedModuesPath()
	{
		$ignore = array ('.', '..', '.svn');
		$tpl = array();
		$path = '../../'.STD_PLUGINS;
		$handle = opendir($path);
		while ($i = readdir($handle))						
		    if (is_dir($path.$i) && !in_array($i, $ignore))
			$tpl[] = $i; 
		closedir($handle); 
		return $tpl;
	}
	public function loadModues() 
	{
		$conf = DriverManager::factory('ConfigManager')->loadConfig('Main');
		if(isset($conf['plugins']))
			return array("plugins"=>$conf['plugins']);
		return array("plugins"=>$this->reedModuesPath());
	}
    }
?>
