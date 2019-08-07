/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var ProjectWindow = function()
{
	var _that = ProjectWindow.prototype;

	_that.tplStore = new Ext.data.JsonStore({
	    autoDestroy: true,
	    url: std.FrontController.getRequest("getTemplates", "ProjectAdmin"),
	    storeId: 'myStore',
	    root: 'data',
	    idProperty: 'name',
	    fields: ['namet', 'typet', 'datet']
	});


	var dataview_templates = new Ext.Panel({
	    id:'images-view',
	    region:'center',
	    title:'Template:',
	    margins:'2 0 2 2',
	    items: new Ext.grid.GridPanel({
		store: _that.tplStore,
		columns: [
		    {id:'namet', header: 'Name', width: 190, sortable: true, dataIndex: 'namet'},
		    {header: 'Type', width: 75, sortable: true, dataIndex: 'typet'},
		    {header: 'Date', width: 89, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'datet'}
		],
		stripeRows: true,
		//autoExpandColumn: 'namet',
		height: 350,
		width: 600,
		stateful: true,
		stateId: 'grid'        
	    })
	});

	var tree_projectTypes = new Ext.tree.TreePanel({
	    title:'Project Type:',
	    region:'west',
	    margins:'2 2 2 0',
	    width:200,
	    root:{
		expanded: true,
		text:"common",
		children:[{
				text:"project",
				leaf: true, id:"project",
				listeners : {'click':_that.onProjectSelect}
			},{
				text:"app",
				leaf: true, id:"app",
				listeners : {'click':_that.onProjectSelect}
			},{
				text:"plugins",
				leaf: true, id:"plugins",
				listeners : {'click':_that.onProjectSelect}
		}]
	    },
	    treeLoader:new Ext.tree.TreeLoader()
	});

	var filepath = new Ext.ux.form.FileUploadField({
		fieldLabel:'Location',
		width:500
	});

	_that.obj = new Ext.Window({
	    id:'win_new_project',
	    title:'New Project',
	    padding:'5px',
	    frame:true,
	    resizable:false,
	    constrain:true,
	    tools:[{
		id:'help'
	    }],
	    defaults:{
		border:false
	    },
	    items:[{
			layout:'border',
			border:false,
			height:250,
			items:[tree_projectTypes, dataview_templates]
		},{
			xtype:'label',
			html:'<div style="border:solid 1px gray; padding:2px;">Data\'s Project</div>'
		},{
			layout:'form',
			margins:'-5',
			frame:true,
			defaults:{ width:500 },
			items:[{
				    xtype:'textfield',
				    id:"projectname",
				    fieldLabel:'Name',
				    width:443
				},  filepath,{
				    layout:'hbox',
				    width:'100%',
				    items:[{
						xtype:'label',
						html:'<div style="font-size:12px; padding:4px 0px 0px 0px;">Template:</div>'
					    },{
						xtype:'textfield',
						margins:'0 0 0 14',
						disabled:true,
						width:200
					    },{
						xtype:'checkbox',
						margins:'5 0 0 10'
					    },{
						xtype:'label',
						html:'<div style="font-size:12px; padding:5px 0px 0px 0px;">Build directory</div>',
						width:400
				    }]
				}]
	    }],
	    buttonAlign:'right',
	    buttons:[{
			text:'Aceptar',
			handler: _that.make,
		    },{
			text:'Cancelar',
			handler: _that.cancel,
	    }]
	});
}
