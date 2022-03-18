module.exports = {
	extends: ['next', 'prettier'],
	settings: {
		next: {
			rootDir: ['apps/*/', 'packages/*/'],
		},
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
	},
};
