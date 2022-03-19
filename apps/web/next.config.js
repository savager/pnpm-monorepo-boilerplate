/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
	reactStrictMode: true,
	// TODO: This is only necessary because of a bug with module.scss imports in typescript. Need to fix soon.
	ignoreBuildErrors: true,
});
