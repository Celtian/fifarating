# AGENTS.md

## Project overview

This repository contains the `fifarating` TypeScript library. Public library code lives in `src/`,
unit tests live in `test/`, and maintenance scripts live in `scripts/`.

## Development environment

- Use the Node.js version declared in `.nvmrc` and Bun `1.3.14`.
- Use Bun for dependency and script operations and keep `bun.lock` in sync with dependency changes.
- Install dependencies with `bun ci` when reproducing CI.

## Validation

Run the checks relevant to the change:

- `bun run build` compiles the ES6 and ES5 distributions.
- `bun run test` runs the Vitest suite.
- `bun run test --coverage --run` matches the CI test invocation.
- `bun run script:check-configs` validates the TypeScript configurations.

For source changes, run at least `bun run build` and `bun run test`. Add or update tests in `test/` when
behavior changes.

## Code conventions

- Preserve the existing TypeScript API and exports from `src/index.ts`.
- Follow the repository's Prettier configuration: two spaces, single quotes, semicolons, and a
  120-character print width.
- Keep generated output such as `dist/` and `coverage/` out of commits.
- Do not change package versions or release artifacts unless the task explicitly requires a release.

## GitHub Actions

- Read the Node.js version from `.nvmrc` with the `node-version-file` input; do not duplicate the
  version number in workflow files.
- Use the local `.github/actions/cached-deps` action for dependency installation.
- Keep third-party actions on current stable major versions and preserve publish conditions and
  registry configuration when editing release workflows.
