// Importação dos módulos necessários
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

// Configuração do dotenv para carregar as variáveis do .env
dotenv.config();

// Inicialização do aplicativo Express
const app = express();

// Configuração de middleware
app.use(cors());
app.use(express.json());

// Endpoint raiz para testar o funcionamento do backend
app.get('/', (req, res) => {
  res.send('Backend do KOT está rodando');
});

// Endpoint de autenticação de exemplo (login)
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Exemplo fixo de usuário para demonstração
  if (email === 'user@example.com' && password === 'password123') {
    // Criação do token JWT com validade de 1 hora
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

// Outros endpoints (exemplo para transações)
app.get('/transactions', (req, res) => {
  // Exemplo de resposta com dados fictícios
  const transactions = [
    { id: 1, type: 'Receita', value: 150.00, date: '2023-06-01', description: 'Recebido de patrocínio' },
    { id: 2, type: 'Despesa', value: 50.00, date: '2023-06-02', description: 'Compra de equipamento' }
  ];
  res.json(transactions);
});

// Inicia o servidor na porta definida
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor do backend rodando na porta ${PORT}`);
});
