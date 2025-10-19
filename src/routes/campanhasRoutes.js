import express from 'express';
import mongoose from 'mongoose';
import {
  listarCampanhas,
  criarCampanha,
  editarCampanha,
  deletarCampanha
} from '../controllers/campanhasController.js';

const router = express.Router();

// Middleware para validar ID
const validarId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ mensagem: 'ID inválido.' });
  }
  next(); // Se o ID for válido, continue com a requisição
};

// Middleware de autenticação
const autenticar = (req, res, next) => {
  if (!req.user) { 
    return res.status(401).json({ mensagem: 'Usuário não autenticado.' });
  }
  next();
};

// 🔄 Rota para listar todas as campanhas
router.get('/campanhas', listarCampanhas);

// ➕ Rota para criar uma nova campanha
router.post('/campanhas', autenticar, criarCampanha);

// ✏️ Rota para editar uma campanha existente
router.put('/campanhas/:id', autenticar, validarId, editarCampanha);

// ❌ Rota para deletar uma campanha existente
router.delete('/campanhas/:id', autenticar, validarId, deletarCampanha);

export default router;