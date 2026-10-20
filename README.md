# Grit-Versionshantering
# Smakriket

An interactive recipe collection built with HTML, CSS and JavaScript.

## Branch strategy

- `main`: always stable, only receives merges from `develop`
- `develop`: integration branch where all features are merged first
- `feature/*`: one branch per feature (e.g. `feature/hero-footer`), merged into `develop` through a pull request

## Commit messages

We use Conventional Commits, e.g. `feat: add recipe cards` or `fix: correct modal close button`.

## Pull request checklist

- [ ] The code runs without errors
- [ ] Commit messages follow Conventional Commits
- [ ] The branch is up to date with `develop`
- [ ] At least one other person has reviewed the PR