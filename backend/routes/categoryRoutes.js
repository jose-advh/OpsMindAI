import express from "express";
import { create, update, remove } from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
