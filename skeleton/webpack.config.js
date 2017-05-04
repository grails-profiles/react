var path = require('path');

module.exports = {
  entry: {
    index: './src/main/webapp/app/app.js'
  },
  output: {
    path: path.join(__dirname, 'grails-app/javascripts'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src/main/webapp'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["react", ["es2015", { "modules": false }]],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'url?limit=10000&prefix=assets/!img'
        }
      }
    ]
  }
};
