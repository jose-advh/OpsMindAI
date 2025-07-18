import express from "express";
import cors from "cors";
import { enviarPrompt } from "./conexionAPI.js";

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.post("/api/chat", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const respuesta = await enviarPrompt(prompt);
    res.json({ respuesta });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
