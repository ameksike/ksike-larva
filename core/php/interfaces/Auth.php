<?php
/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: interfaces
 * @version: 0.1

 * @description: Auth es una libreria para el trabajo con ...
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 02/06/2010
 * @update-Date: 02/06/2010
 * @license: GPL v3
 *
 */
	interface Auth
	{
		public function doAuth($certy, $acction);
		public function authSuccess();
		public function authFailed();
	}
?>
