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
		    "plugins": "lib/plugins"
		},
		urlArgs: "bust=" +  (new Date()).getTime(),
		waitSeconds: 2,
		useOrder: false,
		dependencies: [
			{
				name: "Core",
				path: "lib/mootools-core/Source",
				files: [
					{ name: "Core/Core", provides: ["Core", "MooTools", "Type", "typeOf", "instanceOf", "Native"], requires: [] },
					{ name: "Types/Array", provides: "Array", requires: ["Type"] },
					{ name: "Types/Function", provides: "Function", requires: ["Type"] },
					{ name: "Types/Object", provides: ["Hash", "Object"], requires: ["Type"] },
					{ name: "Types/Number", provides: "Number", requires: ["Type"] },
					{ name: "Types/String", provides: "String", requires: ["Type"] },
					{ name: "Browser/Browser", provides: ["Browser", "Window", "Document"], requires: ["Array", "Function", "String", "Number"] },
					{ name: "Types/DOMEvent", provides: "Event", requires: ["Window", "Document", "Array", "Function", "String", "Object"] },
					{ name: "Class/Class", provides: "Class", requires: ["Array", "Function", "String", "Number"] },
					{ name: "Class/Class.Extras", provides: ["Class.Extras", "Chain", "Events", "Options"], requires: ["Class"] },
					{ name: "Slick/Slick.Parser", provides: "Slick.Parser", requires: [] },
					{ name: "Slick/Slick.Finder", provides: "Slick.Finder", requires: ["Slick.Parser"] },
					{ name: "Element/Element", provides: ["Element", "Elements", "$", "$$", "Iframe", "Selectors"], requires: ["Window", "Document", "Array", "String", "Function", "Object", "Number", "Slick.Parser", "Slick.Finder"] },
					{ name: "Element/Element.Event", provides: "Element.Event", requires: ["Element", "Event"] },
					{ name: "Element/Element.Style", provides: "Element.Style", requires: ["Element"] },
					{ name: "Element/Element.Dimensions", provides: "Element.Dimensions", requires: ["Element", "Element.Style"] },
					{ name: "Element/Element.Delegation", provides: "Element.Delegation", requires: ["Element.Event"] },
					{ name: "Fx/Fx", provides: "Fx", requires: ["Chain", "Events", "Options"] },
					{ name: "Fx/Fx.CSS", provides: "Fx.CSS", requires: ["Fx", "Element.Style"] },
					{ name: "Fx/Fx.Morph", provides: "Fx.Morph", requires: ["Fx.CSS"] },
					{ name: "Fx/Fx.Tween", provides: ["Fx.Tween", "Element.fade", "Element.highlight"], requires: ["Fx.CSS"] },
					{ name: "Fx/Fx.Transitions", provides: "Fx.Transitions", requires: ["Fx"] },
					{ name: "Utilities/JSON", provides: "JSON", requires: ["Array", "Function", "String", "Number"] },
					{ name: "Utilities/Cookie", provides: "Cookie", requires: ["Options", "Browser"] },
					{ name: "Utilities/DOMReady", provides: ["DOMReady", "DomReady"], requires: ["Browser", "Element", "Element.Event"] },
					{ name: "Utilities/Swiff", provides: "Swiff", requires: ["Options", "Object", "Element"] },
					{ name: "Request/Request", provides: "Request", requires: ["Object", "Element", "Chain", "Events", "Options", "Browser"] },
					{ name: "Request/Request.HTML", provides: "Request.HTML", requires: ["Element", "Request"] },
					{ name: "Request/Request.JSON", provides: "Request.JSON", requires: ["JSON", "Request"] }
				]
			},
			{
				name: "More",
				path: "lib/mootools-more/Source",
				files: [
					{ name: "More/More", provides: "More", requires: [] },
					{ name: "Class/Chain.Wait", provides: "More/Chain.Wait", requires: ["Chain", "Element", "Fx", "More"] },
					{ name: "Class/Class.Binds", provides: "More/Class.Binds", requires: ["Class", "More"] },
					{ name: "Class/Class.Occlude", provides: "More/Class.Occlude", requires: ["Class", "Element", "More"] },
					{ name: "Class/Class.Refactor", provides: ["More/Class.refactor", "More/Class.Refactor"], requires: ["Class", "More"] },
					{ name: "Class/Events.Pseudos", provides: "More/Events.Pseudos", requires: ["Class.Extras", "Slick.Parser", "More"] },
					{ name: "Types/Array.Extras", provides: "More/Array.Extras", requires: ["Array", "More"] },
					{ name: "Types/Object.Extras", provides: "More/Object.Extras", requires: ["Object", "More"] },
					{ name: "Locale/Locale", provides: ["More/Locale", "More/Lang"], requires: ["Events", "More/Object.Extras", "More"] },
					{ name: "Locale/Locale.en-US.Date", provides: "More/Locale.en-US.Date", requires: ["More/Locale"] },
					{ name: "Locale/Locale.en-US.Number", provides: "More/Locale.en-US.Number", requires: ["More/Locale"] },
					{ name: "Locale/Locale.en-US.Form.Validator", provides: "More/Locale.en-US.Form.Validator", requires: ["More/Locale"] },
					{ name: "Types/Hash", provides: "More/Hash", requires: ["Object", "More"] },
					{ name: "Types/Hash.Extras", provides: "More/Hash.Extras", requires: ["Hash", "More/Object.Extras"] },
					{ name: "Types/Number.Format", provides: ["More/Number.Format", "More/Number.Extras"], requires: ["Number", "More/Locale.en-US.Number"] },
					{ name: "Types/Date", provides: "More/Date", requires: ["Array", "String", "Number", "More", "More/Locale", "More/Locale.en-US.Date"] },
					{ name: "Types/Date.Extras", provides: "More/Date.Extras", requires: ["More/Date"] },
					{ name: "Types/String.Extras", provides: "More/String.Extras", requires: ["String", "Array", "More"] },
					{ name: "Types/String.QueryString", provides: "More/String.QueryString", requires: ["String", "Array", "More"] },
					{ name: "Types/URI", provides: "More/URI", requires: ["Object", "Class", "Class.Extras", "Element", "More/String.QueryString"] },
					{ name: "Types/URI.Relative", provides: "More/URI.Relative", requires: ["More/URI", "Class.Refactor"] },
					{ name: "Element/Elements.From", provides: ["More/Elements.from", "More/Elements.From"], requires: ["String", "Element", "More"] },
					{ name: "Element/Element.Shortcuts", provides: "More/Element.Shortcuts", requires: ["Element.Style", "More"] },
					{ name: "Element/Element.Measure", provides: "More/Element.Measure", requires: ["Element.Style", "Element.Dimensions", "More"] },
					{ name: "Element/Element.Position", provides: "More/Element.Position", requires: ["Options", "Element.Dimensions", "Element.Measure"] },
					{ name: "Element/Element.Pin", provides: "More/Element.Pin", requires: ["Element.Event", "Element.Dimensions", "Element.Style", "More"] },
					{ name: "Element/Element.Forms", provides: "More/Element.Forms", requires: ["Element", "More/String.Extras", "More"] },
					{ name: "Element/Element.Event.Pseudos", provides: ["More/Element.Event.Pseudos", "More/Element.Delegation"], requires: ["Element.Event", "Element.Delegation", "Event.Pseudos"] },
					{ name: "Element/Element.Event.Pseudos.Keys", provides: "Element.Event.Pseudos.Keys", requires: ["More/Element.Event.Pseudos"] },
					{ name: "Fx/Elements", provides: "More/Fx.Elements", requires: ["Fx.CSS", "More"] },
					{ name: "Fx/Accordion", provides: "More/Fx.Accordion", requires: ["Element.Event", "More/Fx.Elements"] },
					{ name: "Fx/Reveal", provides: "More/Fx.Reveal", requires: ["Fx.Morph", "More/Element.Shortcuts", "More/Element.Measure"] },
					{ name: "Fx/Move", provides: "More/Fx.Move", requires: ["Fx.Morph", "More/Element.Position"] },
					{ name: "Fx/Scroll", provides: "More/Fx.Scroll", requires: ["Fx", "Element.Event", "Element.Dimensions", "More"] },
					{ name: "Fx/Slide", provides: "More/Fx.Slide", requires: ["Fx", "Element.Style", "More"] },
					{ name: "Fx/SmoothScroll", provides: "More/Fx.SmoothScroll", requires: ["SlickFinder", "More/Fx.Scroll"] },
					{ name: "Fx/Sort", provides: "More/Fx.Sort", requires: ["Element.Dimensions", "More/Fx.Elements", "More/Element.Measure"] },
					{ name: "Drag/Drag", provides: "More/Drag", requires: ["Events", "Options", "Element.Event", "Element.Style", "Element.Dimensions", "More"] },
					{ name: "Drag/Drag.Move", provides: "More/Drag.Move", requires: ["Element.Dimensions", "More/Drag"] },
					{ name: "Drag/Slider", provides: "More/Slider", requires: ["Element.Dimensions", "More/Class.Binds", "More/Drag", "More/Element.Measure"] },
					{ name: "Drag/Sortables", provides: "More/Sortables", requires: ["Fx.Morph", "More/Drag.Move"] },
					{ name: "Utilities/Assets", provides: "More/Assets", requires: ["Element.Event", "More"] },
					{ name: "Utilities/Color", provides: "More/Color", requires: ["Array", "String", "Number", "Hash", "Function", "More"] },
					{ name: "Utilities/Group", provides: "More/Group", requires: ["Events", "More"] },
					{ name: "Utilities/Hash.Cookie", provides: "More/Hash.Cookie", requires: ["Cookie", "JSON", "More", "More/Hash"] },
					{ name: "Utilities/IframeShim", provides: "More/IframeShim", requires: ["Element.Event", "Element.Style", "Options", "Events", "More/Element.Position", "More/Class.Occlude"] },
					{ name: "Utilities/Table", provides: "More/Table", requires: ["Array"] },
					{ name: "Request/Request.JSONP", provides: "More/Request.JSONP", requires: ["Element", "Request", "More"] },
					{ name: "Request/Request.Periodical", provides: "More/Request.Periodical", requires: ["Request", "More"] },
					{ name: "Request/Request.Queue", provides: "More/Request.Queue", requires: ["Element", "Request", "More/Class.Binds"] },
					{ name: "Interface/Mask", provides: "More/Mask", requires: ["Options", "Events", "Element.Event", "More/Class.Binds", "More/Element.Position", "More/IframeShim"] },
					{ name: "Interface/Spinner", provides: "More/Spinner", requires: ["Fx.Tween", "Request", "More/Class.refactor", "More/Mask"] },
					{ name: "Interface/Scroller", provides: "More/Scroller", requires: ["Options", "Events", "Element.Event", "Element.Dimensions", "More"] },
					{ name: "Interface/Tips", provides: "More/Tips", requires: ["Options", "Events", "Element.Event", "Element.Style", "Element.Dimensions", "More"] },
					{ name: "Interface/Keyboard", provides: "More/Keyboard", requires: ["Options", "Events", "Element.Event", "More/Element.Event.Pseudos.Keys"] },
					{ name: "Interface/Keyboard.Extras", provides: "More/Keyboard.Extras", requires: ["More/Keyboard", "More"] },
					{ name: "Interface/HtmlTable", provides: "More/HtmlTable", requires: ["Options", "Events", "More/Class.Occlude"] },
					{ name: "Interface/HtmlTable.Zebra", provides: "More/HtmlTable.Zebra", requires: ["More/HtmlTable", "More/Element.Shortcuts", "More/Class.refactor"] },
					{ name: "Interface/HtmlTable.Sort", provides: "More/HtmlTable.Sort", requires: ["Hash", "More/HtmlTable", "More/Class.refactor", "More/Element.Delegation", "More/String.Extras", "More/Date"] },
					{ name: "Interface/HtmlTable.Select", provides: "More/HtmlTable.Select", requires: ["More/Keyboard", "More/Keyboard.Extras", "More/HtmlTable", "More/Class.refactor", "More/Element.Delegation", "More/Element.Shortcuts"] },
					{ name: "Forms/OverText", provides: "More/OverText", requires: ["Options", "Events", "Element.Event", "More/Class.Binds", "More/Class.Occlude", "More/Element.Position", "More/Element.Shortcuts"] },
					{ name: "Forms/Form.Validator", provides: ["More/Form.Validator", "More/InputValidator", "More/FormValidator.BaseValidators"], requires: ["Options", "Events", "Slick.Finder", "Element.Event", "Element.Style", "JSON", "More/Locale", "More/Class.Binds", "More/Date", "More/Element.Forms", "More/Locale.en-US.Form.Validator", "More/Element.Shortcuts"] },
					{ name: "Forms/Form.Validator.Inline", provides: "More/Form.Validator.Inline", requires: ["More/Form.Validator"] },
					{ name: "Forms/Form.Validator.Extras", provides: "More/Form.Validator.Extras", requires: ["More/Form.Validator"] },
					{ name: "Forms/Form.Request", provides: "More/Form.Request", requires: ["Request.HTML", "More/Class.Binds", "More/Class.Occlude", "More/Spinner", "More/String.QueryString", "More/Element.Delegation"] },
					{ name: "Forms/Form.Request.Append", provides: "More/Form.Request.Append", requires: ["More/Form.Request", "More/Fx.Reveal", "More/Elements.from"] }
				]
			},
			{
				name: "UniqueWords",
				path: "lib/kjs",
				files: [
					{ name: "UniqueWords", provides: "UniqueWords", requires: ["Class", "More/Array.Extras"] }
				]
			}
		]
	});
})();
