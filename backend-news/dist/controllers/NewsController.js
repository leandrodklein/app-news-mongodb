"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NewsModel_1 = __importDefault(require("../models/NewsModel"));
class NewsController {
    // CREATE A NEW NEWS
    static async addNews(req, res) {
        const title = req.body.title;
        const subtitle = req.body.subtitle;
        const author = req.body.author;
        const text = req.body.text;
        // Certifique-se de que req.files não seja undefined antes de usá-lo
        const images = Array.isArray(req.files) ? req.files : (req.files ? req.files['images'] : []);
        const news = new NewsModel_1.default({
            title,
            subtitle,
            author,
            text,
            //images: images ? images.map((image) => image.filename) : [], // Use um array vazio se images for undefined
            images: images ? await Promise.all(images.map(async (image) => image.filename)) : [],
            createdAt: new Date(),
        });
        try {
            const newNews = await news.save();
            res.status(201).json({
                message: 'Notícia cadastrada com sucesso! (CONTROLLERS)',
                newNews,
            });
            console.log(newNews);
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    }
    // get all registered news
    static async getAllNews(req, res) {
        try {
            const news = await NewsModel_1.default.find().sort({ createdAt: -1 }); // Certifique-se de usar a sintaxe correta para ordenar
            res.status(200).json({
                news,
            });
            console.log(news);
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    }
}
exports.default = NewsController;
