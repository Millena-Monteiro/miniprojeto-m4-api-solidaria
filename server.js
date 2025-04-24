import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './src/app.js'; // Importando o app do Express

dotenv.config();

// Use a URI do MongoDB Atlas no seu arquivo .env
const mongoURI = process.env.MONGODB_URI; // Isso deve estar no arquivo .env

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
