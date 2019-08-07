/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: js
 * @version: 0.1

 * @description: Communicator es una libreria para el trabajo con Ajax desde Javascript
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 01/06/2010
 * @update-Date: 01/06/2010
 * @license: GPL v2
 *
 */
Kcl.Class( "Kcl.Communicator",
{
	property:{
		method: '',
		url: '',
		json: null
	},
	behavior:{
		construct: function(params)
		{
			params = params || {};
			var _this    = Kcl.Communicator.prototype;
			_this.json   = new Kcl.Format.JSON();
			_this.method = params.method ? params.method : 'POST';
			_this.url    = params.url ? params.url : 'core/php/Front.php';
		},
		send: function (params){},
		failure: function(error){throw {msg:"Error: "+error};	}
	}
});
