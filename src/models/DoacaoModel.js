import mongoose from 'mongoose';

// 🧾 Define a estrutura (schema) da doação
const DoacaoSchema = new mongoose.Schema({
  nome: { type: String }, // Nome de quem está doando (opcional)
  item: { type: String, required: true }, // Item doado (obrigatório)
  quantidade: { type: Number, required: true, min: [1, 'A quantidade deve ser maior que zero.'] }, // Garante que quantidade seja pelo menos 1
  pontoColeta:{ type: String, require: true },
  enderecoColeta: { type: String, require: true },
  data: { type: Date, default: Date.now }, // Data da doação (gerada automaticamente)
  doador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doador',
    require: true //garantir que toda doação tenha um doador associado
  }
  },
  {timestamps: true
});

// garante que doaodor é um objeto válido


// 📦 Cria o model 'Doacao' com base no schema
export default mongoose.model('Doacao', DoacaoSchema);
