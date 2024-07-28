"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Destination to store image
const imageStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        console.log('Destination:', file.destination); // Verifique se o caminho está correto
        cb(null, './public');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path_1.default.extname(file.originalname));
    },
});
const imageUpload = (0, multer_1.default)({
    storage: imageStorage,
    fileFilter: (req, file, cb) => {
        console.log('FileFilter:', file);
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            // upload only png and jpg format
            return cb(new Error("Por favor, envie apenas png ou jpg!"));
        }
        cb(null, true);
    },
});
exports.imageUpload = imageUpload;
