import mongoose from 'mongoose';

// 📊 Define o esquema para o modelo de Doador
const doadorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true // Nome do doador é obrigatório
  },
  email: {
    type: String,
    required: true, // Email do doador é obrigatório
    unique: true, // Garante que o email não seja duplicado
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Por favor, forneça um email válido.']
  },
  telefone: {
    type: String,
    required: true, // Telefone do doador é obrigatório
    match: [/^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/, 'Por favor, forneça um telefone válido.'] // Regex para telefone brasileiro
  }
}, {timestamps:true});

// 📑 Cria o modelo de Doador com base no esquema
const Doador = mongoose.model('Doador', doadorSchema);

export default Doador; // Exporta o modelo de doador
