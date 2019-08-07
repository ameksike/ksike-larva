<?php
	class {$GLOBALS['name']} extends Plugin
	{
		public function __construct() {
			{$GLOBALS['news']}
		}

		public function doIt($params){
			$data = $params->name.' server responce';
			return array(
				'result'=>$data,
				'age'=>$params->age
			);	
		} 

	}
?>
