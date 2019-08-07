<?php
/**
 *
 * @framework: Merma
 * @package: Core
 * @subpackage: configDrivers
 * @version: 0.1

 * @description: ConfigDriverPHP es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 15/06/2010
 * @update-Date: 15/06/2010
 * @license: GPL v3
 *
 */
	class ConfigDriverPHP extends ConfigDriver
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
			return $this->fileConf;
		}
	}
?>
