# Deployment Options

The `deployment` field defines how the challenge should be deployed or setup to be executed.

A challenge can be deployed in either 'standard' or 'hosted', but not both.

Standard Deployments are short-lived setups, where the challenge content is generated before a players starts and does not require re deployment.
Hosted Deployments are long-lived setups, where the challenge is expected to be running continuously and often allows the players to interact with the deployed service.

## Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Deployment type; must be either `"standard"` or `"hosted"` |
| `hosted` | object | details for a hosted challenge (not available if type is `"standard"`) |
| `standard` | object | details for a standard challenge (not available if type is `"hosted"`) |


# Standard Deployment

Standard deployments would be the best option for challenges that can be setup once and saved to be provided to the player later. 
An example would be cryptographic challenges, where a flag could be encoded and the resulting cipher text is provided to the player. 

Standard deployments still accept a container build type, which allows the challenge designer to provide the build environment with all required dependencies for the build script.

Regardless if a script or container is used, the standard deployment expects a file 

Supported deployment types:
- `container` - Docker container deployment
- `script` - Script-based deployment

Standard Deployment example using script
```json
{
    "deployment": {
        "type": "standard",
        "standard": {
            "build":{
                "buildType": "script",
                "script": {
                    "path": "./run.py",
                    "flagArg": "flag",
                    "outputs": "challenge.txt"
                }
            },
            "attachments": [
                {
                    "name": "challenge.txt",
                    "type": "text/plain",
                    "path": "./challenge.txt"
                }
            ]
        }
    }
    //...
}
```

```json
{
    "deployment": {
        "type": "standard",
        "standard": {
            "build":{
                "buildType": "container",
                "container": {
                    "driver": "docker",
                    "image": "neverlanctf/zip-builder:latest",
                    "flagArg": "flag",
                }
            },
            "attachments": [
                {
                    "name": "challenge.zip",
                    "type": "application/zip",
                    "key": "./challenge.zip"
                }
            ]
        }
    }
    //...
}
```



# Hosted Deployments

Hosted deployments would be the best option for challenges that are long-lived. 
An example would be a web service, where the player would be expected to attack the web-service to retrieve the flag.

Hosted deployments could be used for individual challenge instances, where each player receives their own instance, or for shared instances where all players talk to the same instance.

Hosted deployments are expected to be running continuously throughout the challenge lifetime.

Hosted Deployment example
```json
{
    "deployment": {
        "type": "hosted",
        "hosted": {
            "container":{
                "driver": "docker",
                "image": "neverlanctf/cookie-monster:latest",
                "ports": [
                    {
                        "port": 80,
                        "protocol": "tcp"
                    }
                ],
            },
        }
    }
    //...
}
```
