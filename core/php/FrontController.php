<?php defined('STD_ACCESS') OR die('No direct access allowed.');
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: php
 * @version: 0.1

 * @description: FrontController es una libreria para el trabajo con 
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 02/06/2010
 * @update-Date: 06/11/2010
 * @license: GPL v3
 *
 */
	include 'Loader.php';
	class FrontController
	{
		private $out;
		private $main;
		private $outInfo;
		private $outFormat;
		private $outOption;

		public function __construct($outFormat="json", $outOption="", $outInfo="embebed") 
		{	
			$this->out  = array();
			$this->outInfo = $outInfo ? $outInfo : "embebed"; 
			$this->outFormat = $outFormat ? $outFormat : "json";
			$this->outOption = $outOption;
			$this->main = Loader::getModule();
		}

		public function doAccess($controller, $action, $params, $certificate=null)
		{
			$this->doIt($controller, $action, $params, $certificate);
			$this->send();
		}

		private function doIt($controller, $action, $params, $certificate=null)
		{
			if($this->main->linker)$pre = $this->main->linker->getPrecondition($controller, $action);
			foreach($pre as $i)
				$this->doIt($i['class'], $i['slot'], $params, $certificate);

			$paramsr = $this->doAction($action, $params, $certificate, $controller);

			if($this->main->linker)$pos = $this->main->linker->getPostcondition($controller, $action);
			foreach($pos as $i)
				$this->doIt($i['class'], $i['slot'], $paramsr, $certificate);
		}

		private function doAction($action, $params=null, $certificate=null, $controller='Main')
		{
			if($controller != 'Main') $obj = Loader::getModule($controller);
			else $obj = $this->main;
			$auth = true;
			if(method_exists($obj, 'allow')) $auth = $obj->allow($certificate, $action);
			if($auth)
			{
				if(is_string($params)) $params = json_decode($params, false);
				$result = call_user_func_array(array($obj, $action), array($params));
			}
			else if(method_exists($obj, 'allowFailed')) $result = $obj->allowFailed($certificate, $action);
			$this->saveOut($result, $controller, $action);
			return $result;
		}

		private function send()
		{
			$count = count($this->out);
			if($count > 0)
			{ 
				$OutManager = DriverManager::factory('OutManager');
				if($count == 1) die( $OutManager->getOut($this->out[0]) );
				else die( $OutManager->getOut($this->out) );
			}
		}

		private function saveOut($value, $mod="Main", $action="do")
		{
			if($value)
			{
				if($this->outInfo=="embebed") 
					$value = $this->insertInfo($value, $mod, $action);
				$this->out[] = $value;
			}
		}

		private function insertInfo($value, $mod="Main", $action="do")
		{
			if(!is_array($value)) $result["data"] = $value;
			else $result = $value;
			$result["_plugin"] = $mod;
			$result["_action"] = $action;
			return $result;
		}
	}
