/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: js
 * @version: 0.1

 * @description: Base es una libreria para gestionar las lirerias y los modulos del framework
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 02/06/2010
 * @update-Date: 25/09/2010
 * @license: GPL v2
 *
 */
Kcl.Class( "Kcl.Base",
{
	extend: Kcl.Loader,
	patterns: "Singleton",
	property:{
		version: "1.0",
		lib: {},
		mod: {}
	},
	behavior: {
		construct:function(){
			var _this = Kcl.Base.prototype;
			arguments[0] = arguments[0] || {};
			arguments[0]["libs"] = _this;
			arguments[0]["mods"] = _this.mod;
			_this.parent.construct.apply(_this, arguments);
		}
	}
});
//------------------------------------------------------------------------------------------
