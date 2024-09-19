// criar o servidor
const express = require("express");
const app = express();

// criar rotas
app.get("/", (req, res) => {
  res.send("<p>Parágrafo...</p>");
});

// rodar servidor numa dada porta
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
