var SelectorSolver = require("./selector-solver")

module.exports = {

	config: {
		solveTagsOnly: {
			type: "boolean",
			default: true,
			title: "Solve Tags",
			description: "Solve even if the selector is only the tag with no id and/or class. Enabling this will basically override html-language package, so you could disable that package."
		},

		activeForFileTypes: {
			type: "array",
			default: ["htm", "html", "kit", "shtml", "tmpl", "tpl", "xhtml"],
			title: "File extensions",
			description: "Active for these file extensions",
			items: {
				type: "string"
			}
		},

		closeSelfclosingTags: {
			type: "boolean",
			default: false,
			title: "Close self-closing tags",
			description: "Add a backslash before the end of self-closing tags"
		},

		expandBlockTags: {
			type: "boolean",
			default: false,
			title: "Expand block tags to multiple lines",
			description: "Put end tag on a new line"
		},

		blockTags: {
			type: "array",
			default: ["address", "article", "aside", "audio", "blockquote", "canvas",
			          "dd", "div", "dl", "fieldset", "figcaption", "figure", "footer",
			          "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup",
			          "hr", "main", "nav", "noscript", "ol", "output", "p", "pre",
			          "section", "table", "tfoot", "ul", "video"],
			title: "Block-level elements",
			description: "HTML tags that will be expanded to multiple lines."
		}
	},

	activate: function(state) {
		new SelectorSolver();
	}
};
