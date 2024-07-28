import mongoose, { Schema, Model } from 'mongoose';
import INewsDocument from './INewsDocument';

const NewsSchema: Schema<INewsDocument> = new Schema<INewsDocument>({
  title: String,
  subtitle: String,
  author: String,
  text: String,
  images: [String],
  createdAt: { type: Date, default: Date.now },
});

const NewsModel: Model<INewsDocument> = mongoose.model('News', NewsSchema);

export default NewsModel;


