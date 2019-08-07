<?php
	$config["tpl"]["path"]  = 'server/templates/';

	$config["plugins"][]    = "ProjectAdmin";
	$config["plugins"][]    = "TemplateAdmin";
	$config["plugins"][]    = "DoctrineAdmin";
	$config["plugins"][]    = "Help";

	return $config;
?>
