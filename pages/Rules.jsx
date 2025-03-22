import React, { useState } from "react";
import axios from "axios";

const Rules = () => {
  const [description, setDescription] = useState("");

  const addRule = () => {
    axios.post("http://localhost:5000/fraud/rules", { 
      description, createdBy: "Admin" 
    }).then(() => alert("Rule added!"));
  };

  return (
    <div className="container">
      <h1>➕ Add Fraud Rule</h1>
      <input 
        type="text" 
        placeholder="Rule description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button onClick={addRule}>Add Rule</button>
    </div>
  );
};

export default Rules;
