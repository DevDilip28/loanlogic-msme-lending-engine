import { useState } from "react";
import axios from "axios";

const Form = ({ setResult }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    pan: "",
    businessType: "",
    monthlyRevenue: "",
    loanAmount: "",
    tenure: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post("https://loanlogic.onrender.com/api/evaluate", {
        ...formData,
        monthlyRevenue: Number(formData.monthlyRevenue),
        loanAmount: Number(formData.loanAmount),
        tenure: Number(formData.tenure),
      });

      setResult(res.data.data);
    } catch (err) {
      alert(err.response?.data?.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    outline: "none",
    fontSize: "14px",
    background: "#f8fafc",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <input
        name="name"
        placeholder="Business Name"
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        name="pan"
        placeholder="PAN (ABCDE1234F)"
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        name="businessType"
        placeholder="Business Type (Retail, Manufacturing...)"
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        name="monthlyRevenue"
        type="number"
        placeholder="Monthly Revenue (₹)"
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        name="loanAmount"
        type="number"
        placeholder="Loan Amount (₹)"
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        name="tenure"
        type="number"
        placeholder="Tenure (months)"
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          background: "#2563eb",
          color: "#fff",
          fontWeight: "500",
          cursor: "pointer",
          transition: "0.2s",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? "Processing..." : "Evaluate Loan"}
      </button>
    </form>
  );
};

export default Form;
