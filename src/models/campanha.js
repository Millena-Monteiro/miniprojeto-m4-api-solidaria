import mongoose from 'mongoose';

// 📊 Define o esquema para o modelo de Campanha
const campanhaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true // Obrigatório nome da campanha
  },
  descricao: {
    type: String,
    required: true, // Descrição é obrigatória
    maxlength: 500 // limita o tamanho da descrição
  },
  dataInicio: {
    type: Date,
    required: true // Data de início é obrigatória
  },
  dataFim: {
    type: Date,
    required: true // Data de término é obrigatória
  }
  },

  {timestamps: true 
  });

  // evita que alguém crie campanha onde dataFim é antes de dataInicio
  campanhaSchema.pre('save', function(next) {
    if (this.dataFim < this.dataInicio) {
      return next(new Error('A data de término não pode ser anterior à data de início.'));
    }
    next();
  });
  

// 📑 Cria o modelo de Campanha com base no esquema
const Campanha = mongoose.model('Campanha', campanhaSchema);

export default Campanha;
