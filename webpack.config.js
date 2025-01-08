const path = require('path');

module.exports = {
  mode: 'production',
  entry: './lib/dice-bundle.js',
  output: {
    filename: 'dice-bundle.single.js',
    path: path.resolve(__dirname, 'lib'),
    library: {
      name: 'DiceBox',
      type: 'umd',
      export: 'default'
    }
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 999999999 // Force everything into a single bundle
    }
  }
};
