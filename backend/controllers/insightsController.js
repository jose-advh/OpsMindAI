import { createInsights } from "../models/insightsModel.js";

export const create = async (req, res) => {
  const { analysisId, title, type, impact, recommendation } = req.body;

  try {
    const newInsightsId = await createInsights(
      analysisId,
      title,
      type,
      impact,
      recommendation
    );

    res.status(201).json({
      message: "Insights create successfully",
      file: {
        id: newInsightsId,
        titleInsight: title,
      },
    });
  } catch (error) {}
};
