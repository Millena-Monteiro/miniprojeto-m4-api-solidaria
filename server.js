import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './src/app.js';

dotenv.config();

// Use a URI do MongoDB Atlas no seu arquivo .env
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("📡 Conectado ao MongoDB Atlas com sucesso!");
  app.listen(3000, () => {
    console.log("🚀 Servidor rodando na porta 3000");
  });
})
.catch((err) => {
  console.error("❌ Erro ao conectar no MongoDB Atlas", err);
});
