# Examples

This section provides real-world examples of challenges created using the Challenge Bundle Schema.

## Basic Challenge Examples

### Caesar Cipher Challenge

This is a simple cryptography challenge using a Caesar cipher:

```json
{
    "$schema": "https://github.com/durkinza/challenge-bundle-schema/releases/download/0.0.1/challenge.schema.json",
    "name": "Caesar Cipher",
    "description": "A simple Caesar cipher challenge. The flag is encoded in the text!",
    "points": 100,
    "category":  ["trivia", "examples"],
    "flag": {
        "generation": {
            "allowedCharacters": {
                "lowercase": true,
                "uppercase": false,
                "numbers": false,
                "specialCharacters": false
            },
            "regex": "/(\\w)/i"
        },
        "validation":{
            "regex": ["/flag{Caesar_salad}/i"],
            "static": ["flag{Caesar_salad}"]
        }
    },
    "deployment": {
        "type": "standard",
        "standard": {
            "build": {
                "buildType": "script",
                "script": {
                    "path": "build.sh",
                    "flagArg": "flag",
                    "outputs": [
                        {
                            "key": "cipher.txt",
                            "path": "cipher.txt"
                        }
                    ]
                }
            },
            "attachments": [
                {
                    "name": "Cipher.txt",
                    "type": "text/plain",
                    "key": "cipher.txt",
                    "path": "cipher.txt"
                }
            ]
        }
    },
    "author": {
        "name": "Your Name",
        "email": "your.email@example.com"
    },
    "language": "english",
    "solutions": [
        "Open the cipher.txt file",
        "Decrypt the text using a Caesar cipher with a shift of 13"
    ]
}
```
If you've configured your IDE with the json schema, you can leave off the "$schema" field.

## 2. Add the build script to your challenge bundle

I'll provide the build.sh file here




### Web Challenge Example

This example shows a web application challenge with container deployment:

```json
{
  "$schema": "https://raw.githubusercontent.com/durkinza/challenge-bundle-schema/main/challenge.schema.json",
  "name": "Cookie Monster",
  "description": "This website has some poorly secured cookies. Can you find and exploit them?",
  "difficulty": "medium",
  "category": "web",
  "author": {
    "name": "Example Author",
    "email": "author@example.com"
  },
  "flag": {
    "type": "static",
    "content": "flag{c00k13_m0nst3r}"
  },
  "deployment": {
    "type": "container",
    "options": {
      "image": "challenge/cookie-monster:latest",
      "ports": [
        {
          "container": 80,
          "host": 8080
        }
      ],
      "environment": {
        "FLAG": "{{flag}}"
      }
    }
  },
  "solutions": [
    {
      "description": "Inspect and modify the session cookie",
      "steps": [
        "Open browser developer tools and inspect the cookies",
        "Notice the 'role' cookie is set to 'user'",
        "Change the 'role' cookie value to 'admin'",
        "Refresh the page to access the admin panel",
        "The flag is displayed in the admin panel"
      ]
    }
  ]
}
```

## Challenge Pack Example

This example shows a challenge pack containing multiple related web challenges:

```json
{
  "$schema": "https://raw.githubusercontent.com/durkinza/challenge-bundle-schema/main/challenge-pack.schema.json",
  "name": "Web Exploitation Fundamentals",
  "description": "A collection of challenges covering fundamental web exploitation techniques",
  "author": {
    "name": "Example Author",
    "email": "author@example.com"
  },
  "challenges": [
    "xss/challenge.json",
    "sql-injection/challenge.json",
    "cookie-manipulation/challenge.json",
    "directory-traversal/challenge.json"
  ],
  "configuration": {
    "deployment": {
      "namespace": "web-fundamentals",
      "cleanup": true
    }
  }
}
```

## More Examples

For more examples, check out the [GitHub repository](https://github.com/durkinza/challenge-bundle-schema/tree/main/examples).