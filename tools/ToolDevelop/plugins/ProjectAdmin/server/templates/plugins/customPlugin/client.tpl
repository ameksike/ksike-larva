std.include('plugins/{$GLOBALS['name']}/client/js/common/splash.js');
std.include('plugins/{$GLOBALS['name']}/client/css/app.css');
//-------------------------------------------------------------------------
Kcl.Class( '{$GLOBALS['name']}',
{
	extend: Kcl.Plugin,
	property:{
		'name': '',
		'age': ''
	},
	behavior: {
		construct:function(params)
		{
			var _this = {$GLOBALS['name']}.prototype;
			_this.parent.construct.apply(this, []);

			params = params || {};
			this.name = params.name,
			this.age = params.age;
			this.typeResponse = 'decenter';

			std.FrontController.send({
				action: 'doIt',
				controller: '{$GLOBALS['name']}',
				//outInfo: false,
				params: {
					'name':'{$GLOBALS['name']}',
					'age': 23
				}
		
			});
		},

		serverResponse:function(objResponse){
			alert(objResponse.result+' >>serverResponse');	
		},

		doIt:function(objResponse){	
			alert(objResponse.result+' >>doIt');	
		},

		buildGUI:function(params){
			var _this = {$GLOBALS['name']}.prototype;
			//_this.parent.somefunction();
			{$GLOBALS['const']}
		}
	}
});
/*{$GLOBALS['name']}.require = [
	std.Router.getModulePath()+'css/init.css',
	std.Router.getModulePath()+'js/common/MainMenuBar.js',
];*/
