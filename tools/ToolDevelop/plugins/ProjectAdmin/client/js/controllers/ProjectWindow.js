/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
ProjectWindow.prototype.make = function()
{
	var _that = ProjectWindow.prototype;
	var data = {
		"name": document.getElementById("projectname").value
	};
	_that.buildProy(data);		
	_that.obj.hide();
}

ProjectWindow.prototype.cancel = function()
{
	var _that = ProjectWindow.prototype;
	_that.obj.hide();
}

ProjectWindow.prototype.onProjectSelect = function(node, e)
{
	var _that = ProjectWindow.prototype;
	_that.tplStore.load({params:{'params': Ext.util.JSON.encode({
		"id":node.attributes.id
	})}});
}

ProjectWindow.prototype.buildProy = function(params)
{
	//... plugins ......
	var ToolsAdmin = {
		"tpl":"defaultPlugin/",
		"tplPath":"templates/plugins/",
		"optionalDir":[
			"css",
			"img",
			"common",
			"config",
			"include",
			"controllers",
			"views"
		],"data":{
			"name":"ToolsAdmin"
		} 
	}

	var ServerAdmin = {
		"tpl":"customPlugin/",
		"tplPath":"templates/plugins/",
		"optionalDir":[
			"css",
			"img",
			"common",
			"config"
		],"data":{
			"name":"ServerAdmin",
			"news":"$this->data = \'Info\'; ",
			"const":"alert(\'soy DevelopAdmin\'); var valido = function(){ return false; }"
		}
	}
	
	std.FrontController.send({
		action: 'makeProject',
		controller: "ProjectAdmin",
		params: {
			"proj":{
				"name":params.name,
				"init":"app/config/", 
				"core":"../../",
				"path": "../../project/",
				"proj":"project/"+params.name+"/",
				"plugins":"project/"+params.name+"/",
				"app":"project/"+params.name+"/",					
				"tpl":"defaultProject/",
				"tplPath":"templates/project/",
				"optionalDir": [
					"lib",
					"tools",
					"core",
					"core/config",
					"plugins"
				]
			},"app":{
				"path":"app/",
				"tpl":"../app/defaultApp/",
				"optionalDir": [
					"css", 
					"img", 
					"log",
					"common",
					"config",
					"include"
				]
			},"plugins":[ToolsAdmin, ServerAdmin]
		}
	});
}
