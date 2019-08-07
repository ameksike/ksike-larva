/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: js
 * @version: 0.1

 * @description: Core es una libreria para el trabajo con 
 * @authors: ing. Antonio Membrides Espinosa, ing. Hermes Lazaro Herrera Martinez
 * @making-Date: 01/06/2010
 * @update-Date: 22/12/2010
 * @license: GPL v2
 *
 */
var Kcl = {}
Kcl.Core = function()
{
	var _this = Kcl.Core.prototype;
	var filesAdded = [];

	var isLoaded = function(file)
	{
		var lst = document.getElementsByTagName("script");
		for(i in lst){
			var ifile = lst[i].attributes[0].childNodes[0].wholeText;
			if(ifile == file) return true;
			else return false;
		} 
		
	}

	var _is = function(path, type)
	{
		type = type || "js";
		if(path.search("."+type) != -1) return true;
		else return false;	
	}

	var writeHead = function(path)
	{	//... less -> most dependency
		var file;
		if(_is(path))
		{
			file = document.createElement("script");
			file.type = "text/javascript";
			file.src  = path;
		}else if(_is(path, "css"))
		{
			file = document.createElement("link");
			file.type = "text/css";
			file.rel  = "stylesheet";
			file.href = path;
		}
		document.getElementsByTagName("head")[0].appendChild(file);
		return file;
	};

	var doit = function(callback, params)
	{
		switch(typeof(callback))
		{
			case "function": callback(params); break;
			case "string": eval (callback+"(params);"); break;
		}
	}

	var requireAsyncrhonic = function(lst)
	{
		for(var i in lst) if(i !="remove")_this.include(lst[i], callback, params);
	}

	var requireSyncrhonic = function(params)
	{
		if(params.i == params.lst.length){ params.i = 0;
			if(params.callback)params.callback(params.params);
		}else{
			if(_is(params.lst[params.i], "css")){
				_this.include(params.lst[params.i]);
				requireSyncrhonic({"i":++params.i, "lst":params.lst, "callback":params.callback, "params":params.params})
			}else {
				_this.include(params.lst[(++params.i)-1], requireSyncrhonic, params);
			}
		}
	}

	_this.require = function(lst, callback, params, type)
	{
		if(lst instanceof Array)
		{
			var type = type ? type : "syncrhonic";
			if(type == "syncrhonic") requireSyncrhonic({"i":0, "lst":lst, "callback":callback, "params":params})
			else requireAsyncrhonic(lst);
		}else _this.include(lst, callback, params);
	}

	_this.include = function(path, callback, params)
	{
		if (!isLoaded(path)) 
	 	{
			filesAdded.push(path); 
	  		var fileref = writeHead(path);
			fileref.onload = function(){
				doit(callback, params);
			}
			fileref.onreadystatechange = function(){
				if (this.readyState == "loaded" || this.readyState == "complete")
					doit(callback, params);
			}
		} else doit(callback, params);
	};

	_this.$ = function(namespace)
	{
		if(typeof namespace == "object") var lst = namespace;
		else var lst = namespace.split('.');
		if(!window[lst[0]]) window[lst[0]] = {};
		var obj = window[lst[0]];
		for(var i=1; i<lst.length; i++)
		{
			if(lst[i]!==undefined)
			{
				if(!obj[lst[i]] ) obj[lst[i]]={};
				obj=obj[lst[i]];
			} 
		}
		return obj;
	}
} 
//------------------------------------------------------------------------------------------
