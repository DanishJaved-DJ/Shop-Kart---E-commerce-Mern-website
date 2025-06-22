import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";
import express from "express"; // ⬅️ This is required here to use `app.use`

dotenv.config();

import app from './app.js';
import dataBaseConnect from './config/db.js';

const PORT = process.env.PORT || 8562;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve Vite static files
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// ✅ Start server after DB connection
dataBaseConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
