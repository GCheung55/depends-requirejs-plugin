//
//  depends.js
//
//  Created by Kevin Armstrong on 2011-10-21.
//  Copyright (c) 2011 kevinandre. All rights reserved.
//
(function(){
	function is_string(input){
		return typeof(input)=='string';
	}
	
	function is_array(input){
		return typeof(input)=='object'&&(input instanceof Array);
	}
	
	function getRequirements(list){
		var reqs = [];
		if(list){
			for(var i=0; i<list.length; i++){
				if(is_string(list[i])){
					reqs.push(list[i]);
				} else if(is_array(list[i])) {
					var requires = getRequirements(list[i]);
					for(var j=0; j<requires.length; j++){
						reqs.push(requires[j]);
					}
					
				}
			}
		}
		return reqs;
	}
	
	function makeNormalized(string){
		return string.replace(/[\.]/g, "").replace(/[\/]/g, "");
	}

	function attachDependency(dependency){
		var name = dependency.name;
		var path = dependency.path;
		var files = dependency.files;
		if(is_array(files)){
			for(var j=0; j<files.length; j++){
				var mappedFiles = [];
				var file = files[j];
				var fileName = file.name || "";
				var provides = file.provides || [];
				var requires = file.requires || [];
				if(is_array(requires)){
					for(var r=0; r<requires.length; r++){
						mappedFiles.push(source[makeNormalized(requires[r])]);
					}
				} else if(is_string(requires)){
					mappedFiles.push(source[makeNormalized(requires)]);
				}
				if(fileName != ""){
					mappedFiles.push(path+"/"+fileName);
				}
				if(is_array(provides)){
					for(var p=0; p<provides.length; p++){
						source[makeNormalized(provides[p])] = mappedFiles;
					}
				} else if(is_string(provides)){
					source[makeNormalized(provides)] = mappedFiles;
				}
			}
		}
	}
		
	var source = { version: "0.1" };
	
	define({
		version: source.version,
	    load: function (name, req, load, config) {
			if(config.dependencies && is_array(config.dependencies)){
				for(var i=0; i<config.dependencies.length; i++){
					attachDependency(config.dependencies[i]);
				}
			}
			if(source[name] !== undefined){
				var requires = getRequirements(source[name]);
				if(config.useOrder === true){
					for(var i=0;i<requires.length;i++){
						requires[i] = "plugin/order!"+requires[i];
					}
				}
				req(requires, function(){
		            load();
				});
			}
	    },
		normalize: function(name, normalize){
			return makeNormalized(name);
		}
	});
})();
