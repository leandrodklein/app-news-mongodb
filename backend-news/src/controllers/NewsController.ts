import { Request, Response } from 'express';
import NewsModel from '../models/NewsModel';
import INewsDocument from '../models/INewsDocument';

class NewsController {

    // CREATE A NEW NEWS
    static async addNews(req: Request, res: Response) {

        const title: string = req.body.title;
        const subtitle: string = req.body.subtitle;
        const author: string = req.body.author;
        const text: string = req.body.text;

        // Certifique-se de que req.files não seja undefined antes de usá-lo
        const images: Express.Multer.File[] = Array.isArray(req.files) ? req.files : (req.files ? req.files['images'] : []);

        const news: INewsDocument = new NewsModel({
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
            console.log(newNews)
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    // get all registered news
    static async getAllNews(req: Request, res: Response) {
        try {
            const news = await NewsModel.find().sort({ createdAt: -1 }); // Certifique-se de usar a sintaxe correta para ordenar

            res.status(200).json({
                news,
            });
            console.log(news)
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}

export default NewsController;

