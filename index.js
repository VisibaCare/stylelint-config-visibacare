const mergedRules = require('./rules')

module.exports = {
	extends: 'stylelint-config-standard',
	plugins: ['stylelint-scss', 'stylelint-order'],
	rules: mergedRules,
};
