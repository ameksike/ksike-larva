<?php
/**
 *
 * @framework: Merma
 * @package: Core
 * @subpackage: php
 * @version: 0.1

 * @description: OutManager es una libreria para el trabajo con los formatos de exportacion de datos del controldor frontal...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 16/06/2010
 * @update-Date: 16/06/2010
 * @license: GPL v2
 *
 */
	class OutManager
	{
		public $path;
		private $obj;
		private $format;
		private $option;
		//...........................................................
		public function __construct($format="json", $option="", $path= "outDrivers/") {
			$this->path = $path;
			$this->format = $format;
			$this->option = $option;
		}
		//...........................................................
		public function getObjFormat()
		{
			if(!$this->obj) $this->obj = $this->loadOutFormat($this->format, $this->option);
			return $this->obj;
		}
		//...........................................................
		public function getOut($data="")
		{
			$this->obj = $this->loadOutFormat($this->format, $this->option);
			if($this->obj) return $this->obj->getOut($data);
		}
		//...........................................................
		private function loadOutFormat($format, $option="")
		{
			if(is_string($format))
			{
				$class = 'OutDriver'.strtoupper($format);
				require_once $this->path."OutDriver.php";
				require_once $this->path.$class.".php";
				$obj = new $class($option);
				return $obj;

			}else return false; 		
		}
	}
?>
