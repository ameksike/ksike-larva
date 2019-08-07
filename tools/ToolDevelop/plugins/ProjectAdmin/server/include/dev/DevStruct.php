<?php
/**
 *
 * @framework: Merma
 * @package: Tools
 * @subpackage: Develop
 * @version: 0.1 

 * @description: DevStruct es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 10/10/2010
 * @update-Date: 12/10/2010
 * @license: GPL v2
 *
 */
	include_once "DevManager.php";
	include_once "../hard/HardManager.php";

	class DevStruct implements DevManager
	{
		public $extJS;
		public $extPHP;
		public $extTPL;
		public $data;
		public $optionalDir;

		protected $dir;
		protected $files;
		protected $proj;
		protected $tpl;
		protected $path;

		public function __construct($data, $tpl, $path, $optionalDir=null)
		{
			$this->extJS  = "js";
			$this->extPHP = "php";
			$this->extTPL = "tpl";
			$this->data   = $data;
			$this->path   = $path;
			$this->tpl    = $tpl;
			$this->proj   = $proj;
			$this->dir    = array();
			$this->files  = array();
			$this->optionalDir = $optionalDir;
		}
	
		public function build()
		{
			$this->buildObligatoryDir();
			$this->buildOptionalDir($this->optionalDir);
			$this->buildObligatoryFiles();
			$this->copyDependency();
		}

		protected function buildObligatoryFiles()
		{
			foreach($this->files as $tpl=>$file)
				HardManager::createFileFromTpl($this->tpl.$tpl, $this->path.$file, $this->data);
		}

		protected function buildObligatoryDir()
		{
			HardManager::makeDir($this->path, $this->dir);
		}

		protected function buildOptionalDir($optionalDir)
		{
			if($optionalDir)foreach($optionalDir as $i)
				$this->makeOptionalDir($i, $this->path);
		}

		protected function makeOptionalDir($dir)
		{
			switch($dir){
				case 'plugins' 		:  HardManager::makeDir($this->path, "plugins/"); break;
				case 'lib'  		:  HardManager::makeDir($this->path, "lib/"); break;
				case 'tools'  		:  HardManager::makeDir($this->path, "tools/"); break;
				case 'log'     		:  HardManager::makeDir($this->path, "log/"); break;
				case 'include' 		:  HardManager::makeDir($this->path, "server/include"); break;
				case 'config'  		:  HardManager::makeDir($this->path, "config/"); break;
				case 'img'     		:  HardManager::makeDir($this->path, "client/img"); break;
				case 'css'     		:  HardManager::makeDir($this->path, "client/css"); break;
				case 'controllers'	:  HardManager::makeDir($this->path, "client/js/controllers"); break;
				case 'views'  		:  HardManager::makeDir($this->path, "client/js/views"); break;
				case 'common'  		:  HardManager::makeDir($this->path, array("client/js/common", "server/common")); break;
			}	
		}

		protected function copyDependency()
		{
			$list = $this->getConf("dependency");
			if($list)foreach($list as $Key=>$i)
			{
				HardManager::makeDir($this->path, $i);
				copy($this->tpl."dependency/".$Key, $this->path.$i.$Key);	
			}	
		}

		protected function getConf($id)
		{
			$driv = DriverManager::factory('ConfigManager');
			if(!$this->conf)$this->conf = $driv->loadConfigFrom($this->tpl."config/conf.");
			return $this->conf[$id];
		}
	}
?>
