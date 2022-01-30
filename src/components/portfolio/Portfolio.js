import React, {useState, useEffect} from 'react';
import './Portfolio.css'

function Portfolio() {
  const portfolio = [
    {
      name: "My best client",
      category: ["All", "HTML/CSS", "React JS"],
    },
    {
      name: "My Project",
      category: ["All", "HTML/CSS", "JavaScript"],
    },
    {
      name: "Its a Cool Website",
      category: ["All", "React JS"],
    },
    {
      name: "Some Amazing Projects",
      category: ["All", "WordPress", "others"],
    },
    {
      name: "Something More",
      category: ["All", "HTML/CSS", "React JS"],
    },
  ];

  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);
    const filtered = portfolio.map((portfolio) => ({
      ...portfolio,
      filtered: portfolio.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <div className="portfolio">
      <h1>What I have Done?</h1>
      <div className="portfolio__label">
        <a href="/#" active={filter === "All"} onClick={() => setFilter("All")}>
          All
        </a>
        <a
          href="/#"
          active={filter === "HTML/CSS"}
          onClick={() => setFilter("HTML/CSS")}
        >
          HTML/CSS
        </a>
        <a
          href="/#"
          active={filter === "JavaScript"}
          onClick={() => setFilter("JavaScript")}
        >
          JavaScript
        </a>
        <a
          href="/#"
          active={filter === "React JS"}
          onClick={() => setFilter("React JS")}
        >
          React JS
        </a>
        <a
          href="/#"
          active={filter === "WordPress"}
          onClick={() => setFilter("WordPress")}
        >
          WordPress
        </a>
        <a
          href="/#"
          active={filter === "Others"}
          onClick={() => setFilter("Others")}
        >
          Others
        </a>
      </div>
      <div className="portfolio__container">
        {projects.map((item) =>
          item.filtered === true ? <span key={item.name}>{item.name}</span> : ""
        )}
      </div>
    </div>
  );
}


export default Portfolio;
