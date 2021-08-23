---
Layout:
Title: "ReactDOMServer"
Date: "2021-08-20"
---

# Introduction
##### (Google search for better understanding)

The ReactDOMServer object enables you to render components to static markup.

import ReactDOMServer from 'react-dom/server';
// CommonJS
var ReactDOMServer = require('react-dom/server');

# Body

## Reference

This methods can be used in both the server and browser environments:

1. renderToString()
2. renderToStaticMarkup()

These are the additional methods that depend on a package (stream) that is only available on the server, and won’t work in the browser.

3. renderToNodeStream()
4. renderToStaticNodeStream()

### renderToString()

#### ReactDOMServer.renderToString(element)

Render a React element to its initial HTML. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

If you call ReactDOM.hydrate() on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

### renderToStaticMarkup()

#### ReactDOMServer.renderToStaticMarkup(element)

Similar to renderToString, except this doesn’t create extra DOM attributes that React uses internally, such as data-reactroot. This is useful if you want to use React as a simple static page generator, as stripping away the extra attributes can save some bytes.

If you plan to use React on the client to make the markup interactive, do not use this method. Instead, use renderToString on the server and ReactDOM.hydrate() on the client.

### renderToNodeStream()

#### ReactDOMServer.renderToNodeStream(element)

Render a React element to its initial HTML. Returns a Readable stream that outputs an HTML string. The HTML output by this stream is exactly equal to what ReactDOMServer.renderToString would return. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.

If you call ReactDOM.hydrate() on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.

### renderToStaticNodeStream()

#### ReactDOMServer.renderToStaticNodeStream(element)

Similar to renderToNodeStream, except this doesn’t create extra DOM attributes that React uses internally, such as data-reactroot. This is useful if you want to use React as a simple static page generator, as stripping away the extra attributes can save some bytes.

The HTML output by this stream is exactly equal to what ReactDOMServer.renderToStaticMarkup would return.

# Conclusion

If you plan to use React on the client to make the markup interactive, do not use renderToStaticNodeStream(element) method. Instead, use renderToNodeStream on the server and ReactDOM.hydrate() on the client.