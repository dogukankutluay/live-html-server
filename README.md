## Starting an HTML File with an Express Server via Terminal

This project demonstrates how to run an HTML file on a simple web server using Express.js.

## SETUP

- `npm install live-html-server`

## USAGE/API

Example Usage:

```js
import init from "live-html-server";
init({
  port: 8000, //default : 8000
  joinHtml: "index.html", // default : index.html
  host: "localhost", //default : localhost
});
```

## EXAMPLE RUN

- `npm install`
- `npm run start`
