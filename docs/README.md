# MkDocs Installation and Usage

This directory contains the documentation for the Challenge Bundle Schema project using MkDocs.

## Local Development

To run the documentation locally, install MkDocs and the Material theme:

```bash
pip install mkdocs mkdocs-material
```

Then, from the `docs-mkdocs` directory, run:

```bash
mkdocs serve
```

This will start a development server at http://127.0.0.1:8000.

## Building the Documentation

To build the static site:

```bash
mkdocs build
```

This will create a `site` directory with the static HTML, CSS, and JavaScript files.

## Directory Structure

- `docs/`: Contains all the Markdown documentation files
- `mkdocs.yml`: MkDocs configuration file