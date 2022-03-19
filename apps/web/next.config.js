const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['ui', 'utils']);

module.exports = withPlugins([withTM], {
	reactStrictMode: true,
});
