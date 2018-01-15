module.exports = {
  // new empty line after text line
  'at-rule-empty-line-before': [
    'always',
    {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignore: ['after-comment'],
      ignoreAtRules: ['else'],
    },
  ],

  // setup for SCSS/SASS rules
  'at-rule-no-unknown': null,
};
