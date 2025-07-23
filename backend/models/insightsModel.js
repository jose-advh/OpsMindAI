import dbConnection from "../config/conexionBD.js";

export const createInsights = async (
  analysisId,
  title,
  type,
  impact,
  recommendation
) => {
  const [result] = await dbConnection.query(
    "INSERT INTO insights (analisis_id, titulo, tipo, impacto, recomendacion) VALUES (?, ?, ?, ?, ?)",
    [analysisId, title, type, impact, recommendation]
  );

  return result.insertId;
};
