# Continuous Integration

This project demonstrates how to use GitHub Actions to run automated checks on a simple Node.js application.

## CI workflow

The workflow is triggered automatically on every push. It checks out the repository, configures Node.js, installs the project dependencies, and runs ESLint.

## Task0
https://github.com/tomvieilledent/holbertonschool-continuous_integration/actions/runs/32828506096

## Task1

fail:https://github.com/Tomsonne/holbertonschool-continuous_integration/actions/runs/32854326264
done:https://github.com/Tomsonne/holbertonschool-continuous_integration/actions/runs/32854061950

## Task2

https://github.com/Tomsonne/holbertonschool-continuous_integration/actions/runs/33054374410

## Task 3

- [Run before caching](https://github.com/Tomsonne/holbertonschool-continuous_integration/actions/runs/33054284381)
- [Run with a cache hit](https://github.com/Tomsonne/holbertonschool-continuous_integration/actions/runs/33055298626)

The measured execution time remained nearly unchanged because this project has
very few dependencies and the NPM cache is only about 2 MB. However, the later
run reports `Cache hit` and `Cache restored successfully`, proving that the
dependency cache was successfully reused.