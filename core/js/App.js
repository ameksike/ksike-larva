/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: js
 * @version: 0.1

 * @description: App es una clase para la administracion de modulos o plugins
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 03/06/2010
 * @update-Date: 09/09/2010
 * @license: GPL v2
 *
 */
Kcl.Class( "Kcl.App",
{
	extend: Kcl.Primal,
	imitate: Kcl.Base,
	property:{
		autoLoad: true,
		loadType: "syncrhonic"
	},
	behavior: {
		construct : function(eve, loadType, typeResponse){
			var _this = Kcl.App.prototype;
			_this.parent.construct.apply(this, [typeResponse]);
			_this.eve = eve;
			this.loadType = loadType || "syncrhonic";
			if(this.autoLoad) this.FrontController.send({action:'loadModues'});
		},
		serverResponse:function(objResponse){
			this.loadModues(objResponse);
		},
		buildGUI:function(params){
			for (var i in this.mod)
				if(i != 'remove' && i != 'Main') 
					this.mod[i].buildGUI(params);
		},
		loadModues:function(objResponse)
		{
			var _this = Kcl.App.prototype;
			if(objResponse.plugins instanceof Array){
				this.loadSyncrhonic({"i":0, "lst":objResponse.plugins, "callback":_this.eve.onLoadPlugins, "params":objResponse.plugins, "type":"plugins", "_this":_this});
			}	
		}
	}
});
