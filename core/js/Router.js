/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: js
 * @version: 0.1

 * @description: Router es una libreria para el trabajo con
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 02/06/2010
 * @update-Date: 25/09/2010
 * @license: GPL v2
 *
 */
Kcl.Class( "Kcl.Router",
{
	patterns: "Singleton",
	behavior: {
		construct:function(params)
		{
			params = params || {};
			this.uri = params.uri;    //... path form project to core
			this.proj = params.proj; //... path form core to project
		},
		reConfig:function(params)
		{
			params = params || {};
			this.uri = params.uri;    //... path form project to core
			this.proj = params.proj; //... path form core to project
		},
		getModulePath: function(libName, parent)
		{
			var _uri = parent ? this.uri : "";
			var _mod = libName ? libName : "Main";
			if(_mod != "Main") var path = _uri+"plugins/"+_mod+"/client/";
			else var path = _uri+"app/client/";
			return path;
		},
		getCorePath: function(parent)
		{
			var _uri = parent ? "" : this.uri;
			return _uri+"core/";
		},
		getLibPath: function(parent)
		{
			var _uri = parent ? "" : this.uri;
			return _uri+"lib/";
		},
		getPath: function(libName, type)
		{
			switch(type)
			{
				case "core": return this.getCorePath(); break;
				case "lib": return this.getLibPath(libName); break;
				default: return this.getModulePath(libName); break;
			}
		}
	}
});
//------------------------------------------------------------------------------------------
