import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/fraud/news")
      .then(res => setNews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>🔍 Latest Fraud News</h1>
      <ul>
        {news.map((item, i) => (
          <li key={i}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
