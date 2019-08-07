/**
 *
 * Description: MainToolBar es libria principal para la administracion de las interfaces
 * Authors: ing Antonio Membrides Espinosa
 * Making Date: 22/12/2010
 * Update Date: 22/12/2010
 *
 * @package: app
 * @subpackage: js
 * @version:
 *
 */
var MainToolBar = function(params)
{
	var _this = this;
	this.obj = {
		tbar:['-',{
			xtype:'buttongroup',
			id:'tooltip_btng_database',
			items:[{
				scale:'small',
				iconCls:'icon-registerdb',
				tooltip:'Register Database',
				handler:function(){
					new HostRegisterWindow({singleDatabase:true});
				}			
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-registrationinfo',
				tooltip:'Database Registration Info'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-unregisterdb',
				tooltip:'Unregister Database'
			},{
				scale:'small',
				iconCls:'icon-createdb',
				tooltip:'Create Database'
			},{
				tooltip:'More Buttons',
				width:10,
		    menu: [{
		        text: 'Menu Button',
		        menu:[{text:'algo'},{text:'algo'},{text:'algo'}]
				}]
		}]
		},{
			xtype:'buttongroup',
			id:'tooltip_btng_options',
			items:[{
				scale:'small',
				iconCls:'icon-enviromentoptions',
				tooltip:'Enviroment Options'
			},{
				scale:'small',
				iconCls:'icon-editoroptions',
				tooltip:'Edit Options'
			},{
				tooltip:'More Buttons',
				width:10,
				menu: [{
					text: 'Menu Button',
					menu: []				
				}]
			}]
		},{
			xtype:'buttongroup',
			id:'tooltip_btng_tools',
			items:[{
				scale:'small',
				disabled:true,
				iconCls:'icon-showsqleditor',
				tooltip:'Show SQL Editor'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-newsqleditor',
				tooltip:'New SQL Editor'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-showquerybuilder',
				tooltip:'Show Query Builder'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-newquerybuilder',
				tooltip:'New Query Builder'
			},{
				scale:'small',
				iconCls:'icon-sqlmonitor',
				tooltip:'SQL Monitor'
			},{
				scale:'small',
				iconCls:'icon-sqlscript',
				tooltip:'SQL Script'
			},{
				scale:'small',
				iconCls:'icon-newsqlscript',
				tooltip:'New SQL Script'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-extractdb',
				tooltip:'Extract Database'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-printmetadata',
				tooltip:'Print Metadata'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-htmlreport',
				tooltip:'HTML Report'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-dependencytree',
				tooltip:'Dependency Tree'
			},{
				scale:'small',
				iconCls:'icon-usermanager',
				tooltip:'User Manager'
			},{
				scale:'small',
				iconCls:'icon-groupmanager',
				tooltip:'Group Manager'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-grantmanager',
				tooltip:'Grant Manager'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-visualdbdesigner',
				tooltip:'Visual Database Designer'
			},{
				tooltip:'More Buttons',
				width:10,
				menu: [{
					text: 'Menu Button',
					menu:[{text:'algo'},{text:'algo'},{text:'algo'}]
				}]
			}]
		},{
			xtype:'buttongroup',
			id:'tooltip_btng_windows',
			items:[{
				scale:'small',
				disabled:true,
				iconCls:'icon-windowlist',
				tooltip:'Window List'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-cascade',
				tooltip:'Cascade'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-tilehorizontal',
				tooltip:'Tile Horizontal'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-tilevertical',
				tooltip:'Tile Vertical'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-setdefault',
				tooltip:'Set Defaults To All Child Windows'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-closeall',
				tooltip:'Close All'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-previouswindow',
				tooltip:'Previous Window'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-nextwindow',
				tooltip:'Next Window'
			},{
				tooltip:'More Buttons',
				width:10,
				menu: [{
					text: 'Menu Button',
					menu:[{text:'algo'},{text:'algo'},{text:'algo'}]
				}]
			}]
		},{
			xtype:'buttongroup',
			items:[{
				scale:'small',
				iconCls:'icon-backupdb',
				tooltip:'Backup Database'
			},{
				scale:'small',
				iconCls:'icon-restoredb',
				tooltip:'Restore Database'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-analyzetables',
				tooltip:'Analyze Tables'
			},{
				scale:'small',
				disabled:true,
				iconCls:'icon-vacuumtables',
				tooltip:'Vacuum Tables'
			},{
				scale:'small',
				iconCls:'icon-serverstatus',
				tooltip:'Server Status'
			},{
				scale:'small',
				iconCls:'icon-serverconfig',
				tooltip:'Server Configuration'
			},{
				tooltip:'More Buttons',
				width:10,
				menu: [{
					text: 'Menu Button',
					menu:[{text:'algo'},{text:'algo'},{text:'algo'}]
				}]
			}]
		}]
	}
};
