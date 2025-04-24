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
  next(); // Se o ID for válido, continua com a requisição
};

// Middleware de autenticação (exemplo básico)
const autenticar = (req, res, next) => {
  if (!req.user) { // Supondo que req.user seja preenchido com dados do usuário autenticado
    return res.status(401).json({ mensagem: 'Usuário não autenticado.' });
  }
  next(); // Usuário autenticado, continua
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
