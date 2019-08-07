<?php
/**
 *
 * @framework: Merma
 * @package: Core
 * @subpackage: configDrivers
 * @version: 0.1

 * @description: ConfigDriver es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 15/06/2010
 * @update-Date: 15/06/2010
 * @license: GPL v3
 *
 */
	class ConfigDriver
	{
		protected $file;
		public function __construct($path="") 
		{
			$this->file = $path;
		}
		public function setFilePath($path)
		{
			$this->file = $path;
		}
		protected function getConfig(){}
	}
?>
