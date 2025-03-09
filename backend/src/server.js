const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importa as rotas de autenticação
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());

// Rota raiz para teste
app.get('/', (req, res) => {
  res.send('Bem-vindo ao backend do KOT - Keep On Track!');
});

// Integra as rotas de autenticação sob /api/auth
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
