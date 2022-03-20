# PNPM Workspaces Based Typescript Monorepo Boilerplate.

### Motivation

This is my personal monorepo setup with build caching.

This works while being minimal, and provides fast builds, linting and sane standards.

### Repo features

- pnpm
- typescript
- standard version
- commitlint
- .prettier and eslint config packages.
- build caching with backfill

## Apps

All apps show examples of using shared utils, config, tsconfig, and components from the UI library.

- docs: Nextjs 12.1 app
- web: example Nextjs 12.1 app
- nestjs: example NestJs backend
- storybook: example Storybook app

# Packages

- config: eslint and other repo config
- tsconfig: typescript configurations
- ui: shared UI components
- utils: shared functional utils

### Usage

1. Delete the packages you do not want to use.
2. Rename the packages (and all the references to it's name in all packages).
3. run `pnpm husky install` to use hsuky prettier formatting.
4. Clear out CHANGELOG.md.
