//
//  UniqueWords
//
//  Created by Kevin Armstrong on 2011-10-25.
//  Copyright (c) 2011 kevinandre. All rights reserved.
//
var UniqueWords = (function(){
	return new Class({
		initialize: function(txt){
			if(txt){
				this.originalText = txt;
				return this.parse();
			} else {
				this.originalText = '';
			}
			this.originalWords = [];
			this.words = [];
		},
		parse: function(txt, sort){
			this.originalText = txt || this.original || '';
			sort = sort || true;
			this.originalWords = txt.split(' ').map(function(word){
				return word.replace(/\./g, '').replace(/\,/g, '').replace(/\s/g, '');
			});
			this.words = this.originalWords.unique();
			return (sort) ? this.words.sort() : this.words;
		}
	});
})();
