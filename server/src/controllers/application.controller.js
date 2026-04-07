import { processApplication } from "../services/application.service.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";

export const evaluateApplication = async (req, res) => {
  try {
    const data = req.body;

    if (!data) {
      throw new ApiError(400, "Request body is required");
    }

    const result = await processApplication(data);

    return res
      .status(200)
      .json(new ApiResponse(200, result, "Application evaluated successfully"));
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json(
        new ApiError(
          error.statusCode || 500,
          error.message || "Internal Server Error",
        ),
      );
  }
};
