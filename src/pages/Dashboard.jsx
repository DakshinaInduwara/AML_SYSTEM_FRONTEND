import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/fraud")
      .then(res => setNews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>📢 Fraud News</h1>
      {news.map((n, i) => (
        <div key={i}>
          <h3>{n.title}</h3>
          <p>{n.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
