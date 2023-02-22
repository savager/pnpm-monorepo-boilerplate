import type { StorybookConfig } from '@storybook/react/types';
import webpack from 'webpack';
const path = require('path');

const config: StorybookConfig = {
	stories: [
		{
			directory: '../src',
			titlePrefix: 'Demo',
		},
	],
	logLevel: 'debug',
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-storysource',
		'@storybook/addon-storyshots',
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		{
			name: '@storybook/preset-scss',
			options: {
				cssLoaderOptions: {
					modules: { localIdentName: '[name]__[local]--[hash:base64:5]' },
				},
			},
		},
	],
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgenTypescriptOptions: {
			propFilter: (prop: { name: string }) => ['label', 'disabled'].includes(prop.name),
		},
	},
	core: {
		builder: { name: 'webpack4' },
		channelOptions: { allowFunction: false, maxDepth: 10 },
		disableTelemetry: true,
	},
	features: {
		postcss: false,
		// modernInlineRender: true,
		storyStoreV7: !global.navigator?.userAgent?.match?.('jsdom'),
		buildStoriesJson: true,
		babelModeV7: true,
		warnOnLegacyHierarchySeparator: false,
		previewMdx2: true,
	},
	framework: '@storybook/react',
	webpackFinal: async (config, { configType }) => {
		// Disable progress plugin for less verbose output.
		config.plugins = config?.plugins?.filter((plugin) => !(plugin instanceof webpack.ProgressPlugin));

		// /* scss module support */
		// config?.module?.rules?.push({
		// 	test: /\.module.scss$/,
		// 	use: ['style-loader', 'css-loader?modules=true', 'sass-loader'],
		// 	include: path.resolve(__dirname, '../../../packages/ui'),
		// });

		return config;
	},
};
module.exports = config;
