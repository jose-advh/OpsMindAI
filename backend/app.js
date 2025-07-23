import express from "express";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import filesRoutes from "./routes/filesRoutes.js";
import analysisRoutes from "./routes/analysisRoutes.js";
import insightsRoutes from "./routes/insightsRoutes.js";

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/categories", categoryRoutes);
app.use("/api/files", filesRoutes);
app.use("/api/analysis", analysisRoutes);
app.use("/api/insights", insightsRoutes);

app.post("/api/chat", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const respuesta = await sendPrompt(prompt);
    res.json({ respuesta });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Estamos en http://localhost:${PORT}`);
});
