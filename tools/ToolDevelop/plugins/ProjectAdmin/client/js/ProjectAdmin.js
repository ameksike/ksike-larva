/**
 *
 * @framework: Merma
 * @package: Plugins
 * @subpackage: ProjectAdmin
 * @version: 0.1

 * @description: ProjectAdmin es una clase para ...
 * @authors: 
 * @making-Date: 03/06/2010
 * @update-Date: 09/09/2010
 * @license: GPL v2
 *
 */
Kcl.Class( "ProjectAdmin",
{
	extend: Kcl.Plugin,
	property:{
		window:null
	},
	behavior:{
		construct : function(){
			var _this = ProjectAdmin.prototype;
			_this.parent.construct.apply(this, []);
			_this.window = new ProjectWindow();
		},
		buildGUI : function(params){
			var _this = ProjectAdmin.prototype;
			_this.gui = params.gui;
			_this.gui.menubar.add({//--- Nuevo
				text:'Project',
				handler:function(){
					_this.window.obj.show();
				}
			}, "mnew");

			_this.gui.menubar.add({//--- Abrir
				text:'Project',
				handler:function(){}
			}, "mopen");

			_this.gui.menubar.add({//--- Proyecto menu
				text:'Project',
				menu:[{
						text:'Property',
					},{
						text:'Make Module',
					},{
						text:'Export Template',
						disabled:true
				}]
			});
		},
		serverResponse : function(objResponse){
			var _this = ProjectAdmin.prototype;
			switch(objResponse._action)
			{
				case 'makeProject':
					var namepro = objResponse.name;
					Ext.Msg.alert('Make Project: '+namepro, 'Changes saved '+objResponse.result);
					//--- update main gui
					_this.gui.region.center.add({ "title": namepro, "id": namepro});
					_this.gui.region.west.add({ 
						"text": namepro, 
						"id": namepro,
						children:[{
								text:"app", leaf: true
							},{
								text:"plugins",
								children:[{text:"conf",leaf: true},{text:"test",leaf: true}]
						}]
					});
				break;
			}
		}
	}
});

ProjectAdmin.require = [
	"plugins/ProjectAdmin/client/js/views/ProjectWindow.js",
	"plugins/ProjectAdmin/client/js/controllers/ProjectWindow.js"
];
