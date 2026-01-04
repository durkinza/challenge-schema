## Standard Deployment Options

Standard deployments would be the best option for challenges that are short-lived.
Often useful for generating unique files for each player or if a challenge supports unique flags per-instance

## Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `buildType` | string | The deployment type |
| `script` | object | details for a script build process (not available when container is provided) |
| `container` | object | details for a container build process (not available when script is provided) |

## Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `attachments` | object | details for attachments |


## Container Deployment Details

```json
{
    "deployment": {
        "type": "standard",
        "standard": {
            "build": {
                "container":{
                    "driver": "docker",
                    "image": "neverlanctf/crypto-gen:latest",
                    "imageDigest": "b1478f90313c2638ef14a2052a5cdcb85769c1a3750403f1c4cbb10d62d005ae",
                    "resourceRequirements":{
                        "cpu": 1024,
                        "memory": "256Mi",
                        "disk": "1Gi"
                    },
                    "parameters": {
                        "arguments": [
                            {
                                "key": "--flag",
                                "description": "The flag value to encode"
                            }
                        ],
                        "flagArgumentName": "--flag"
                    },
                    "output": [
                        {
                            "key": "cipher_text",
                            "path": "/tmp/cipher_text.txt"
                        }
                    ]
                },
            },
            "attachments": [
                {
                    "name": "Cipher Text",
                    "key": "cipher_text",
                    "type": "text/plain"
                }
            ]
        }
    }
    //...
}
```

Container deployments run a container to assist in the building of attachments for the player.
Often this could be useful for generating files for the player using a container as the build environment.


## Script Deployment Details

```json
{
    "deployment": {
        "type": "standard",
        "standard": {
            "build": {
                "buildType": "script",
                "script":{
                    "path": "./build.sh",
                    "parameters": {
                        "arguments": [
                            {
                                "key": "--flag",
                                "description": "The flag value to encode"
                            }
                        ],
                        "flagArgumentName": "--flag"
                    },
                    "outputs": [
                        {
                            "key": "cipher_text",
                            "path": "./cipher_text.txt"
                        }
                    ]
                },
            },
            "attachments": [
                {
                    "name": "Cipher Text",
                    "key": "cipher_text",
                    "type": "text/plain"
                }
            ]
        }
    }
    //...
}
```

Script deployments use the hosting environment directly to build output files for the player. 
While easier to write, this deployment option can often pose issues where the executing environment may not have the right dependencies for the build script.
This can also pose a security risk to the event coordinators where the build script could make changes on the executing system instead of being limited to an executing environment.


## Attachments

Attachments should be built in either the container or the script deployment types.
If no build process is required for your challenge, use the standard-script deployment type.

Attachments here are the same as the [challenge-attachments](../challenge-attachments.md)