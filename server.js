const express = require('express');
const app = express();
const jogos = require('./jogos.json');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Jogos PS2! Acesse /api/jogos para ver todos os jogos.');
  });

app.get('/api/jogos', (req, res) => {
    res.json(jogos);
});

app.get('/api/jogos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const jogo = jogos.find((j) => j.id === id);
    if (jogo) {
        res.json(jogo);
    }  else {
        res.status(404).json({mensagem: 'jogo não encontrado.'});
    }  
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

