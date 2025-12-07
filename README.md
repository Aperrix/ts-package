# TypeScript Package Template

A [template repository][template] for authoring npm packages with TypeScript.

## Features

- Modern build setup with [tsdown][tsdown]
- Dual ESM/CJS distribution with TypeScript definitions
- Automated CI/CD with GitHub Actions
- Semantic versioning and automated releases via [semantic-release][semantic-release]
- Code quality tools:
  - [Biome][biome] for linting/formatting,
  - [knip][knip] for unused code detection,
  - [bun-security-scanner][bun-security-scanner] for dependencies vulnerabilities
- Pre-commit hooks with [Lefthook][lefthook]
- Conventional commits enforcement with [commitlint][commitlint] and [czg][czg]
- Test setup with [Bun test runner][bun:test]

## Setup

Click the green **Use this template** button to create a new repository from this template.

Then, update the following placeholders:

1. **`package.json`**: Update `name`, `description`, `keywords`, `homepage`, `bugs`, `repository`, `funding`, and `author`
2. **`LICENSE`**: Update the copyright year and author name if needed
3. **`README.md`**: Replace this entire file with documentation for your actual package

## Configuration

The template is configured with sensible defaults, but you can customize:

- **`tsconfig.json`** - TypeScript compiler options (extends `@tsconfig/bun`)
- **`tsdown.config.ts`** - Build configuration (entry points, formats, minification)
- **`biome.json`** - Linting and formatting rules
- **`lefthook.json`** - Git hooks for pre-commit checks
- **`.releaserc.json`** - Semantic release configuration
- **`knip.jsonc`** - Unused code and dependencies detection

## Available Scripts

```bash
# Development
bun run dev          # Type check in watch mode
bun run typecheck    # Type check once

# Code Quality
bun run lint         # Lint and auto-fix with Biome
bun run check        # Run all checks (lint, typecheck, test)

# Testing & Building
bun test             # Run tests
bun run build        # Build for production
```

## Publishing

This template uses [semantic-release][semantic-release] for automated versioning and publishing.

### Automated Releases (Recommended)

When you push commits to the `main` or `next` branch, the CI/CD pipeline will:

1. Analyze commit messages to determine the version bump (major, minor, patch)
2. Create a git tag
3. Publish to npm with [provenance](https://docs.npmjs.com/generating-provenance-statements)
4. Create a GitHub release

Commit message format follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat: add new feature` - minor version bump
- `fix: resolve bug` - patch version bump
- `perf: improve performance` - patch version bump
- `refactor: restructure code` - patch version bump
- `feat!: breaking change` or `BREAKING CHANGE:` in body - major version bump
- `docs:`, `chore:`, `ci:`, `test:`, `build:`, `style:` - no release

### Manual Publishing

If you prefer manual releases:

1. Remove or disable the `release` job in `.github/workflows/ci.yml`
2. Use npm's standard workflow:

```bash
npm version patch   # or minor, or major
git push --follow-tags
npm publish --provenance
```

## NPM Authentication

The CI/CD pipeline uses npm's OIDC authentication for secure, token-free publishing. No manual setup required for public packages.

For scoped/private packages, configure npm access in `.releaserc.json` under the `@semantic-release/npm` plugin.

## License

MIT

<!-- LINKS -->
[template]: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template
[tsdown]: https://github.com/rolldown/tsdown
[semantic-release]: https://github.com/semantic-release/semantic-release
[biome]: https://github.com/biomejs/biome
[knip]: https://github.com/webpro-nl/knip
[lefthook]: https://github.com/evilmartians/lefthook
[commitlint]: https://github.com/conventional-changelog/commitlint
[bun-security-scanner]: https://github.com/bun-security-scanner/osv
[czg]: https://github.com/Zhengqbbb/cz-git
[bun:test]: https://bun.sh/docs/cli/test
