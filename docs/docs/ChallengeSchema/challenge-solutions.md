# Challenge Solutions
The Challenge Solutions are the walkthrough on how to solve a challenge.
These are rendered in markdown, so feel multiple steps can be added in each entry.

Steps can be split into their own entries in the solutions array, or combined together using a list in markdown.


## Basic Structure

```json
{
    "solutions": [
        "## Discovering the hidden file.
        1: Open the challenge interface on port 80
        2: visit the /sitemap.xml file on the webserver
        3: Note the additional file available at /abcd.html
        ",
        "## SQL Injecting on the hidden file
        1: Open the hidden page on the server and find the input form.
        2: Perform a SQL injection attack and try to login without a password.
            a: This can be performed using `asdf\" Or 1=1; --` in the username field.
        "
    ],
    ...
}
```