import express from "express";
import {renderToString, renderToStaticMarkup} from "react-dom/server";
import Home from "../containers/Home";
import React from "react";

/**
 * content =  <div data-reactroot=""><span>This is sanyuan</span></div>
 */
let content = renderToString(<Home/>);
console.log("content", content);
let app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send(`
      <html>
     <head>
       <title>HOME</title>
     </head>
     <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
     </body>
   </html>

    `)
})
app.listen(3001);