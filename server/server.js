const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const data = {
  roadmap: [
    {
      title: "Aptitude",
      points: [
        "Quantitative aptitude",
        "Logical reasoning",
        "Verbal ability",
        "Daily mock tests"
      ]
    },
    {
      title: "Technical",
      points: [
        "Core CS subjects",
        "Programming concepts",
        "SQL and DBMS",
        "Projects and resume prep"
      ]
    },
    {
      title: "Interview",
      points: [
        "HR questions",
        "Technical questions",
        "Self introduction",
        "Company-specific prep"
      ]
    }
  ],
  questions: {
    technical: [
      "What is the difference between stack and queue?",
      "Explain DBMS normalization with an example.",
      "What is the difference between process and thread?",
      "What are the four pillars of OOP?",
      "What is the purpose of indexing in SQL?",
      "Explain time complexity of binary search.",
      "What is REST API and how does it work?"
    ],
    hr: [
      "Tell me about yourself.",
      "Why should we hire you?",
      "What are your strengths and weaknesses?",
      "Where do you see yourself in 5 years?",
      "Why do you want to join our company?",
      "Describe a challenge you faced and how you solved it."
    ]
  },
  resources: [
    { name: "DSA Practice", desc: "LeetCode, HackerRank, CodeStudio" },
    { name: "Aptitude", desc: "IndiaBix, Testbook, mock tests" },
    { name: "Core CS", desc: "DBMS, OS, CN, OOP short notes" },
    { name: "Resume", desc: "One-page ATS-friendly resume format" }
  ]
};

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});