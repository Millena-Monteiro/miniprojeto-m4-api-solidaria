import mongoose from 'mongoose';

// 🧾 Define a estrutura (schema) da doação
const DoacaoSchema = new mongoose.Schema({
  nome: { type: String }, 
  item: { type: String, required: true }, 
  quantidade: { type: Number, required: true, min: [1, 'A quantidade deve ser maior que zero.'] },
  pontoColeta:{ type: String, require: true },
  enderecoColeta: { type: String, require: true },
  data: { type: Date, default: Date.now },
  doador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doador',
    require: true
  }
  },
  {timestamps: true
});



export default mongoose.model('Doacao', DoacaoSchema);
