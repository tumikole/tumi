---
Layout:
Title: "Bootstrap Containers"
Date: "2021-06-11"
---

## Bootstrap Containers

Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.

Bootstrap comes with three different containers:

.container: which sets a max-width at each responsive breakpoint
.container-fluid: which is width: 100% at all breakpoints
.container-{breakpoint}: which is width: 100% until the specified breakpoint

### How do they work

Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Containers are used to contain, pad, and (sometimes) center the content within them. While containers can be nested, most layouts do not require a nested container.

### Default container

Our default .container class is a responsive, fixed-width container, meaning its max-width changes at each breakpoint

### Responsive containers

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply max-widths for each of the higher breakpoints.


### Fluid containers

container-fluid class provides a full-width container which spans the entire width of the viewport.