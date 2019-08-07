<?php
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: interfaces
 * @version: 0.1

 * @description: Security es una interfaz para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 02/06/2010
 * @update-Date: 02/06/2010
 * @license: GPL v3
 *
 */
	interface Security
	{
		public function allow($certy, $acction);
		public function allowFailed($certy, $acction);
	}
?>
