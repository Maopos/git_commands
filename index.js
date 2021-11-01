const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'))

const PORT = process.env.PORT || 4000;



app.listen(PORT, () => {
  console.log("===========================================\n");
  console.log(`✅ Servidor funcionando en el puerto ${PORT}!!`);
  
});

