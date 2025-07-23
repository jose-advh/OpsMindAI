import dbConnection from "../config/conexionBD.js";

export const createAnalysis = async (fileId, summary, analysisDate) => {
  const [result] = await dbConnection.query(
    "INSERT INTO analisis (archivo_id, resumen, fecha_analisis) VALUES (?, ?, ?)",
    [fileId, summary, analysisDate]
  );
  return result.insertId;
};
