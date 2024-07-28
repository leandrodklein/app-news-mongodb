import { Router } from 'express';
import { Request, Response } from 'express';

import NewsController from '../controllers/NewsController'; 

import { imageUpload } from '../helpers/image-upload';

const router = Router();

router.post('/addNews', imageUpload.array('images', 6), (req: Request, res: Response) => {
    NewsController.addNews(req, res);
});

router.get('/allNews', (req: Request, res: Response) => {
    NewsController.getAllNews(req, res);
});

export default router;

