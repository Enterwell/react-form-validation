# Contributing

Thanks for contributing to `@enterwell/react-form-validation`.

## Prerequisites

- Node.js 22 or newer
- `pnpm` via Corepack

## Local setup

```bash
corepack enable
pnpm install
```

## Development workflow

- Keep changes focused and update tests or documentation when needed.
- Run the existing checks before opening a pull request:

```bash
pnpm build
pnpm test
```

- Use `pnpm test:open` if you want to work with Cypress component tests locally.

## Pull requests

- Open development pull requests against the `stage` branch.
- Keep `master` for release-ready changes.
- If your change affects a published package release, update the package version and `CHANGELOG.md`.
