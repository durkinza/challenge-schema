# Challenge Attachments

The Challenge Attachments are files that are provided to player.
These could be raw text files provided in the bundle, or files that are generated during the build process.

## Basic Structure

```json
[
    {
        "name": "from_file",
        "type": "text/plain",
        "path": "./text.txt",
    },
    {
        "name": "from_container",
        "type": "text/plain",
        "key": "user_creds",
    },
    {
        "name": "from_url",
        "type": "text/plain",
        "url": "https://example.com/artifact.zip",
    },
    {
        "name": "from_content",
        "type": "text/plain",
        "content": "Hello World, here is the content of this attached file.",
    },
]
```


Challenge Attachments fields are provided when defining the challenge deployment type.
```json
{
  "name": "Challenge Name",
  "deployment": {
    "type": "standard",
    "standard": {
        "attachments": [
            {
                "name": "here_is_your_flag",
                "type": "text/plain",
                "content": "Hello World, your flag is flag{flag}",
            },
        ]
    }
  }
  ...
}
```

##  From File

Attachments provided to the player that are a file in the challenge bundle.
These are often static assets that the challenge author provides to assist in the challenge.

## From Container or Script

Attachments can be generated during the build process of a challenge. 
The key is a unique identifier that is provided in the challenge deployment field.
The key must be in the "outputs" section of the container fields to be used in the attachments.

The file will be pulled from the container and provided to the player. 
This could be helpful for providing the player with initial login credentials, or the generated cipher text.

## From URL

Attachments can just be a link to an external resource that provides the file. 
This is often discouraged as external resources could change the provided file without the challenge Author, event coordinator, or players being made aware of the change.

## From Content

If your Attachment is small enough to be provided directly, the content provided will be directly given to the player. 
Often this is small text details, but could also be a the cipher text of a crypto challenge.