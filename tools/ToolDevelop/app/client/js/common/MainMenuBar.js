/**
 *
 * Description: MainMenuBar es libria principal para la administracion de las interfaces
 * Authors: ing Antonio Membrides Espinosa
 * Making Date: 22/12/2010
 * Update Date: 22/12/2010
 *
 * @package: app
 * @subpackage: js
 * @version:
 *
 */
var MainMenuBar = function(params)
{
	var _this = this;
	this.obj  = new Ext.Toolbar({
	    id:'mainToolBar',
	    items: ['-',{
			text:'<u>F</u>ile',
			id: "mfile",
			menu:[{
					text:'<u>N</u>ew',
					id: "mnew",
					menu:[]
				},{
					text:'<u>O</u>pen',
					id: "mopen",
					menu:[]
				},'-',{
					text:'<u>A</u>dd',
					id: "madd",
					disabled:true,
					menu:[]
				},'-',{
					text:'<u>C</u>ose',
					id: "mclose",
					menu:[]
				},{
				    	text:'<u>Cl</u>ose All',
					id: "mcloseall",
					menu:[]
				},'-',{
					text:'<u>S</u>ave',
					id: "msave",
				        disabled:true,
					menu:[]
				},{
					text:'<u>S</u>ave All',
					id: "msaveall",
					disabled:true,
					menu:[]			
				},'-',{
				    text:'<u>R</u>ecent Project',
				    disabled:true
				},'-',{
					text:'Salir'
			}]
		},{
			text:'<u>V</u>iew',
			menu:[{
					id:'tooltip_btn_dbexplorer',
					text:'DB Explorer',
					iconAlign:'right',
					checked:false
				},{
					id:'tooltip_btn_sqlassistant',
					text:'SQL Assistant',
					iconAlign:'right',
					checked:false
				},{
					text:'<u>T</u>oolbars',
					menu:[{
						text:'<u>D</u>atabase',
						checked:true,
						handler:function(){
							if(Ext.getCmp('tooltip_btng_database').hidden)
								Ext.getCmp('tooltip_btng_database').show();
							else
								Ext.getCmp('tooltip_btng_database').hide();
						}
					},{
						text:'<u>T</u>ools',
						checked:true,
						handler:function(){
							if(Ext.getCmp('tooltip_btng_tools').hidden)
								Ext.getCmp('tooltip_btng_tools').show();
							else
								Ext.getCmp('tooltip_btng_tools').hide();
						}
					},{
						text:'<u>W</u>indows',
						checked:true,
						handler:function(){
							if(Ext.getCmp('tooltip_btng_windows').hidden)
								Ext.getCmp('tooltip_btng_windows').show();
							else
								Ext.getCmp('tooltip_btng_windows').hide();
						}
					},{
						text:'<u>O</u>ptions',
						checked:true,
						handler:function(){
							if(Ext.getCmp('tooltip_btng_options').hidden)
								Ext.getCmp('tooltip_btng_options').show();
							else
								Ext.getCmp('tooltip_btng_options').hide();
						}
					}]
			}]
		},{
			text:'<u>T</u>ools',
			id: "mtools",
			menu:[]          
		},{
			text:'<u>W</u>indow',
			menu:[{
					text:'Window List',
					disabled:true,
					iconCls:'icon-windowlist'
				},'-',{
					text:'Cascade',
					disabled:true,
					iconCls:'icon-cascade'
				},{
					text:'Tile Horizontal',
					disabled:true,
					iconCls:'icon-tilehorizontal'
				},{
					text:'Tile Vertical',
					disabled:true,
					iconCls:'icon-tilevertical'
				},{
					text:'Set Defaults To All Windows' ,
					disabled:true,
					iconCls:'icon-setdefault'
				},'-',{
					text:'Reset All wrapper_toolbars and Menus'
				},'-',{
					text:'Close All',
					disabled:true,
					iconCls:'icon-closeall'
				},{
					text:'Close',
					disabled:true,
					menu:[]
				},'-',{
					text:'Previous Window',
					disabled:true,
					iconCls:'icon-previouswindow'
				},{
					text:'Next Window',
					disabled:true,
					iconCls:'icon-nextwindow'
			}]
		}]
	});
	this.add = function(menuObj, id)
	{
		if(id){
			var com = Ext.getCmp(id);
			if(com) com.menu.add(menuObj);
		}
		else _this.obj.add(menuObj);
	}
};
