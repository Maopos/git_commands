const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'))

const PORT = process.env.PORT || 4000;

app.get("/boos", (req, res) => {
  res.send("👷🏻‍♂️ Backend...");
});

app.get("/project", (req, res) => {
  res.send("👷🏻‍♂️ Otra ruta...");
});

app.get("/master", (req, res) => {
  res.send("👷🏻‍♂️ Ruta master...");
});

app.listen(PORT, () => {
  console.log("===========================================\n");
  console.log(`✅ Servidor funcionando en el puerto ${PORT}!!`);
  
});

