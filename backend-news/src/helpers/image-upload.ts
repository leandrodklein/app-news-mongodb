import multer, { StorageEngine } from 'multer';
import path from 'path';
import { Request } from 'express';

// Destination to store image
const imageStorage: StorageEngine = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    console.log('Destination:', file.destination); // Verifique se o caminho está correto
    cb(null, './public');
  },
  
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter: (req: Request, file, cb) => {
    console.log('FileFilter:', file);
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Por favor, envie apenas png ou jpg!"));
    }
    cb(null, true);
  },
});

export { imageUpload };





