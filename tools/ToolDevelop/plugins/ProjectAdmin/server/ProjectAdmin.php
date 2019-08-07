<?php
	class ProjectAdmin extends Plugin
	{
		public function makeProject($params)
		{

			$path   = Router::getModulePath("ProjectAdmin")."server/";
			$myproj = new DevProject(
				array(
					"name"=>$params->proj->name,
					"init"=>$params->proj->init, 
					"core"=>$params->proj->core,
					"proj"=>$params->proj->proj,
					"app" =>$params->proj->app,
					"plugins"=>$params->proj->plugins
				),
				$params->proj->path,
				$params->proj->tpl, 
				$params->proj->optionalDir,
				$params->app->tpl, 
				$params->app->optionalDir,				
				$path.$params->proj->tplPath
			);

			foreach($params->plugins as $i)
			{
				$data = $this->objToArray($i->data);
				$myproj->addPugin($data, $i->tpl, $i->optionalDir, $path.$i->tplPath);
			}
			
			$myproj->build();

			return array(
				"result"=>"successfully",
				"name"=>$params->proj->name
			);
		}

		public function getTemplates($params)
		{
			TplAdmin::$path = Router::getModulePath("ProjectAdmin")."server/templates/";
			$rest = TplAdmin::getTemplates($params->id);
			$lst = array();
			foreach($rest as $i)
				$lst[] = array("namet"=>$i, "typet"=>$params->id, "datet"=>"05/05/2005");
			return array("data"=>$lst, "tm"=>$rest);
		}

		private function objToArray($obj)
		{
			$lst = array();
			foreach($obj as $key=>$i)
				$lst[$key] = $i;
			return 	$lst;
		}
	}
?>
