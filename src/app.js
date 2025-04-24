import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import doacoesRoutes from './routes/doacoesRoutes.js';
import doadoresRoutes from './routes/doadoresRoutes.js';
import campanhasRoutes from './routes/campanhasRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 📦 Middleware para interpretar JSON
app.use(express.json());

// 🖼️ Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../public')));

// 🔀 Rotas
app.use('/', doacoesRoutes);
app.use('/', doadoresRoutes);
app.use('/', campanhasRoutes);

export default app;