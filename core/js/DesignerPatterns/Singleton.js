/**
 *
 * @framework: Ksike
 * @package: Core
 * @subpackage: js
 * @version: 0.1

 * @description: Class es una libreria para el trabajo con clases, pretende acercar el javascript a la POO
 * @authors: ing. Antonio Membrides Espinosa
 * @making-Date: 20/01/2011
 * @update-Date: 20/01/2011
 * @license: GPL v2
 *
 */
std.$("Kcl.DesignerPatterns").Singleton = function(_class, _obj)
{
	if(!_class.prototype._inf)  _class.prototype._inf = {};
	if(_class.prototype._inf.instance) return _class.prototype._inf.instance;
	else _class.prototype._inf.instance = _obj;
}
