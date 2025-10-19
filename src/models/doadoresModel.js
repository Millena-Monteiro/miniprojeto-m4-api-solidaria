import mongoose from 'mongoose';

// 📊 Define o esquema para o modelo de Doador
const doadorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Por favor, forneça um email válido.']
  },
  telefone: {
    type: String,
    required: true,
    match: [/^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/, 'Por favor, forneça um telefone válido.'] // Regex para telefone brasileiro
  }
}, {timestamps:true});

// 📑 Cria o modelo de Doador com base no esquema
const Doador = mongoose.model('Doador', doadorSchema);

export default Doador;
