import Campanha from '../models/campanha.js'; // Importa o modelo de campanha

// 📑 Função para listar todas as campanhas
export const listarCampanhas = async (req, res) => {
  try {
    // 🗂 Busca todas as campanhas no banco de dados
    const campanhas = await Campanha.find();
    res.status(200).json(campanhas); // Retorna as campanhas com status 200
  } catch (error) {
    res.status(500).json({
      mensagem: 'Erro ao listar campanhas.',
      error: error.message, // 👉 Isso aqui mostra a mensagem real do erro
    });
  }
}

// ➕ Função para criar uma nova campanha
export const criarCampanha = async (req, res) => {
  const { nome, descricao, dataInicio, dataFim } = req.body;

  // 🔴 Valida se os campos obrigatórios foram preenchidos
  if (!nome || !descricao || !dataInicio || !dataFim) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  try {
    // 📄 Cria uma nova campanha e salva no banco
    const novaCampanha = new Campanha({
      nome,
      descricao,
      dataInicio,
      dataFim
    });

    await novaCampanha.save(); // Salva a nova campanha
    res.status(201).json(novaCampanha); // Retorna a campanha criada com status 201
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar campanha.', error });
  }
};

// ✏️ Função para editar uma campanha existente
export const editarCampanha = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, dataInicio, dataFim } = req.body;

  try {
    // 📝 Atualiza a campanha no banco de dados
    const campanha = await Campanha.findByIdAndUpdate(id, {
      nome,
      descricao,
      dataInicio,
      dataFim
    }, { new: true });

    // 🔴 Verifica se a campanha foi encontrada
    if (!campanha) {
      return res.status(404).json({ mensagem: 'Campanha não encontrada.' });
    }

    res.status(200).json(campanha); // Retorna a campanha atualizada
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao editar campanha.', error });
  }
};

// ❌ Função para deletar uma campanha
export const deletarCampanha = async (req, res) => {
  const { id } = req.params;

  try {
    // 🗑 Deleta a campanha do banco de dados
    const campanha = await Campanha.findByIdAndDelete(id);

    // 🔴 Verifica se a campanha foi encontrada para deletar
    if (!campanha) {
      return res.status(404).json({ mensagem: 'Campanha não encontrada.' });
    }

    res.status(200).json({ mensagem: 'Campanha deletada com sucesso.' }); // Retorna mensagem de sucesso
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar campanha.', error });
  }
};
