import { uploadFile } from "../models/filesModel.js";

export const upload = async (req, res) => {
  const {
    companyId,
    categoryId,
    originalName,
    localPath,
    extension,
    uploadDate,
    processingStatus,
  } = req.body;

  try {
    const newFileId = await uploadFile(
      companyId,
      categoryId,
      originalName,
      localPath,
      extension,
      uploadDate,
      processingStatus
    );

    res.status(201).json({
      message: "File uploaded successfully",
      file: {
        id: newFileId,
        originalName,
        uploadedAt: uploadDate,
      },
    });
  } catch (error) {
    console.error("Error uploanding file:", error);
    res.status(500).json({ error: "Server error" });
  }
};
