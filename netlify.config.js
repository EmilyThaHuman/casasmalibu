module.exports = {
  plugins: [
    {
      package: '@netlify/plugin-lighthouse',
      config: {
        performance: 90,
        accessibility: 90,
        'best-practices': 90,
        seo: 90,
      },
    },
  ],
}; 