const ResultCard = ({ result }) => {
  if (!result) return null;

  const isApproved = result.decision === "APPROVED";

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          marginBottom: "12px",
          fontWeight: "600",
          fontSize: "18px",
          color: isApproved ? "#16a34a" : "#dc2626",
        }}
      >
        {isApproved ? "Approved" : "Rejected"}
      </div>

      <div style={{ marginBottom: "10px", fontSize: "14px" }}>
        <strong>Credit Score:</strong> {result.creditScore}
      </div>

      <div style={{ fontSize: "14px" }}>
        <strong>Reasons</strong>
        <ul style={{ marginTop: "6px", paddingLeft: "18px", color: "#475569" }}>
          {result.reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultCard;
