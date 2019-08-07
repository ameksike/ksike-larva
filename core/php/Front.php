<?php
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: php
 * @version: 0.1

 * @description: Script que implementa el controlador frontal del framework
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 01/06/2010
 * @update-Date: 01/06/2010
 * @license: GPL v3
 *
 */
	include 'Utils.php';
	include  '../../'.Utils::getDatabyId('proj').'core/config/init.php';
	include  '../config/init.php';
	include 'ErrorHandler'.STD_EXT;
	ErrorHandler::init();
	include 'FrontController'.STD_EXT;
	$frontController = new FrontController(
		Utils::getDatabyId('outFormat'), 
		Utils::getDatabyId('outOption'),
		Utils::getDatabyId('outInfo')
	);
	$frontController->doAccess(
		Utils::getDatabyId('controller'), 
		Utils::getDatabyId('action'), 
		Utils::getDatabyId('params'),
		null
	);
?>
