import { useState } from "react";
import Form from "../components/Form";
import ResultCard from "../components/ResultCard";

const Home = () => {
  const [result, setResult] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        padding: "40px 16px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ marginBottom: "8px" }}>LoanLogic</h1>
        </div>

        <div
          style={{
            background: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            border: "1px solid #e2e8f0",
          }}
        >
          <Form setResult={setResult} />
        </div>

        {result && (
          <div style={{ marginTop: "20px" }}>
            <ResultCard result={result} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
