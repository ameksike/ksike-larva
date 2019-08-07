//-------------------------------------------------------------------------
Kcl.Class( "Kcl.Main",
{
	extend: Kcl.App,
	behavior: {
		construct : function(eve, loadType){
			var _this = Kcl.Main.prototype;
			_this.parent.construct.apply(_this, [_this]);
			_this.gui = new MainGUIDevelop();
			_this.gui.buildGUI();
			_this.gui.region.center.add({
				title:'Start Page',
				html:"<br><center><h1>Welcome to Mermas Tools Develop</h1>"
			});
		},
		serverResponse:function(objResponse){
			var _this = Kcl.Main.prototype;
			_this.parent.serverResponse(objResponse, _this);
			switch(objResponse.action)
			{
				case '':
				break;
			}
		},

		onLoadPlugins : function(params){
			var _this = Kcl.Main.prototype;
			_this.buildGUI({"gui": _this.gui});
		}
	}
});

Kcl.Main.require = [
	std.Router.getLibPath()+"ext/css/ext-all.css",
	std.Router.getLibPath()+"ext/css/misc/ux-all.css",
	std.Router.getLibPath()+"ext/css/misc/fileuploadfield.css",
	std.Router.getLibPath()+"ext/js/ext-base.js",
	std.Router.getLibPath()+"ext/js/ext-all.js",
	std.Router.getLibPath()+"ext/js/ext-all-debug.js",
	std.Router.getLibPath()+"ext/js/misc/FileUploadField.js",
	std.Router.getLibPath()+"ext/js/locate/ext-lang-es.js",

	std.Router.getModulePath()+'css/icons.css',
	std.Router.getModulePath()+'css/tree_nodes.css',
	std.Router.getModulePath()+'css/init.css',
	std.Router.getModulePath()+'js/common/MainMenuBar.js',
	std.Router.getModulePath()+'js/common/MainToolBar.js',
	std.Router.getModulePath()+'js/common/MainGUIDevelop.js'
];
