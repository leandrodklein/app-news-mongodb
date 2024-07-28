"use strict";
const router = require('express').Router();
const NewsController = require('../controllers/NewsController');
const { imageUpload } = require('../helpers/imageUpload');
// Rota para criar notícia
router.post('/addNews', imageUpload.array('images'), NewsController.addNews);
// Rota para obter todas as notícias
router.get('/allNews', NewsController.getAllNews);
// Rota para obter uma notícia por ID
//router.get('/:id', NewsController.getNewsById);
// Rota para remover uma notícia por ID
//router.delete('/:id', NewsController.removeNewsById);
// Rota para atualizar uma notícia por ID
//router.patch('/:id', imageUpload.array('images'), NewsController.updateNews);
module.exports = router;
