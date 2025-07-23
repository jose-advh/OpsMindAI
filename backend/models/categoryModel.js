import dbConnection from "../config/conexionBD.js";

export const createCategory = async (name, description, companyId) => {
  const [result] = await dbConnection.query(
    "INSERT INTO categorias (nombre, descripcion, empresa_id) VALUES (?, ?, ?)",
    [name, description, companyId]
  );
  return result.insertId;
};

export const updateCategory = async (id, name, description) => {
  const [result] = await dbConnection.query(
    "UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?",
    [name, description, id]
  );
  return result.affectedRows;
};

export const deleteCategory = async (id) => {
  const [result] = await dbConnection.query(
    "DELETE FROM categorias WHERE id = ?",
    [id]
  );
  return result.affectedRows;
};

export const getAllCategoriesByCompany = async (companyId) => {
  const [rows] = await dbConnection.query(
    "SELECT * FROM categorias WHERE empresa_id = ?",
    [companyId]
  );
  return rows;
};
