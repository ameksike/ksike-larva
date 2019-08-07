<?php defined('STD_ACCESS') OR die('No direct access allowed.');
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: php
 * @version: 0.1

 * @escription: Linker es una libreria que implementa el mecanismos de Señales y Ranuras 
 * @authors: ing. Antonio Membrides Espinosa
 * @making Date: 02/06/2010
 * @update Date: 02/06/2010
 * @license: GPL v3
 *
 */
    class Linker
    {
	private $units;

	public function __construct() 
	{
		$this->units = array('pos'=>array(),'pre'=>array());
	}

	public function connect($signal, $classSignal, $slot, $classSlot, $type='pos', $handle=null)
	{
	    $this->units[$type][$classSignal][$signal][] = array(
		      'handle'=>$handle,
		      'slot'=>$slot,
		      'class'=>$classSlot
	    );
	}

	public function disconnect($signal, $classSignal, $slot, $classSlot, $type='pos')
	{
		//falta
	}

	public function getPrecondition($controller, $action)
	{
		if(isset($this->units['pre'][$controller][$action])){
			$result = $this->units['pre'][$controller][$action];
			if($result) return $result;
		}
		return array();
	}

	public function getPostcondition($controller, $action)	
	{
		if(isset($this->units['pos'][$controller][$action])){
			$result = $this->units['pos'][$controller][$action];
			if($result) return $result;
		}
		return array();
	}

	public function load($fileName="conf")
	{
		$driv = DriverManager::factory('ConfigManager');
		$conf = $driv->loadConfigFrom("../../".STD_APP.STD_CONFIG.$fileName.".");
		if(!isset($conf["linker"])) $conf = $driv->loadConfigFrom("../../".STD_APP.STD_CONFIG."linker.");
		$this->addUnits($conf["linker"]);
	}

	public function addUnits($lst)
	{
		if(count($this->units)<=0) $this->units = $lst;
		else $this->units = array_merge_recursive($this->units, $lst);
	}
    }
?>
