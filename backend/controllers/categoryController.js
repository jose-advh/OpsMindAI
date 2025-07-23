import {
  createCategory,
  updateCategory,
  deleteCategory,
} from "../models/categoryModel.js";

export const create = async (req, res) => {
  const { name, description, companyId } = req.body;
  try {
    const newCategoryId = await createCategory(name, description, companyId);
    res.status(201).json({ message: "Category created", id: newCategoryId });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const affectedRows = await updateCategory(id, name, description);
    if (affectedRows > 0) {
      res.json({ message: "Category updated" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const affectedRows = await deleteCategory(id);
    if (affectedRows > 0) {
      res.json({ message: "Category deleted" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ error: "Server error" });
  }
};
