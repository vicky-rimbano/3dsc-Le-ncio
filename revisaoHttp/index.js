const http = require("http"); //importar http
const port = 8000; // porta do servidor
// criando o servidor
const servidor = http.createServer((req, res) => {
  //  console.log(req.url, req.method);

  if (req.url === "/") {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Oii home page!</h1>");
    res.end();
  } else if (req.url === "/sobre") {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1> Saiba mais... </h1>");
    res.end();
  }
});

//utilizando a porta do servidor
servidor.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
