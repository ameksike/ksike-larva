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
	class ConfigDriverJSON extends ConfigDriver
	{
		private $fileConf;
		//...........................................................
		public function __construct($path="") 
		{ 
			parent::__construct($path); 
			$this->fileConf = 0;
		}
		//...........................................................
		public function getConfig()
		{
			if(!$this->fileConf) $this->fileConf = include $this->file;
			return json_decode($this->fileConf, true);
		}
	}
?>
