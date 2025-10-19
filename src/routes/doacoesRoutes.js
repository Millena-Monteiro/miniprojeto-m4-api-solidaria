import express from 'express';
import mongoose from 'mongoose';
import {
  listarDoacoes,
  criarDoacao,
  editarDoacao,
  deletarDoacao,
} from '../controllers/doacoesController.js';

const router = express.Router();

// Middleware para validar ID
const validarId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ mensagem: 'ID inválido.' });
  }
  next(); // Se o ID for válido, continue com a requisição
};

const autenticar = (req, res, next) => {
  if (!req.user) { // Supondo que req.user seja preenchido com dados do usuário autenticado
    return res.status(401).json({ mensagem: 'Usuário não autenticado.' });
  }
  next();
};

// 🔍 Rota para listar todas as doações
router.get('/doacoes', listarDoacoes);

// ➕ Rota para criar uma nova doação
router.post('/doacoes', autenticar, criarDoacao);

// ✏️ Rota para editar uma doação existente (via ID)
router.put('/doacoes/:id', autenticar, validarId, editarDoacao);

// ❌ Rota para deletar uma doação existente
router.delete('/doacoes/:id', autenticar, validarId, deletarDoacao);

export default router;