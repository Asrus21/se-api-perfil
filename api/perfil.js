const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/perfil', (req, res) => {
  const user = req.query.user || 'Usuário';
  const level = parseInt(req.query.level) || 0;
  const points = parseInt(req.query.points) || 0;

  let status;
  if (level >= 100) status = '✨ Lendário ✨';
  else if (level >= 50) status = 'Veterano';
  else if (level >= 20) status = 'Intermediário';
  else status = 'Iniciante';

  res.set('Content-Type', 'text/plain');
  res.send(`${user} é um ${status} com ${points} pontos!`);
});

module.exports = app;
