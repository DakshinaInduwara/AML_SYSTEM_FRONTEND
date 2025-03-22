import React, { useState, useEffect } from "react";
import axios from "axios";

const Rules = () => {
  const [rules, setRules] = useState([]);
  const [newRule, setNewRule] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/rules")
      .then(res => setRules(res.data))
      .catch(err => console.error(err));
  }, []);

  const addRule = () => {
    axios.post("http://localhost:5000/api/rules", { ruleName: newRule, description: "User added rule" })
      .then(() => {
        setRules([...rules, { ruleName: newRule, description: "User added rule" }]);
        setNewRule("");
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>🚨 Fraud Detection Rules</h1>
      <input type="text" value={newRule} onChange={(e) => setNewRule(e.target.value)} />
      <button onClick={addRule}>Add Rule</button>

      {rules.map((rule, i) => (
        <div key={i}>
          <h3>{rule.ruleName}</h3>
          <p>{rule.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Rules;
