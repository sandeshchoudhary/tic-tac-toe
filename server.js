const express = require('express');

const app = express();
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');
const port = 3031;
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'app.js',
  contentBase: './dist',
  host: 'localhost',
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  reload: true,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.use('/dist', express.static(__dirname + '/dist/'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(port, function () {
  console.log('server running at ', port);
});
