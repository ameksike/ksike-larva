/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: js
 * @version: 0.1

 * @description: Loader es una clase para la administracion de la carga dinamica de modulos o plugins
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 03/06/2010
 * @update-Date: 01/09/2010
 * @license: GPL v2
 *
 */
Kcl.Class( "Kcl.Loader",
{
	patterns: "Singleton",
	extend: Kcl.Core,
	behavior: {
		construct: function(params)
		{
			params = params || {};
			var _this = Kcl.Loader.prototype;
			_this.Factory = new Kcl.Factory(params);
			_this.Router = new Kcl.Router(params);
		},
		//........................................................................
		formatParams: function(obj, type)
		{	
			var _this = Kcl.Loader.prototype;
			if(typeof(obj) == "string") obj = { "name": obj };
			obj.type = obj.type || type || "core";
			obj.file = _this.Router.getPath(obj.name, obj.type)+"js/"+obj.name+".js";
			obj.build = (typeof(obj.build) != "undefined") ? obj.build : true;
			return obj;
		}, 
		loadAsyncrhonic : function(lst, type)
		{
			params.list[i] = this.formatParams(params.list[i], type);
			for(var i in lst) if(i !="remove")this.include(lst[i].file, callback, params);
		},
		next : function (params)
		{
			var i = params.i
			if(i < params.lst.length){
				params.lst[i] = params._this.formatParams(params.lst[i], params.type);
				params.i++;
				params._this.include(params.lst[i].file, params._this.loadSyncrhonic, params);
			}else if(typeof(params.callback) != "undefined"){
				params.callback(params.params);			
			}
		},
		loadSyncrhonic : function(params)
		{
			params._this = params._this || this;
			var i = params.i;
			if(i > 0 && params.lst[i-1].build == true){
				var tmp = params.lst[i-1];
				tmp._class = params._this.Factory.getClass(tmp["name"]);
				tmp._this = params._this.Factory;
				if(tmp._class.require){ 
					var _lst = tmp._class.require;
					tmp._class.require = 0;
					params._this.require(_lst, params._this.loadSyncrhonic, params);
				}
				else {
					params._this.Factory.build(tmp);
					params._this.next(params);
				}				
			} else params._this.next(params);

		},
		load : function(lst, libType, callback, params, type)
		{
			type = type || "syncrhonic";
			libType = libType || "core";
			if(type == "syncrhonic") this.loadSyncrhonic({"i":0, "lst":lst, "callback":callback, "params":params, "type":libType});
			else this.loadAsyncrhonic(lst, libType);
		},
		//........................................................................
		loadPlugins: function(list, callback, params, type)
		{
			this.load(list, "plugin", callback, params, type);
		},
		//........................................................................
		loadCore: function(list, callback, params, type)
		{
			this.load(list, "core", callback, params, type);
		}
	}
});
