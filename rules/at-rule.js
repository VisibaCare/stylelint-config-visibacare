module.exports = {
	// New empty line after text line
	'at-rule-empty-line-before': [
		'always',
		{
			except: ['blockless-after-same-name-blockless', 'first-nested'],
			ignore: ['after-comment'],
			ignoreAtRules: ['else'],
		},
	],

	// Setup for SCSS/SASS rules
	'at-rule-no-unknown': null,
};
