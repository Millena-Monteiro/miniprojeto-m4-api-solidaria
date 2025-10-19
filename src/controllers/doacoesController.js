import Doacao from '../models/DoacaoModel.js';

/**
 * Função para listar todas as doações
 * Método: GET /doacoes
 */
export async function listarDoacoes(req, res) {
  try {
    // Busca todas as doações no banco de dados
    const doacoes = await Doacao.find();
    // Retorna as doações em formato JSON com status 200
    res.status(200).json(doacoes);
  } catch (error) {
    // Em caso de erro, retorna status 500 (erro do servidor)
    res.status(500).json({ mensagem: 'Erro ao buscar doações.' });
  }
}

/**
 * Função para criar uma nova doação
 * Método: POST /doacoes
 */
export async function criarDoacao(req, res) {
  // Desestrutura os dados enviados no corpo da requisição
  const { item, quantidade, pontoColeta, enderecoColeta, nome } = req.body;

  // Verifica se os campos obrigatórios foram preenchidos
  if (!item || !quantidade || isNaN(quantidade)) {
    return res.status(400).json({ mensagem: 'Item é obrigatório e quantidade deve ser um número.' });
  }

  try {
    // Cria uma nova instância de Doacao com os dados enviados
    const novaDoacao = new Doacao({ item, quantidade, pontoColeta, enderecoColeta, nome });

    // Salva a nova doação no banco de dados
    const doacaoSalva = await novaDoacao.save();

    // Retorna a doação criada com status 201 (Criado)
    res.status(201).json(doacaoSalva);
  } catch (error) {
    // Em caso de erro, retorna status 500 (erro do servidor)
    res.status(500).json({ mensagem: 'Erro ao salvar doação.' });
  }
}

/**
 * Função para editar uma doação existente
 * Método: PUT /doacoes/:id
 */
export async function editarDoacao(req, res) {
  const { id } = req.params; 
  const { item, quantidade, nome } = req.body;

  try {
    // Busca e atualiza a doação pelo ID
    const doacaoAtualizada = await Doacao.findByIdAndUpdate(
      id,
      { item, quantidade, nome },
      { new: true }
    );

    // Verifica se a doação foi encontrada
    if (!doacaoAtualizada) {
      return res.status(404).json({ mensagem: 'Doação não encontrada.' });
    }

    // Retorna a doação atualizada com uma mensagem
    res.json({
      mensagem: 'Doação atualizada com sucesso.',
      doacao: doacaoAtualizada,
    });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar doação.', erro: error.message });
  }
}

// ❌ [DELETE] Remove uma doação pelo ID
export async function deletarDoacao(req, res) {
  const { id } = req.params;

  try {
    const doacaoDeletada = await Doacao.findByIdAndDelete(id);

    // Se a doação não for encontrada
    if (!doacaoDeletada) {
      return res.status(404).json({
        mensagem: 'Doação não encontrada.'
      });
    }

    res.status(200).json({
      mensagem: 'Doação deletada com sucesso.'
    });
  } catch (error) {
    res.status(500).json({
      mensagem: 'Erro ao deletar doação.',
      erro: error.message
    });
  }
}