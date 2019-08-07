<?php
/**
 *
 * @framework: Merma
 * @package: Core
 * @subpackage: configDrivers
 * @version: 0.1

 * @description: ConfigDriverJSON es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 15/06/2010
 * @update-Date: 20/12/2010
 * @license: GPL v2
 *
 */
	class OutDriverJSON extends OutDriver
	{
		public function __construct($option="") 
		{ 
			parent::__construct($option); 
		}
		//...........................................................
		public function getOut($data=false)
		{
			$this->buildHead("txt/json");
			if($data) return json_encode($data);
		}
	}
?>
