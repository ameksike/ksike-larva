<?php
/**
 *
 * @framework: Merma
 * @package: Core
 * @subpackage: php
 * @version: 0.1

 * @description: ConfigManager es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 16/06/2010
 * @update-Date: 16/06/2010
 * @license: GPL v3
 *
 */
	class ConfigManager
	{
		private $order;
		private $obj;
		//...........................................................
		public function __construct($order=array("php","json","xml","txt")) 
		{
			$this->order = $order;
		}
		//...........................................................
		public function setOrderPriory($order) 
		{
			$this->order = $order;
		}
		//...........................................................
		public function loadConfig($type="")
		{
			if($type == "Main") $class = "Main";
			else
			{
				$debug = debug_backtrace();
				$class = $debug[1]["class"];
			}
			$path = Router::getModulePath($class)."config/conf.";
			return $this->loadConfigFrom($path);		
		}
		//...........................................................
		public function loadConfigFrom($path)
		{
			$ext = $this->getExt($path);
			if(is_string($ext))
			{	
				$class = 'ConfigDriver'.strtoupper($ext);
				require_once "configDrivers/ConfigDriver.php";
				require_once "configDrivers/".$class.".php";
				$obj = new $class($path.$ext);
				return $obj->getConfig();
			}else return false; 		
		}
		//...........................................................
		private function getExt($path)
		{
			foreach($this->order as $i)
				if(file_exists($path.$i)) return $i;
			return -1;
		}
		//...........................................................
	}
?>
