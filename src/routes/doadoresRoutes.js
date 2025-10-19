import express from 'express';
import mongoose from 'mongoose';
import {
  listarDoadores,
  criarDoador,
  editarDoador,
  deletarDoador
} from '../controllers/doadoresController.js';

const router = express.Router();

// Middleware para validar ID
const validarId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ mensagem: 'ID inválido.' });
  }
  next();
};

// Middleware de autenticação (exemplo básico)
const autenticar = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ mensagem: 'Usuário não autenticado.' });
  }
  next();
};

// 🔄 Rota para listar todos os doadores
router.get('/doadores', listarDoadores);

// ➕ Rota para criar um novo doador
router.post('/doadores', autenticar, criarDoador);

// ✏️ Rota para editar um doador existente
router.put('/doadores/:id', autenticar, validarId, editarDoador);

// ❌ Rota para deletar um doador existente
router.delete('/doadores/:id', autenticar, validarId, deletarDoador);

export default router;
