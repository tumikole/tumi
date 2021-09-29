---
Layout:
Title: "The caret character in parkage.json"
Date: "2021-09-21"
---
## The caret character in package.json


The prefix character (^) has to do with a version numbering scheme called Semantic Versioning or semver. Semantic Versioning dictates what kind of changes cause the version number to be incremented. Semver uses three-part version number like 3.9.2 and calls these three numbers from left to right as the major, minor and patch numbers.

When executing npm install on a fresh checkout without existing node_modules, npm downloads and installs a version that satisfies package.json for each dependency. Instead of specifying the exact version to be installed in package.json, npm allows you to widen the range of accepted versions. You can allow a newer patch level version with tilde (~) and newer minor or patch level version with caret (^).