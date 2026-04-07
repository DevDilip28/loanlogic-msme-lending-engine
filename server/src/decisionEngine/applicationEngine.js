export const evaluate = (data) => {
  const { monthlyRevenue, loanAmount, tenure } = data;

  const emi = loanAmount / tenure;

  const emiRatio = emi / monthlyRevenue;

  const loanRatio = loanAmount / monthlyRevenue;

  let creditScore = 100;
  const reasons = [];

  if (emiRatio > 0.5) {
    creditScore -= 40;
    reasons.push("HIGH EMI BURDEN");
  } else if (emiRatio > 0.3) {
    creditScore -= 20;
    reasons.push("MODERATE EMI BURDEN");
  } else {
    reasons.push("LOW EMI RATIO");
  }

  if (loanRatio > 10) {
    creditScore -= 30;
    reasons.push("HIGH LOAN AMOUNT");
  } else if (loanRatio > 5) {
    creditScore -= 15;
    reasons.push("MODERATE LOAN AMOUNT");
  } else {
    reasons.push("LOW LOAN AMOUNT");
  }

  const decision = creditScore >= 60 ? "APPROVED" : "REJECTED";

  return {
    decision,
    creditScore,
    reasons,
  };
};
