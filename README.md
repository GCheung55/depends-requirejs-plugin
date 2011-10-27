MooTools RequireJS Plugin - Copyright (c) 2011 [Kevin Armstrong](http://kevinandre.com/)
========================================================================================

MooTools RequireJS Plugin - A plugin for loading mootools modules using require.js.


Compatibility
-------------

MooTools RequireJS Plugin has been tested with RequireJS 1.0.0.


How to use
-------------

Using MooTools RequireJS Plugin is very simple.

	Create a requirejs config. This config can exist in the html or in a separate js file. I prefer a separate js file so that the config can be shared among several files. See the file:
	
	tests/mootools.config.js	
	
	In particular, the require config should contain the 'mootools' option.
	
	mootools: {
		corePathVariable: "mcore",
		useOrder: false,
		plugins: [
			{
				name: "UniqueWords",
				path: "lib/kjs",
				files: [
					{ name: "UniqueWords", provides: "UniqueWords", requires: ["Class", "More/Array.Extras"] }
				]
			}
		]
	}
	
	*corePathVariable*: 
		the variable used in the 'paths' option to specify the location of the MooTools core library
	*morePathVariable*: 
		the variable used in the 'paths' option to specify the location of the MooTools more library
	*useOrder*: 
		option whether to use the order plugin to load the modules in the order they are presented
	*plugins*: 
		an array of libraries used in your site. Each plugin should contain the options:
			*name*: library name
			*path*: location of the library files. Absolute path or a path relative to the require.js baseUrl option
			*files*: array of file objects used by the library. Each object should contain:
				*name*: the file name of the library module. This file name should contain the directory directly under the plugin path option. It should not contain the file extension (.js)
				*provides*: string or array of names that the module should provide
				*requires*: string or array of modules required by the file

	
	require( ["plugins/mootools!UniqueWords"],
		function() {
			...
		}
	);
	
	When using require to load the file, prefix it with mootools!.
	

Links
-----

http://kevinandre.com/dev/mootools/using-require-js-to-load-mootools/


License
-------

The MIT License (http://www.opensource.org/licenses/mit-license.php)

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
