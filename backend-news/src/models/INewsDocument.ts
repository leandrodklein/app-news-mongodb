import { Document } from 'mongoose';

interface INewsDocument extends Document {
  title: string;
  subtitle: string;
  author: string;
  text: string;
  images: string[];
  createdAt?: Date;
}

export default INewsDocument;
