"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NewsController_1 = __importDefault(require("../controllers/NewsController"));
const image_upload_1 = require("../helpers/image-upload");
const router = (0, express_1.Router)();
router.post('/addNews', image_upload_1.imageUpload.array('images', 6), (req, res) => {
    NewsController_1.default.addNews(req, res);
});
router.get('/allNews', (req, res) => {
    NewsController_1.default.getAllNews(req, res);
});
exports.default = router;
