<?php defined('STD_ACCESS') OR die('No direct access allowed.');
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: php
 * @version: 0.1

 * @description: Factory es una libreria para la creacion dinamica de instancias 
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 06/11/2010
 * @update-Date: 05/12/2010
 * @license: GPL v2
 *
 */
	class Factory
	{
		public static function &instantiate($class, $params=0)
		{
			if($params)
			{
				$code  = '$obj = new ';
				$code .= $class.'(';
				$code .= is_array($params) ? self::implode($params) : self::getData($params);
				$code .= ');';
				eval($code);
			}else $obj = new $class;
			return $obj;
		}
		//...........................................................
		private static function implode($params)
		{
			$code = self::getData($params[0]);
			for($i=1; $i<count($params); $i++) 
				$code .= ', '.self::getData($params[$i]);
			return $code;
		}		
		//...........................................................
		private static function getData($data)
		{
			if(is_string($data))
			 return "'".$data."'";
			else return $data;
		}
		//...........................................................
	}
?>
