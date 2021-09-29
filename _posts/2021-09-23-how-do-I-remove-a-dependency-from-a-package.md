---
Layout:
Title: "How do I remove a dependency from a package"
Date: "2021-09-23"
---

## How do I remove a dependency from a package?

So, the answer would be that it is NOT done automatically on removing the "parent" package, right ? – ...
It depends on the method you use to remove the parent package. ...
You can remove a package and all of its now-no-longer-needed dependencies in one step with sudo apt-get remove --auto-remove package .

## How do I remove unused dependencies from package JSON?

To identify the unused package, just run npx depcheck in the project root directory. Next step is to uninstall the npm packages using npm uninstall command. The post Remove unused npm modules from package.

## What happens if I delete JSON package lock?

So when you delete package-lock. json, all those consistency goes out the window. Every node_module you depend on will be updated to the latest version it is theoretically compatible with. This means no major changes, but minors and patches.