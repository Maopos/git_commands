const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'))

const PORT = process.env.PORT || 4000;

app.get("/boos", (req, res) => {
  //res.send("👷🏻‍♂️ Backend...");
  res.json({
      mensaje: 'Hola desde boos'
  })
});

app.get("/project", (req, res) => {
  //res.send("👷🏻‍♂️ Otra ruta...");
  res.json({
      mensaje: 'Hola desde project'
  })
});

app.get("/master", (req, res) => {
  //res.send("👷🏻‍♂️ Ruta master...");
  res.json({
      mensaje: 'Hola desde master'
  })
});

app.listen(PORT, () => {
  console.log("===========================================\n");
  console.log(`✅ Servidor funcionando en el puerto ${PORT}!!`);
  
});

