/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: js
 * @version: 0.1

 * @description: FrontController es una libreria para el trabajo con Ajax, funciona como controlador frontal del ladodel cliente
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 01/06/2010
 * @update-Date: 01/09/2010
 * @license: GPL v2
 *
 */
Kcl.Class( "Kcl.FrontController",
{
	patterns: "Singleton",
	property:{
		url: "core/php/Front.php"
	},
	behavior: {
		construct:function()
		{
			var _this = Kcl.FrontController.prototype;
			this.callFunctions = new Array();
			_this.base = new Kcl.Base();
			this.router = new Kcl.Router();
		},
		//........................................................................
		buildObj: function()
		{
			this.obj = new Kcl.Communicator.Ajax({method:'POST', url:this.router.uri+this.url});
		},
		//........................................................................
		send: function (params)
		{
			if(!params.controller) params.controller = "Main";
			params.proj = this.router.proj;
			this.buildObj();
			this.obj.send(params, this.serverResponse);
		},
		//........................................................................
		serverResponse: function(response)
		{
			var _this = Kcl.FrontController.prototype;
			if(response){
				if(response instanceof Array)for(var i in response){
					if(i != "remove") _this.setResponse(_this.base.mod[response[i]._plugin], response[i]);
				}else _this.setResponse(_this.base.mod[response._plugin], response);
			}
		},
		//........................................................................
		getRequest: function(action, controller, params){
			this.buildObj();
			var controller = controller ? controller : "Main";
			var request = this.router.uri+this.url;
			request += "?action="+action;
			request += "&outInfo=false";
			request += "&controller="+controller;
			if(params)request += "&params="+this.obj.json.encode(params);
			request += "&proj="+ this.router.proj;
			return request;
		},
		//........................................................................
		addCallFunctions: function(action){
			this.callFunctions.push(action);
		},
		dellCallFunctions: function(action){},
		failure: function(reason){},
		setResponse: function(mod, response)
		{
			if(mod)
			{
				if(mod.typeResponse == "center")
					mod.serverResponse(response);
				else if(mod[response._action]) mod[response._action](response);
			}
		}
	}
});
//-------------------------------------------------------------------------------------
