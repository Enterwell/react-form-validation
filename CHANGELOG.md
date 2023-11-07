# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2023-11-07

### Added

- `setValues` helper function for setting field's values from provided data objects

### Changed

- `submitForm` now returns value of `onSubmit` callback
- `useValidation` now returns additional `props` prop that only contains input-specific props that can be spread into most components directly

## [1.2.8] - 2022-10-24

### Fixed

- `isValidEmail` no longer case sensitive

## [1.2.7] - 2022-06-18

### Fixed

- `isValidEmail` type defined

## [1.2.6] - 2022-06-18

### Fixed

- `isValidEmail` export added in the `index.js`

## [1.2.5] - 2022-05-26

### Changed

- Added support for React 18

## [1.2.4] - 2022-04-21

### Fixed

- `onBlur` expecting config as first argument but receiving event #48

## [1.2.3] - 2022-04-19

### Fixed

- Added missing changelog entry

## [1.2.2] - 2022-04-19

### Fixed

- README updated field types

## [1.2.1] - 2022-04-14

### Added

- `isValidEmail` validation function

## [1.2.0] - 2022-04-14

### Added

- `onChange`, `onBlur` and `validate` now accept config as last argument

## [1.1.12] - 2022-03-29

### Added

- Added `types` directory for publishing

## [1.1.11] - 2022-03-29

### Added

- Typescript types

## [1.1.10] - 2022-03-28

### Fixed

- Validation function's type checking fixed in the `useValidation` hook

## [1.1.9] - 2022-03-08

### Fixed

- Dependencies updated

## [1.1.8] - 2022-03-08

### Fixed

- Typo in README.md

## [1.1.7] - 2022-02-18

### Fixed

- Publishing to NPM

## [1.1.6] - 2022-02-18

### Fixed

- Publishing to NPM

## [1.1.5] - 2022-02-18

### Fixed

- Istanbul only enabled in TEST env

## [1.1.4] - 2022-02-17

### Changed

- React version bumped

## [1.1.3] - 2021-03-14

### Fixed

- Dependencies' vulnerabilities fixed

## [1.1.2] - 2021-03-12

### Fixed

- Validation function `isTrue` returning always true for boolean types

## [1.1.0]

### Added

- Support for validating Promise functions (remote validation)

## [1.0.4] - 2020-06-15

### Added

- Npm badge to README.md ([#2](https://github.com/Enterwell/react-form-validation/issues/2))
- GitHub Actions build badge to README.md ([#3](https://github.com/Enterwell/react-form-validation/issues/3))

## [1.0.0] - 2020-06-04

### Added

- useValidation hook, form utils and validation functions
- documentation
