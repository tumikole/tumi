---
Layout:
Title: "How Add comment package.json"
Date: "2021-09-15"
---

## How do I add comments to a json package?

For the package.json file, you can't use tools that pre-process your file and remove any added comments that are not supported by JSON, since the file itself is not part of your project's workflow. However, you can add comments as valid JSON properties, For example, going back to our generated package.json file.

#### To summarize all of these answers:

Add a single top-level field called // that contains a comment string. ...
Add multiple top-level fields starting with // , e.g. //dependencies that contains a comment string. ...
Add echo commands to your scripts .

{
  "name": "e",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bootstrap": "^4.5.2"
  },
  "comments": {
    "dependencies": "We use Bootstrap 5, we will upgrade to v5 once is ready for production",
    "description": "Add a description",
    "license": "Still deciding MIT or BSD"
  }
}
