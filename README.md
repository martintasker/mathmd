# Math and markdown typesetting

Here is

* a brief how-to, in very plain HTML, at `raw/index.html`
* an angular tag, `<mathmd>`
* a demo of the `<mathmd>` tag, in slightly less plain HTML, at `demo/index.html`

Why?  Because although math and markdown typesetting are successfully mixed in various places (eg Stack Exchange, and iPython notebooks),
existing how-to information is patchy, and the documentation of both mathjax and markdown implementations hard to navigate.

## Running the raw and demo pages

You'll need `http-server` installed.  If you haven't already got it, install it with, eg,

```shell
sudo npm install -g http-server
```

To serve up the raw page,

```shell
cd raw
http-server
```

and then browse `localhost:8080`.

To serve up the demo of the angular `<mathmd>` tag,

```shell
cd demo
bower install
http-server
```

and then browse `localhost:8080`.

## Using the code

### Using the raw code

You can copy and tweak the code in `raw/index.html` to your taste, for use in raw web pages.

### Using the `<mathmd>` tag in an Angular application

From your application's main directory,

```shell
bower install --save marked martintasker/mathmd
```

Include the lines

```html
<script src="bower_components/marked/lib/marked.js"></script>
<script src="bower_components/mathmd/src/mathmd.directive.js"></script>
```

in your `index.html`.

Include a dependency on `mpt.mathmd` in your app, eg

```js
angular.module('myApp', ['mpt.mathmd']);
```

Also include customization for the `MathJax` library and an asynchronous load of the library, from the MathJax CDN:

```html
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$', '$'],['\\(', '\\)']]},
    messageStyle: "none",
    skipStartupTypeset: true,
  });
</script>
<script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML"></script>
```

You have some options with the above snippet:

* don't include it at all: then, the `<mathmd>` tag will only format as plain markdown
* don't bother with the `inlineMath` specification: then, only the default `\(` and `\)` escapes will be used for inline math
* use the default setting for messageStyle which shows you when MathJax is formatting and when it detects errors

If you're curious, you might be able to install MathJax locally with bower, instead of asynchronously from the CDN as shown above.

The setting of `skipStartupTypeset: true` is the only one that makes sense in an Angular context.  Use the default (`false`) only if you
are confident you have good reason to do so.

With all this done, you can simply use the tag from your HTML, eg

```html
<mathmd src="foo.md"></mathmd>
```

The attribute is a hard-coded string.

## Testing the code

(still bringing up test infrastructure)

## To do

Issues to address:

* complete the bring-up of test infrastructure
* occasional non-formatting due to non-definition of MathJax at the time formatting is required.  This can sometimes be seen
  on the demo page when it's first loaded -- though it won't be seen on a refresh due to browser caching.

There are many possibilities for feature enhancements:

* add testing of MathJax to the karma-driven unit tests (currently only markdown is tested)
* change the `src` attribute to take interpolated expressions rather than just a string
* add a `nomath` attribute which disables any attempt at math typesetting
* add global configuration options set via `angular.module('mpt.mathmd').config()`, eg to permit control of math delimiters
* add an inline content option which can be used as an alternative to the `src` attribute and separate `.md` file
* experiment with local MathJax installation and document the result
