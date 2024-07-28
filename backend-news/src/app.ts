require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import NewsRoutes from './routes/NewsRouter';

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
//app.use(express.static('public'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
});

// const port = 8080;
// Configuração da conexão com o MongoDB
//const dbURI = 'mongodb://127.0.0.1:27017/api-news';
// const dbURI = 'mongodb+srv://ldk-app-news:ldkern30@newscluster.wftwx8j.mongodb.net/';
// mongoose.connect(dbURI);

const port = process.env.PORT || 8080;
const dbURI = process.env.MONGODB_URI;

if (!dbURI) {
  throw new Error('A variável de ambiente MONGODB_URI não está definida');
}

mongoose.connect(dbURI, {  
  dbName: 'news' 
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Erro de conexão ao banco de dados:', err);
});

db.once('open', () => {
  console.log('Conectado ao banco de dados MongoDB');

  // Configurar rotas e controladores aqui
  app.use('/api/news', NewsRoutes);

  // Pasta aonde que serão salvas as imagens
  app.use('/public', express.static('./public'));

  // Iniciar o servidor após a conexão ser estabelecida
  app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
  });
});














