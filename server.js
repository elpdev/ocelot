import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 80;
const storagePath = process.env.STORAGE_PATH || '/storage';
const distPath = path.join(__dirname, 'dist');

fs.mkdirSync(storagePath, { recursive: true });

app.get('/up', (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use(express.static(distPath));

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Serving ${distPath} on port ${port}`);
});
