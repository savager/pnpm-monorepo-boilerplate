const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['ui']);

module.exports = withPlugins([withTM], {
	reactStrictMode: true,
});
