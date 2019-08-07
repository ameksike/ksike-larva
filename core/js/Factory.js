/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: js
 * @version: 0.1

 * @description: Factory es una libreria para el trabajo con
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 02/06/2010
 * @update-Date: 25/09/2010
 * @license: GPL v2
 *
 */
Kcl.Class( "Kcl.Factory",
{
	patterns: "Singleton",
	behavior: {
		construct:function(params)
		{
			params = params || {};
			this.objs = [];
			this.libs = params.libs;
			this.mods = params.mods;
		},
		reConfig:function(params)
		{
			params = params || {};
			this.objs = [];
			this.libs = params.libs;
			this.mods = params.mods;
		},
		//........................................................................
		getClass: function(_class)
		{
			if(window.Kcl[_class]) return window.Kcl[_class];
			else if(window[_class]) return window[_class];
			return false;
		},
		//........................................................................
		build: function(params)
		{
			if(params._class){
				var obj = new params._class(params.params);
				if(window.Kcl.Primal){
					if(obj instanceof Kcl.Primal){
						params._this.mods[params.name] = obj;
						if(!obj._inf || obj._inf.type != "_class"){
							obj.construct(params.params);
						}
					} else params._this.libs[params.name] = obj;
				}else params._this.libs[params.name] = obj;
				params._this.objs.push(params.name);
			}
		},
		//........................................................................
		instantiate: function(params)
		{
			if (this.objs.indexOf(params.name) == -1) 
			{
				params._class = this.getClass(params.name);
				if(params._class){
					params._this = this;
					if(params._class.require){ 
						this.libs.require(params._class.require, this.build, params);
					}
					else this.build(params);
				}
			}//else throw {msg:"Warning: El objeto <<"+params.name+">> existe"};
		}
	}
});
//------------------------------------------------------------------------------------------
