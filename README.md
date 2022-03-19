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

- docs Web App
- example Nextjs 12.1 Web App
- example NestJs App

# Packages

- config (eslint)
- tsconfig
- shared UI components
- shared Utils

### Usage

1. Delete the packages you do not want to use.
2. Rename the packages (and all the references to it's name in all packages).
3. run `pnpm husky install` to use hsuky prettier formatting.
4. Clear out CHANGELOG.md.
