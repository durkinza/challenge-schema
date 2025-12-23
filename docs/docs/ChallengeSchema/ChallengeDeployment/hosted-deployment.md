## Hosted Deployment Options

Hosted deployments would be the best option for challenges that are long-lived.


## Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `container` | object | details for a hosted container (not available when stack is provided) |
| `stack` | object | details for a stack deployment (not available when container is provided) |

## Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `attachments` | object | details for attachments |


## Container Details

```json
"deployment": {
  "type": "hosted",
  "hosted": {
    "container":{
        "driver": "docker",
        "image": "neverlanctf/sql_fun1:latest",
        "imageDigest": "b1478f90313c2638ef14a2052a5cdcb85769c1a3750403f1c4cbb10d62d005ae",
        "resourceRequirements":{
            "cpu": 1024,
            "memory": "256Mi",
            "disk": "1Gi"
        },
        "ports": [
            {
                "port": 80,
                "protocol": "tcp"
            }
        ],
        "flagArg": "flag",
        "output": [
            {
                "key": "user_creds",
                "path": "/tmp/user_creds"
            }
        ]
    },
    "attachments": [
        {
            "name": "player_credentials",
            "key": "user_creds",
            "type": "text/plain"
        }
    ]
  }
}
```

## Container Hosted Deployments

Container deployements are meant for a single container to be setup for the challenge. 
The driver for the hosted deployment determines what type of image should be expected. 

For example, an iso image could be provied for a vmware driver, or a docker image for a kubernetes driver.
The imageDiggest holds the sha of the container image to ensure the downloaded image is the expected image.

## Stack Hosted Deployments (work in progress)

Stack deployements are meant for a multiple container deployments. 
The driver for the hosted deployment determines what type of image should be expected. 

For example, a vagrant stack could be provied for a vagrant driver, or a docker compose stack for a docker swarm driver.

## Attachments

Attachments here are the same as the [challenge-attachments](../challenge-attachments.md)