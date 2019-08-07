<?php defined('STD_ACCESS') OR die('No direct access allowed.');
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: php
 * @version: 0.1

 * @description: Log es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 01/06/2010
 * @update-Date: 06/11/2010 
 * @license: GPL v3
 *
 */
    class Log 
    {
	public static $ext = '.log';
	public static $dateFormat = 'Y/m/d H:i:s';
	public static $format = array( 'in'=>': <<', 'out'=>'>>', '|'=>', ' );
	//............................................................
	public static function save($struct, $name="trace", $path='../log/')
	{
		if(!file_exists($path)) mkdir($path);
		error_log(self::getMessage($struct)." \n", 3, $path.$name.self::$ext);
	}
	//............................................................
	private static function getMessage($struct)
	{
		$mess = 'Date'.self::$format['in'].date(self::$dateFormat).self::$format['out'];
		foreach($struct as $key=>$value)
			$mess .= self::$format['|'].$key.self::$format['in'].$value.self::$format['out'];
		return $mess;
	}
    }
?>
