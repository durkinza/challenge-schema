# challenge-bundle-schema

A Schema for Sharing CTF Challenges in a portable bundle.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Building](#building)
- [Contributing](#contributing)
- [License](#license)

## 📦 Installation

To use this package in your project, you can install it using Bun:

```bash
bun add @durkinza/challenge-schema
```

Or with npm:

```bash
npm install @durkinza/challenge-schema
```

## 🚀 Usage

The challenge-bundle-schema provides validation for both individual challenge bundles and challenge packs.

```bash
# with bunx
bunx @durkinza/challenge-schema validate --type challenge ./challenge.json
bunx @durkinza/challenge-schema validate --type pack ./challenge-pack.json

# With npx
npx @durkinza/challenge-schema validate --type challenge ./challenge.json
npx @durkinza/challenge-schema validate --type pack ./challenge-pack.json
```

If you want to implement the schema parsing directly in your project, that can be done too
```bash
# Using npm
npm install @durkinza/challenge-bundle-schema

# Using yarn
yarn add @durkinza/challenge-bundle-schema

# Using pnpm
pnpx add @durkinza/challenge-bundle-schema

# Using Bun
bun add @durkinza/challenge-bundle-schema
```

```typescript
import { validateChallengeBundle, validateChallengePack } from '@durkinza/challenge-schema';

// Validate a challenge bundle
try {
  const validatedBundle = validateChallengeBundle(myChallenge);
  console.log('Challenge bundle is valid!');
} catch (error) {
  console.error('Challenge bundle validation failed:', error.message);
}

// Validate a challenge pack
try {
  const validatedPack = validateChallengePack(myChallengePack);
  console.log('Challenge pack is valid!');
} catch (error) {
  console.error('Challenge pack validation failed:', error.message);
}
```

## 🛠️ Development

This project uses [Bun](https://bun.sh/) as its primary Node.js runtime. Make sure you have Bun installed before proceeding.

### Setup

Clone the repository:

```bash
git clone https://github.com/durkinza/challenge-bundle-schema.git
cd challenge-bundle-schema
```

Install dependencies:

```bash
bun install
```

### Code Formatting and Linting

To format and lint your code:

```bash
# Format and lint code
bun run fix

# Format code only
bun run fix:format

# Lint code only
bun run fix:lint
```

## 🧪 Testing

Run tests with Bun:

```bash
# Run all tests
bun test

# Run tests in watch mode
bun run test:watch

# Run tests with coverage
bun run test:coverage

# Check TypeScript types
bun run check:typecheck
```

Note, jest and bun test are nearly identical in their configuration, so jest is also available as a convience.
If ever the 2 shall differ, bun tests would become the sole testing method.
To run the test with jest, run:

```bash
bun jest
```

## 🏗️ Building

To build the project:

```bash
# Build everything (dist, JSON schema, and YAML schema)
bun run build
```

### Build Steps

The build process consists of three steps:

1. **Build Distribution Files**:
   ```bash
   bun run build:dist
   ```
   This compiles the TypeScript source code to JavaScript in the `dist` directory.

2. **Build JSON Schema**:
   ```bash
   bun run build:json-schema
   ```
   This generates the JSON schema files from the Zod schemas.

3. **Build YAML Schema**:
   ```bash
   bun run build:yaml-schema
   ```
   This generates YAML validation using Python.

## Building Docs

Documents are build with mkdocs
Check the [docs/readme](./docs/README.md) for how to build and publish the docs.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -S -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
