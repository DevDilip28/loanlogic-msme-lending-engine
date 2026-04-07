import prisma from "../utils/prisma.js";
import { evaluate } from "../decisionEngine/applicationEngine.js";
import { ApiError } from "../utils/api-error.js";

export const processApplication = async (data) => {
  const { name, pan, businessType, monthlyRevenue, loanAmount, tenure } = data;

  if (!name || !pan || !businessType) {
    throw new ApiError(400, "Basic details are required");
  }

  if (monthlyRevenue <= 0) {
    throw new ApiError(400, "Monthly revenue must be greater than 0");
  }

  if (loanAmount <= 0) {
    throw new ApiError(400, "Loan amount must be greater than 0");
  }

  if (tenure <= 0) {
    throw new ApiError(400, "Tenure must be greater than 0");
  }

  const decisionResult = evaluate(data);

  if (!decisionResult) {
    throw new Error("Decision engine failed");
  }

  const saved = await prisma.application.create({
    data: {
      ...data,
      decision: decisionResult.decision,
      creditScore: decisionResult.creditScore,
      reasons: decisionResult.reasons,
    },
  });

  return {
    decision: saved.decision,
    creditScore: saved.creditScore,
    reasons: saved.reasons,
  };
};
