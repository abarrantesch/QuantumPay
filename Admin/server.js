const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname,)));

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});