"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const NewsRouter_1 = __importDefault(require("./routes/NewsRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ credentials: true, origin: 'http://localhost:3000' }));
//app.use(express.static('public'));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use((0, cors_1.default)());
    next();
});
const port = 8080;
// Configuração da conexão com o MongoDB
//const dbURI = 'mongodb://127.0.0.1:27017/api-news';
const dbURI = 'mongodb+srv://ldk-app-news:ldkern30@newscluster.wftwx8j.mongodb.net/';
mongoose_1.default.connect(dbURI);
const db = mongoose_1.default.connection;
db.on('error', (err) => {
    console.error('Erro de conexão ao banco de dados:', err);
});
db.once('open', () => {
    console.log('Conectado ao banco de dados MongoDB');
    // Configurar rotas e controladores aqui
    app.use('/api/news', NewsRouter_1.default);
    // Pasta aonde que serão salvas as imagens
    app.use('/public', express_1.default.static('./public'));
    // Iniciar o servidor após a conexão ser estabelecida
    app.listen(port, () => {
        console.log(`O servidor está rodando na porta ${port}`);
    });
});
