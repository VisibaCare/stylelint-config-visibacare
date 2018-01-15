module.exports = {
  'plugin/no-unsupported-browser-features': [
    true, 
    {
      'severity': 'warning',
      'browsers': [
        '> 1%',
        'last 2 firefox versions',
        'last 2 chrome versions',
        'last 2 safari versions',
        'last 2 edge versions',
      ],
    },
  ],
};
