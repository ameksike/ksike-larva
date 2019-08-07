Kcl.Class( "Help",
{
	extend: Kcl.Plugin,
	behavior:{
		buildGUI : function(params){
			var _this = Help.prototype;
			_this.gui = params.gui
			_this.gui.menubar.obj.add({
				text:'<u>A</u>yuda',
				menu:[{
						text:'Tip of the Day',
						iconCls:'icon-tipofday'
					},{
						text:"What's New?",
						iconCls:'icon-menuhelp'
					},{
						text:'Contents',
						iconCls:'icon-menuhelp'
					},{
						text:'Additional Help Files',
						iconCls:'icon-menuhelp',
						disabled:true,
						menu:[]
					},'-',{
						text:'Web Framework References',
						iconCls:'icon-menuhelp'
					},'-',{
						text:'Merma Home Page',
						iconCls:'icon-menuhomepage'
					},{
						text:'Merma Direct',
						iconCls:'icon-menudirect'
					},'-',{
						text:'Send Bug Reports to...',
						iconCls:'icon-menuemail'
					},'-',{
						text:'About',
						iconCls:'icon-menuabout'
				}]
			});
		},
		serverResponse : function(objResponse){		}
	}
});
