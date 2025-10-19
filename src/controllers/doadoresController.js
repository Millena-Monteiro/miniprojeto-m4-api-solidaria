import Doador from '../models/doadoresModel.js';

// 📑 Função para listar todos os doadores
export const listarDoadores = async (req, res) => {
  try {
    // 🗂 Busca todos os doadores no banco de dados
    const doadores = await Doador.find();
    res.status(200).json(doadores);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar doadores.', error });
  }
};

// ➕ Função para criar um novo doador
export const criarDoador = async (req, res) => {
  const { nome, email, telefone } = req.body;

  // 🔴 Valida se os campos obrigatórios foram preenchidos
  if (!nome.trim() || !email.trim() || !telefone.trim()) {
    return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  // Valida o email
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
if (!emailValido) {
  return res.status(400).json({ mensagem: 'Email inválido.' });
}


  try {
    // 📄 Cria um novo doador e salva no banco
    const novoDoador = new Doador({ nome, email, telefone });
    await novoDoador.save(); // Salva
    res.status(201).json(novoDoador); // Retorna o doador criado com status 201
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar doador.', error });
  }
};

// ✏️ Função para editar um doador existente
export const editarDoador = async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;

  try {
    // 📝 Atualiza o doador no banco de dados
    const doador = await Doador.findByIdAndUpdate(id, {
      nome,
      email,
      telefone
    }, { new: true });

    // 🔴 Verifica se o doador foi encontrado
    if (!doador) {
      return res.status(404).json({ mensagem: 'Doador não encontrado.' });
    }

    res.status(200).json(doador); // Retorna o doador atualizado
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao editar doador.', error });
  }
};

// ❌ Função para deletar um doador
export const deletarDoador = async (req, res) => {
  const { id } = req.params;

  try {
    // 🗑 Deleta o doador do banco de dados
    const doador = await Doador.findByIdAndDelete(id);

    // 🔴 Verifica se o doador foi encontrado para deletar
    if (!doador) {
      return res.status(404).json({ mensagem: 'Doador não encontrado.' });
    }

    res.status(200).json({ mensagem: 'Doador deletado com sucesso.' }); // Retorna mensagem de sucesso
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar doador.', error });
  }
};
