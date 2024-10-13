import express from 'express';

const server = express();

// Habilita o parsing de JSON no corpo da requisição
server.use(express.json());

// Rota GET para verificar se a API está online
server.get('/', async (req, res) => {
  try {
    res.json("api-vercel-simples está online!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao processar solicitação' });
  }
});

// Rota POST para processar o prompt e gerar texto
server.post('/', async (req, res) => {
  try {
    // Extrai o parâmetro "body" do corpo da requisição
    const { body } = req.body;

    // Valida se o parâmetro "body" foi enviado
    if (!body) {
      return res.status(400).json({ error: 'Não foi enviado o body' });
    }

    console.log(body);
    
    // Retorna o texto gerado na resposta
    res.json(`esse foi o Body recebido na API: ${body}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao processar solicitação' });
  }
});

// Define a porta do servidor
const port = 3000;

// Inicia o servidor e imprime mensagem informativa
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 