module.exports = {
  // top: 0; > top: 0
  'declaration-block-trailing-semicolon': 'always',
  // Prefer shorthand if whenever it can be written
  'declaration-block-no-redundant-longhand-properties': [
    true,
    {
      ignoreShorthands: ['grid', 'flex', 'background', 'font'],
    },
  ],
};