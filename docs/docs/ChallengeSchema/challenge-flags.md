# Challenge Flags

As a challenge designer, the challenge flag generation allows you to define what flags your challenge supports.
This could help to clarify what characters are allowed when providing a flag to your challenge.
For example, a rot13 cipher may not support special characters.
If your challenge does not support dynamic flags, this field not required.

## Basic Structure

```json
{
  "name": "Challenge Name",
  "flag": {
    "generation": {
        "allowedCharacters": {
            "lowercase": boolean,
            "uppercase": boolean,
            "numbers": boolean,
            "specialCharacters": boolean,
            "length": {
                "min": number,
                "max": number
            }
        },
    },
  }
  ...
}
```


## Flag Generation 

Flag Generation defines what type of flags the challenge accepts when building a challenge dynamically.

### Generation Fields

| Field | Type | Description |
|-------|------|-------------|
| `lowercase` | boolean | if lowercase characters are supported in the flag |
| `uppercase` | boolean | if uppercase characters are supported in the flag |
| `numbers` | boolean | if numbers are supported in the flag |
| `specialCharacters` | boolean | if special characters are supported in the flag |
| `length.min` | number | The minimum length supported for the flag |
| `length.max` | number | The maximum length supported for the flag |
