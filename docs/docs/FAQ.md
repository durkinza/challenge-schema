# Frequently Asked Questions (FAQ)

Quick answers to common questions. For detailed information, see the full documentation sections linked throughout.

## Flags and Validation

### What's the difference between `defaultFlag` and `customFlag`?

- **`defaultFlag`**: The actual flag(s) that are correct answers. Required field.
- **`customFlag`**: Rules for generating dynamic per-team/player flags. Optional field.

Example:
```json
{
  "defaultFlag": {
    "static": ["flag{answer}"]  // What players submit
  },
  "customFlag": {
    "allowedCharacters": {      // Rules for per-team flag generation
      "lowercase": true
    }
  }
}
```

See [Default Flags](ChallengeSchema/challenge-default-flags.md) and [Custom Flags](ChallengeSchema/challenge-custom-flags.md) for more details.

### Do I need `customFlag` for challenges with only one static flag?

No. Only include `customFlag` if your challenge supports generating unique flags per player/team.

## Build Processes

### Build script vs build container - which should I use?

the build script is simpler and faster for basic setups, but it runs directly on the host system, which may lead to dependency conflicts and introduces security issues.
Some Challenge Forges may execute the script in a container to mitigate this, so your script should not have many dependencies.
The build container provides better isolation and consistency, as it runs with the environment the challenge designer expects. 
When in doubt, use the container flow for better consistency.

See [Standard Deployment](ChallengeSchema/ChallengeDeployment/standard-deployment.md) for details.

## Attachments

### Should I use external URLs for attachments?

Avoid external URLs when possible. Bundles should be self-contained to ensure reliability and resilience. However, external URLs may be acceptable for non-essential resources such as references, or large media files that are not critical to challenge functionality.

See [Attachments](ChallengeSchema/challenge-attachments.md) for more information.

## Getting Help

### Where can I find examples?

- [Examples in docs](examples/index.md)
- [Test examples on GitHub](https://github.com/durkinza/challenge-bundle-schema/tree/main/tests/examples)
- [CTF Vault](https://ctfvault.org/) community challenges

### How do I report issues?

[Open a GitHub issue](https://github.com/durkinza/challenge-bundle-schema/issues) with:
- Your `challenge.json` (remove sensitive data)
- Expected vs actual behavior
- Validation error messages

### Can I contribute?

Yes! See the [Contributing Guide](https://github.com/durkinza/challenge-bundle-schema/blob/main/CONTRIBUTING.md) to:
- Submit bug fixes
- Improve documentation
- Discuss design ideas