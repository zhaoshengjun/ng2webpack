module.exports = function() {
  console.log(process.env.NODE_ENV);
  console.log(process.env.npm_lifecycle_event);
  if (process.env.NODE_ENV === 'production' || process.env.npm_lifecycle_event === 'build') {
    return require('./config/webpack.prd');
  } else {
    return require('./config/webpack.dev');
  }
}