# Contributing to Bundle Schema

Thank you for your interest in contributing to the CTF Challenge Schema project. This guide outlines the process for making contributions.

## Creating Issues

Before making significant changes, please create an Issue to discuss:
- The problem you're trying to solve
- Your proposed solution
- Any potential impacts on existing functionality

This helps ensure your time is well spent and changes align with project goals.

## Making Changes

1. Fork the repository to your GitHub account
2. Create a new branch for your changes
3. Make your changes in your branch
4. Ensure all code is properly formatted using the repo's linting tools
5. Write tests for any new features
6. Verify all existing tests pass
7. Follow Pull Request Process to merge in changes.

## Pull Request Process

1. Create a Pull Request from your branch to the main repository
2. Include a detailed description of:
  - The use case/problem being solved
  - How your changes address the issue
  - Any breaking changes or dependencies added
3. Ensure your PR meets these requirements:
  - Code passes all linting checks
  - All tests pass
  - New features have corresponding tests
  - Documentation is updated if needed
4. GitHub Actions will automatically run the following checks on your PR:
  - Test suite and coverage (`bun test`)
  - Type checking (`bun run check:typecheck`)
  - Code formatting (`bun check:format`)
  - Code linting (`bun check:lint`)

## Code Quality Standards

- Follow existing code style and conventions
- Use the provided linting and formatting tools
- Include appropriate test coverage
- Keep changes focused and minimal

We appreciate your contributions!