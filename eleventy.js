module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/style.css");
	return {
		dir: {
			input: 		'src',
			output: 	'public',
			includes: 	'_includes',
			layouts:  	'_includes',
			data: 		'global'
		},
	};
};
