import { createAnalysis } from "../models/analysisModel.js";

export const create = async (req, res) => {
  const { fileId, summary, analysisDate } = req.body;

  try {
    const newAnalysisId = await createAnalysis(fileId, summary, analysisDate);
    res.status(201).json({
      message: "Analysis uploaded successfully",
      file: {
        id: newAnalysisId,
        uploadedAt: analysisDate,
      },
    });
  } catch (error) {}
};
