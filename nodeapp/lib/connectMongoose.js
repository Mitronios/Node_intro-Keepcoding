import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno

export default function connectMongoose() {
  const password = process.env.MONGODB_PASSWORD;
  const uri = `mongodb://admin:${password}@localhost:27017/cursonode?authSource=admin`;

  return mongoose.connect(uri).then((mongoose) => mongoose.connection);
}
