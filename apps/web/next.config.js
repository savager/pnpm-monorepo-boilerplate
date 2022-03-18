/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
	reactStrictMode: true,
});
