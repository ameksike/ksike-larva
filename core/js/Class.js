/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: js
 * @version: 0.1

 * @description: Class es una libreria para el trabajo con clases, pretende acercar el javascript a la POO
 * @authors: ing. Hermes Lazaro Herrera Martinez, ing. Antonio Membrides Espinosa
 * @making-Date: 08/12/2010
 * @update-Date: 17/01/2011
 * @license: GPL v2
 *
 */
Kcl.Class = function()
{
	if(typeof arguments[0] != "object") var _prototype = arguments[1];
	else var _prototype = arguments[0];
	var _implementDesignerPatterns = function(_patterns, _class, _obj)
	{
		var obj = false;
		if(_patterns)
			if(_patterns instanceof Array){
				for(var i in _patterns)
					if(Kcl.DesignerPatterns[_patterns[i]])
						obj = Kcl.DesignerPatterns[_patterns[i]](_class, _obj);
			}else if(Kcl.DesignerPatterns[_patterns])
				obj = Kcl.DesignerPatterns[_patterns](_class, _obj);
		if(obj) return obj;
	}
	var _cpy = function(_out, _in, key, opt)
	{
		for(var i in _in[key])
		{
			if(i=="construct" && !opt){
				_out[i] = _in[key][i];
			}else _out[i] =  _in[key][i];
		}
	}
	var _clone = function(_in, _out, opt){
		for(var i in _in) switch(i)
		{
			case "_inf": case "imitate": case "extend": break;
			case "property": _cpy(_out, _in, "property", opt); break
			case "behavior": _cpy(_out, _in, "behavior", opt); break;
			case "parent":	case "construct":
				if(!opt){
					_out[i] = _in[i];
				}
			break;	
			default: _out[i] = _in[i]; break;
		}
	}
	var _body  = {};
	var _class = function(){
		var obj = _implementDesignerPatterns(this.patterns,_class, this);
		if(obj) return obj;
		if(this.construct) this.construct.apply(this, arguments);
	};
	_class.prototype.construct = function(){
		var _this = _class.prototype;
		if(_this.parent && _this.parent.construct) 
			_this.parent.construct.apply(_this, arguments);	
	}
	if(_prototype.extend)
	{
		var _construct = _prototype.extend.prototype.construct; 
		if(_construct) _prototype.extend.prototype.construct = 0;
		var _body = new _prototype.extend();
		if(_construct) _prototype.extend.prototype.construct = _construct;
		var _parent = _body.parent ? {"parent":_body.parent} : 0;
		for(var i in _body) if(typeof(_body[i])=="function"){
			if(!_parent)_parent={};
			_parent[i]=_body[i];
		}
		if(_parent)_body.parent = _parent;
	}
	if(typeof(_prototype.imitate) === "function")
	{
		_body.parent = _body.parent ||{};
		_clone(_prototype.imitate.prototype, _body, true);	
		_clone(_prototype.imitate.prototype, _body.parent, true);
	}
	else if(_prototype.imitate instanceof Array)
		for(var i in _prototype.imitate)
			if(typeof _prototype.imitate[i] == "function")
			{
				_clone(_prototype.imitate[i].prototype, _body, true);
				_clone(_prototype.imitate[i].prototype, _body.parent, true);
			}
	_clone(_prototype, _body);
	_class.prototype = _body;
	_class.prototype._inf = {"type":"_class"};

	if(typeof arguments[0] != "object") 
	{
		_class.prototype._inf.ns = arguments[0];
		var ns = arguments[0].split('.');
		var _name = ns[ns.length-1];
		if(ns.length>1){
			delete ns[ns.length-1];
			ns = std.$(ns);
			ns[_name] = _class;	
		}else window[_name] = _class;	
	} 
	else return _class;
}
