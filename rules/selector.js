module.exports = {
	// No irregular list selector
	'selector-list-comma-newline-after': 'always-multi-line',
	// No -webkit-, -moz-, -o-, -ms-. Write without
	'selector-no-vendor-prefix': true,
	// No unknown pseudo selector, e.g.: "::SELECTOR"
	'selector-pseudo-element-no-unknown': true,
	// strict
	'selector-no-qualifying-type': [
		true,
		{
			'ignore': ['attribute'],
		},
	],
};
