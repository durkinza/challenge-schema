# Examples

This section provides real-world examples of challenges created using the Challenge Bundle Schema.


## Bundle Examples

### Example 1: Simple Trivia Challenge

The simplest bundle is just a `challenge.json` file:

```
my-trivia-challenge.zip
└── challenge.json
```

**challenge.json:**
```json
{
  "name": "CTF Trivia Question",
  "description": "Test your cybersecurity knowledge!",
  "prompt": "What port does HTTPS use by default?",
  "category": "trivia",
  "points": 50,
  "defaultFlag": {
    "static": ["443", "flag{443}"]
  },
  "deployment": {
    "type": "standard",
    "standard": {
      "attachments": []
    }
  },
  "author": {
    "name": "Your Name"
  }
}
```

### Example 2: Challenge with Static Files

A crypto challenge that provides a cipher text file:

```
caesar-cipher.zip
├── challenge.json
└── cipher.txt
```

**challenge.json:**
```json
{
    "name": "Caesar Cipher",
    "description": "Decrypt this message!",
    "category": "crypto",
    "points": 100,
    "defaultFlag": {
        "regex": ["/(flag)?{?caesar_salad}?/i"],
        "static": ["flag{caesar_salad}"]
    },
    "deployment": {
        "type": "standard",
        "standard": {
            "attachments": [
            {
                "name": "Cipher Text",
                "type": "text/plain",
                "path": "./cipher.txt"
            }
            ]
        }
    },
    "author": {
      "name": "Julius Caesar",
    },
    "language": "english",
    "solutions": [
        "Open the cipher.txt file",
        "Decrypt the text using a Caesar cipher with a shift of 13"
    ]
}
```
**cipher.txt:**
```txt
synt{pnrfne_fnynq}
```

### Example 3: Challenge with Build Script

A challenge that generates unique content per player:

```
dynamic-cipher.zip
├── challenge.json
└── build.sh
```

**challenge.json:**
```json
{
    "name": "Caesar Cipher",
    "description": "A simple Caesar cipher challenge. The flag is hidden in the text.",
    "points": 15,
    "category": "Crypto",
    "customFlag": {
        "allowedCharacters": {
            "lowercase": true,
            "uppercase": true,
            "numbers": false,
            "specialCharacters": false
        },
        "length": {
            "max": 4000
        }
    },
    "defaultFlag": {
        "regex": [
            "/(flag)?{?caesar_salad}?/i"
        ],
        "static": [
            "flag{caesar_salad}",
            "caesar_salad"
        ]
    },
    "deployment": {
        "type": "standard",
        "standard": {
            "build": {
                "buildType": "script",
                "script": {
                    "path": "build.sh",
                    "parameters": {
                        "arguments": [
                            {
                                "key": "--flag",
                                "description": "The flag value to encode in the cipher"
                            }
                        ],
                        "flagArgumentName": "--flag"
                    },
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
                    "key": "cipher.txt"
                }
            ]
        }
    },
    "author": {
        "name": "Julius Caesar",
    },
    "language": "english",
    "solutions": [
        "Open the cipher.txt file",
        "Decrypt the text using a Caesar cipher with a shift of 13"
    ]
}

```
**build.sh:**
```bash
#!/bin/bash
# Use default flag if not provided
if [ $# -eq 0 ]; then
    FLAG="caesar_salad"
else
    FLAG="$1"
fi
# Apply Caesar cipher with shift of 13 (ROT13)
cipher_text=$(echo "$FLAG" | tr 'a-zA-Z' 'n-za-mN-ZA-M')
# Output to cipher.txt
echo "$cipher_text" > cipher.txt
```

### Example 4: Hosted Web Challenge

A web application that runs as a container:

```
web-challenge.zip
├── challenge.json
├── Dockerfile
└── src/
    ├── app.php
    ├── templates/
    │   └── index.html
    └── static/
        └── style.css
```

**challenge.json:**
```json
{
  "$schema": "https://raw.githubusercontent.com/durkinza/challenge-bundle-schema/main/challenge.schema.json",
  "name": "Cookie Monster",
  "description": "This website provides a simple cookie that can be updated to show the flag. This challenge tests your knowledge of browser cookies and how to manipulate them.",
  "difficulty": "medium",
  "category": "web",
  "author": {
    "name": "Example Author",
    "email": "author@example.com"
  },
  "customFlag": {
    "allowedCharacters": {
      "lowercase": true,
      "uppercase": true,
      "numbers": true,
      "specialCharacters": ["_", "{", "}"]
    },
    "length": {
      "min": 10,
      "max": 30
    }
  },
  "defaultFlag": {
    "regex": ["/(flag)?{?YummyC00k13s}?/i"],
    "static": ["flag{YummyC00k13s}"]
  },
  "deployment": {
    "type": "hosted",
    "hosted": {
        "container": {
            "driver": "docker",
            "image": "challenge/cookie-monster:latest",
            "ports": [{
                "port": 80,
                "protocol": "tcp"
            }],
            "parameters": {
                "environmentVariables": [
                    {
                        "key": "FLAG",
                        "description": "The flag value to be displayed when the cookie is set correctly"
                    }
                ],
                "flagEnvironmentVariableName": "FLAG"
            }
        }
    }
  },
  "solutions": [
    "Open browser developer tools and inspect the cookies",
    "Notice the 'Red_Guy's_name' cookie is set to 'NameGoesHere'",
    "Change the 'Red_Guy's_name' cookie value to 'Elmo' (Since Elmo is the Cookie monster's favorite red guy in the show Sesame Street)",
    "Refresh the page to submit the cookie to the server",
    "Retrieve the flag"
  ]
}
```
**Dockerfile:**
```Dockerfile
FROM php:8.0-apache
WORKDIR /app
COPY src/ .
ENV FLAG="flag{YummyC00k13s}"
EXPOSE 80
CMD ["apache2-foreground"]
```
**src/app.php:**
```php
<?php
$flag = getenv('FLAG') ?: 'flag{YummyC00k13s}';
if(array_key_exists("Red_Guy's_name", $_COOKIE)&&preg_match('/([Ee])lmo+/', $_COOKIE["Red_Guy's_name"])){
  $output=('<p>You got it! ' . htmlspecialchars($flag) . '</p>');
}else{
    $output = ("<p>He's my favorite Red guy</p>");
    setcookie("Red_Guy's_name", 'NameGoesHere', time()+300);
}

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Cookie_monster</title>
    </head>
    <body>
    <?php
    echo($output);
    ?>
</body>
</html>
```

## Challenge Pack Examples

### Example 1: Simple Challenge Pack
This example shows a challenge pack containing a couple related web challenges:

```
web-challenge-pack.zip
├── challenge-pack.json
└── challenges/
    ├── intro.zip
    │   └── challenge.json
    └── advanced.zip
        └── challenge.json
```
**challenge-pack.json:**
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
    {
      "id": "intro-challenge",
      "path": "./challenges/intro",
      "category": "web",
      "points": 100
    },
    {
      "id": "advanced-challenge",
      "path": "./challenges/advanced",
      "category": "web",
      "points": 250,
      "prerequisites": ["intro-challenge"]
    }
  ]
}
```