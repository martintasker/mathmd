# Math and markdown typesetting

Markdown and math typesetting are successfully mixed on quite a few websites (eg Stack Exchange and Wikipedia) and systems (eg iPython notebooks).
But how-to recipes for creating such systems are quite hard to find: MathJax's documentation is long-winded, markdown's documentation
is extraordinarily distributed, and answers I've seen about mixing the two are often incorrect.  This project contains my personal notes about
how to do it, along with example code.

## Running the code

Currently, everything is on the demo page at `raw/index.html`.

To run, install `http-server` if you haven't already done so, eg with

```shell
sudo npm install -g http-server
```

Then, serve up the page and browse to it:

```shell
cd raw
http-server
```

and then browse `localhost:8080`.

## Viewing and copying the code

You can view the code in an editor, and you can copy it and adapt it for your own use as you like.
