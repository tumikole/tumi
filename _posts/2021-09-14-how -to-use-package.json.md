---
Layout:
Title: "How to Use package.json"
Date: "2021-09-14"
---


## What should I put in package json?

A package. json file must contain "name" and "version" fields. The "name" field contains your package's name, and must be lowercase and one word, and may contain hyphens and underscores. The "version" field must be in the form x.x.x and follow the semantic versioning guidelines.

## How do I start a package json script?

You can easily run scripts using npm by adding them to the "scripts" field in package. json and run them with npm run <script-name> . Run npm run to see available scripts. Binaries of locally install packages are made available in the PATH , so you can run them by name instead of pointing to node_modules/.

## What is difference between package json and package-lock json?

To avoid differences in installed dependencies on different environments and to generate the same results on every environment we should use the package-lock. json file to install dependencies. ... json file and you will able to generate the same results as you developed with that particular package.