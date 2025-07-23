import dbConnection from "../config/conexionBD.js";

export const uploadFile = async (
  companyId,
  categoryId,
  originalName,
  localPath,
  extension,
  uploadDate,
  processingStatus
) => {
  const [result] = await dbConnection.query(
    "INSERT INTO archivos (empresa_id, categoria_id,nombre_original, ruta_local, extension, fecha_subida, estado_procesamiento) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      companyId,
      categoryId,
      originalName,
      localPath,
      extension,
      uploadDate,
      processingStatus,
    ]
  );

  return result.insertId;
};
