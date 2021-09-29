---
Layout:
Title: "version in package json"
Date: "2021-09-20"
---

## What is version in package json?

npm uses the package. json file to specify the version of a package that your app depends on. The version number is in semver syntax which designates each section with different meaning. ... npm uses the tilde (~) and caret (^) to designate which patch and minor versions to use respectively.


## How do I update package versions in package json?

### Updating local packages

Navigate to the root directory of your project and ensure it contains a package.json file: cd /path/to/project.
In your project root directory, run the update command: npm update.
To test the update, run the outdated command. There should not be any output.

## How do I update the version number in package json?

### Updating your published package version number

To change the version number in package.json , on the command line, in the package root directory, run the following command, replacing <update_type> with one of the semantic versioning release types (patch, major, or minor): npm version <update_type>
Run npm publish .

## How do I install a specific version?

Use npm list [package-name] to know the specific latest version of an installed package. Use npm install [package-name]@[version-number] to install an older version of a package. Prefix a version number with a caret (^) or a tilde (~) to specify to install the latest minor or patch version, respectively.