module.exports = {
	extends: ['next/babel', 'next/core-web-vitals', 'prettier'],
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
