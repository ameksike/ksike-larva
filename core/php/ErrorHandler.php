<?php defined('STD_ACCESS') OR die('No direct access allowed.');
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: php
 * @version: 0.1

 * @description: ErrorHandler es una libreria para el trabajo con 
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 08/09/2010
 * @update-Date: 08/09/2010
 * @license: GPL v3
 *
 */
include "Log.php";
include 'Router.php';
class ErrorHandler
{
	public static $oldHandler;
	public static $info = array(
		E_ERROR			=>array('name'=>'E_ERROR', 		'desc'=>'Error'),
		E_WARNING		=>array('name'=>'E_WARNING', 		'desc'=>'Advertencia'),
		E_PARSE			=>array('name'=>'E_PARSE', 		'desc'=>'Error de Intérprete'),
		E_NOTICE		=>array('name'=>'E_NOTICE', 		'desc'=>'Anotación'),
		E_CORE_ERROR		=>array('name'=>'E_CORE_ERROR', 	'desc'=>'Error de Núcleo'),
		E_CORE_WARNING		=>array('name'=>'E_CORE_WARNING', 	'desc'=>'Advertencia de Núcleo'),
		E_COMPILE_ERROR		=>array('name'=>'E_COMPILE_ERROR',	'desc'=>'Error de Compilación'),
		E_COMPILE_WARNING	=>array('name'=>'E_COMPILE_WARNING', 	'desc'=>'Advertencia de Compilación'),
		E_STRICT		=>array('name'=>'E_STRICT', 		'desc'=>'Anotación de tiempo de ejecución'),
		//E_RECOVERABLE_ERROR	=>array('name'=>'E_RECOVERABLE_ERROR', 	'desc'=>'Error Fatal Atrapable'),
		E_USER_ERROR		=>array('name'=>'E_USER_ERROR', 	'desc'=>'Error de Usuario'),
		E_USER_WARNING		=>array('name'=>'E_USER_WARNING', 	'desc'=>'Advertencia de Usuario'),
		E_USER_NOTICE		=>array('name'=>'E_USER_NOTICE', 	'desc'=>'Anotación de Usuario')
		//E_USER_DEPRECATED	=>array('name'=>'E_USER_DEPRECATED', 	'desc'=>''),	
		//E_DEPRECATED		=>array('name'=>'E_DEPRECATED', 	'desc'=>''),
	);

	public static function init()
	{
		error_reporting(E_ALL | E_STRICT);
		self::$oldHandler = set_error_handler('ErrorHandler::handler');
	}

	public static function handler($errno, $errstr, $errfile, $errline) 
	{
		$path = Router::getErrorPath($errfile);
		$name = self::$info[$errno]['name'];
		if($name == '') $name = 'trace';
		Log::save(array('File'=>$errfile, 'Line'=>$errline, 'Description'=>$errstr), $name, $path);
	}
}
?>
