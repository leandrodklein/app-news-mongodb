"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const app = express();
// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});
// ROUTES
const NewsRouter = require('./routes/NewsRouter');
app.use('/api/news', NewsRouter);
// PASTA QUE SERÃO SALVOS AS IMAGENS
app.use(express.static('./public'));
// PORT
const PORT = process.env.PORT || 8080;
// SERVER
app.listen(PORT, () => {
    console.log(`SERVIDOR INICIADO NA PORTA ${PORT}`);
});
