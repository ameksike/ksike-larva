/**
 *
 * Description: MainGUIDevelop es la libreria principal para la administracion de las interfaces
 * Authors: ing Antonio Membrides Espinosa, ...
 * Making Date: 22/12/2010
 * Update Date: 22/12/2010
 *
 * @package: app
 * @subpackage: js
 * @version:
 *
 */
var MainGUIDevelop = function(params)
{
    var _this = this;

    this.toolbar = new MainToolBar();
    this.menubar = new MainMenuBar();
    this.update  = function()
    {
	_this.ui.doLayout();
    }

    this.region = {
	center: {
		obj: new Ext.TabPanel({
			id:'center',
			width:150,
			region:'center',
			activeTab: 0
    		}),
		add: function(obj){
			_this.region.center.obj.add(obj).show();
		}
	}, north: new function(){
		this.cont = new Ext.Panel({
			id:'north_contents',
			region:'center',
			border:false,
			defaults:{border:false},
			tbar: _this.menubar.obj,
			items: _this.toolbar.obj

		});
		this.obj = new Ext.Panel({
			id:'north',
			frame:false,
			padding:-5,
			height:100,
			region:'north',
			layout:'border',
			border:false,
			defaults:{border:false},
			items:[
				new Ext.BoxComponent({el:'header-div', region:'north'}),
				this.cont
			]
    		})
	}, south: {
		obj: new Ext.Panel({
			id:'south',
			height:50,
			region:'south',    
			activeTab:0,
			split:true,
			collapsible:true,
			collapseMode:'mini',
			collapsed:true,
			tabPosition:'bottom',
			items:[{title:'Errors'}]
    		}),
		add:function(obj){
			_this.region.south.obj.add(obj);	
			_this.region.south.obj.doLayout();
		}
	}, east: new function(){
		var _this = this;
		this.obj = new Ext.Panel({
		    title:'East',
		    id:'east',
		    width:150,
		    region:'east',
		    collapsible:true,
		    collapseMode:'mini',
		    split:true,
		    collapsed:true
    		});
		this.add = function(obj){
			_this.obj.add(obj);
			_this.obj.expand(obj.expand ? obj.expand : true);
		}
                this.rem = function(obj){_this.tab.remove(obj);}
	}, west: new function(){
		var _this = this;
		this.root = new Ext.tree.TreeNode({
			id:'projectsRoot',	
			expanded: true
		});
		this.obj = new Ext.Panel({
			id:'west',
			title:'Projects',
			width:150,
			layout: "fit",
			region:'west',
			collapsible:true,
			collapsed:true,
			collapseMode:'mini',
			split:true,
			items: new Ext.tree.TreePanel({
				rootVisible: false,
				layout: "fit",
				root: _this.root
			})
    		});
		this.add = function(obj){
			_this.root.appendChild(obj);	
			_this.obj.expand(obj.expand ? obj.expand : true);
		}
	}
    }; 
    this.buildGUI = function()
    {
	Ext.BLANK_IMAGE_URL = "../../lib/ext/images/default/s.gif";
	Ext.QuickTips.init();
	_this.ui = new Ext.Viewport({
		//renderTo:document.body,
		defaults:{
			frame:false,
			border:false,
			margins:'0px'
		},
		layout: 'border',
		frame: false,
		items: [
			_this.region.center.obj,
			_this.region.north.obj, 
			_this.region.south.obj,
			_this.region.west.obj,
			_this.region.east.obj
		]
	});
        return _this.ui;
    }
};
