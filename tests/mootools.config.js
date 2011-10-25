//
//  mootools.config
//
//  Created by Kevin Armstrong on 2011-10-24.
//  Copyright (c) 2011 kevinandre. All rights reserved.
//
(function(){
	require.config({
		baseUrl: "../",
		paths: {
		    "plugins": "lib/plugins",
		    "mcore": "lib/mootools-core/Source",
		    "mmore": "lib/mootools-more/Source"
		},
		urlArgs: "bust=" +  (new Date()).getTime(),
		waitSeconds: 2,
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
	});
})();
