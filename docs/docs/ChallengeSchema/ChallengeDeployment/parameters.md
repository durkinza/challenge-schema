# Parameters: Arguments and Environment Variables

Arguments and environment variables can be provided to challenge deployments. These allow for dynamic configuration of challenges, such as passing in custom flags or other parameters needed for challenge execution.

The challenge schema doesn't describe all parameter types, it only describes how to reference them in the deployment configuration with the exception of flag parameters.
The ability to use parameters depends on the challenge forge used. Not all forges may support all parameter types.

If a challenge uses dynamic flags (a.k.a. custom flags), the deployment must specify how the flag value is passed to the challenge using either an argument or an environment variable.

Challenge deployments (both standard and hosted) can accept parameters in two forms:

1. **Arguments** - Command-line arguments passed to scripts or containers
2. **Environment Variables** - Environment variables set in the container or script environment

These parameters allow challenges to be customized per-instance, and they're especially important for passing dynamic flags to challenges.

## Defining Parameters

Arguments and Environment Variables are defined as an array of objects, where each object describes an argument that the deployment accepts.

### Structure

```json
{
  //...
  "arguments": [
    {
      "key": "--playerName",
      "description": "The player's name for personalized challenge content"
    },
    {
      "key": "--flag",
      "description": "The dynamic flag value for this challenge instance"
    }
  ],
  "environmentVariables": [
    {
      "key": "API_KEY",
      "description": "The API key for external service access"  
    }
  ]
  //...
}
```

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `arguments` | array | List of command-line arguments accepted by the deployment |
| `environmentVariables` | array | List of environment variables accepted by the deployment |

## Arguments

### Structure

```json
{
  "deployment": {
    "type": "standard",
    "standard": {
      "build": {
        //...
        "script": {
          "path": "./build.sh",
          "parameters": {
            "arguments": [
              {
                "key": "--flag",
                "description": "The flag value to encode in the output"
              },
              {
                "key": "--difficulty",
                "description": "Difficulty level: easy, medium, or hard"
              }
            ]
          }
        }
      }
    }
  }
  //...
}
```

### Argument Object Fields

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | The argument key (e.g., `--flag`, `-f`) |
| `description` | string | A description of what the argument is used for |

### Key Requirements

- The `key` field should include the full argument format, including prefixes like `--` or `-`
- Each argument must have a clear `description` explaining what value it expects
- Arguments are typically used with script-based deployments or container entrypoints


## Environment Variables

Environment variables are defined similarly to arguments, but without prefixes.

### Structure


```json
{
  "deployment": {
    "type": "standard",
    "standard": {
      "build": {
        //...
        "script": {
          "path": "./build.sh",
          "parameters": {
            "environmentVariables": [
              {
                "key": "API_KEY",
                "description": "The API key for external service access"
              },
              {
                "key": "FLAG",
                "description": "The dynamic flag value for this challenge instance"
              }
            ]
          }
        }
      }
    }
  }
  //...
}
```

### Environment Variable Object Fields

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | The environment variable name (e.g., `FLAG`, `API_KEY`) |
| `description` | string | A description of what the environment variable is used for |



### Key Requirements

- The `key` field should be the exact environment variable name (typically UPPER_CASE)
- Do **not** include prefixes like `$` or other shell-specific syntax
- Each variable must have a clear `description` explaining what value it expects
- Environment variables are commonly used with containerized deployments


## Flag Parameter References

When a challenge uses dynamic flags (custom flags), you need to specify where the flag value should be injected. This is done using one of two fields: `flagArgumentName` or `flagEnvironmentVariableName`.

Only one of these fields should be used to avoid ambiguity.

### `flagArgumentName`

References an argument from the `arguments` array that should receive the dynamic flag value.

The value of `flagArgumentName` should match the `key` of one of the defined arguments.

```json
{
  "arguments": [
    {
      "key": "--flag",
      "description": "The dynamic flag value"
    }
  ],
  "flagArgumentName": "--flag"  // Must match the key exactly, including --
}
```

### `flagEnvironmentVariableName`

References an environment variable from the `environmentVariables` array that should receive the dynamic flag value.

The value of `flagEnvironmentVariableName` should match the `key` of one of the defined environment variables.

```json
{
  "environmentVariables": [
    {
      "key": "FLAG",
      "description": "The dynamic flag value"
    }
  ],
  "flagEnvironmentVariableName": "FLAG"  // Must match the key exactly
}
```