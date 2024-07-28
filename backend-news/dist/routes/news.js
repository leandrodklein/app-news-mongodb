"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const News_1 = __importDefault(require("../models/News"));
const router = (0, express_1.Router)();
// ROTA PARA CRIAR UMA NOTICIA
router.post('/news', async (req, res) => {
    try {
        const news = new News_1.default(req.body);
        await news.save();
        res.status(201).json(news);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar a notícia.' });
    }
});
// ROTA PARA LISTAR TODAS AS NOTÍCIAS
router.get('/news', async (req, res) => {
    try {
        const news = await News_1.default.find();
        res.status(200).json(news);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as notícias' });
    }
});
exports.default = router;
