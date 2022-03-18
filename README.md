# PNPM Workspaces Based Typescript Monorepo Boilerplate.

### Motivation

This is my personal monorepo setup. Base taken from turborepo but without turborepo. Many others used yarn, lerna, or nx but I strongly prefer pnpm. I tried NX and got frustrated with the level of domain specific knowledge, inconsistencies, amount of boilerplate, and bugs.

This works while being more minimal, and provides fast builds, linting and sane standards. Scaffolding should be well documented, simple and transparent.

### Repo features

- pnpm
- typescript
- standard version
- commitlint
- .prettier and eslint config packages.

## Apps

- Docs Web App
- Example Nextjs 12.1 Web App

# Packages

- config (eslint)
- tsconfig
- shared UI components

### Usage

1. Delete the packages you do not want to use.
2. Rename the packages (and all the references to it's name in all packages).
3. run `pnpm husky install` to use hsuky prettier formatting.
4. Clear out CHANGELOG.md.
