const merge = require('merge');

const mergedRules = merge(
  require('./at-rule'),
  require('./block'),
  require('./color'),
  require('./declaration'),
  require('./order'),
  require('./scss'),
  require('./selector'),
  require('./shorthand'),
  require('./string'),
  require('./value'),
  require('./noUnsupportedBrowserFeature'),
);

module.exports = mergedRules;
