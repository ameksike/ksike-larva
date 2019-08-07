Kcl.Class( "TemplateAdmin",
{
	extend: Kcl.Plugin,
	behavior:{
		buildGUI : function(params){
			var _this = TemplateAdmin.prototype;
			_this.gui = params.gui;
			_this.gui.menubar.add({//--- Template menu
				text:'Template',
				menu:[{
						text:'Import'
					},{
						text:'Export',
						disabled:true
					},{
						text:'Edit',
						disabled:true
					},{
						text:'Property'
				}]
			});
		},
		serverResponse : function(objResponse){		}
	}
});
