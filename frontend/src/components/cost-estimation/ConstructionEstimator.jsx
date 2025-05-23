import React, { useState } from "react";

const ConstructionEstimator = () => {

  return (
    <div style={{ maxWidth: "91%", margin: "auto", padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h1 style={{ fontWeight: "bold",fontSize: "26px" }}>Construction Cost Estimator</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>  
      </div>

      <button
  onClick={() => {
    window.location.href = "http://localhost:4000/";
  }}
  style={{
    padding: "10px 20px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px"
  }}
>
  Calculate
</button>
  
    </div>
  );
};

export default ConstructionEstimator;
