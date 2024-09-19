// criar um srvidor web para interpretar o html

const fs = require("node:fs");
const http = require("node:http");

const port = 3000;
const servidors = http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile("./docs/index.html", "utf-8", function (err, arquivo) {
      if (err) {
        console.error("Errouu..." + err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(arquivo);
        res.end();
      }
    });
  }
});

servidor.listen(port, function () {
  console.log("Servidor rodando na porta " + port);

  //console.log(fs, http)
});
