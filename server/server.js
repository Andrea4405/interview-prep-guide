const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const companyRequirements = {
  product: ["dsa", "system design", "dbms", "oop"],
  service: ["aptitude", "java", "sql", "communication"],
  startup: ["javascript", "react", "node", "api"]
};

const data = {
  roadmap: {
    product: [
      {
        title: "Data Structures & Algorithms",
        points: [
          "Arrays, Linked Lists, Stacks, Queues",
          "Binary Trees and Graphs",
          "Dynamic Programming",
          "Practice problems on LeetCode"
        ]
      },
      {
        title: "System Design",
        points: [
          "Scalability basics",
          "Design patterns",
          "Microservices vs Monolith",
          "Practice system design questions"
        ]
      },
      {
        title: "Core CS",
        points: [
          "DBMS concepts",
          "Operating Systems",
          "Computer Networks",
          "OOP principles"
        ]
      }
    ],

  service: [
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
      title: "Programming Basics",
      points: [
        "Java / Python fundamentals",
        "Basic coding problems",
        "Understanding algorithms",
        "Practice HackerRank problems"
      ]
    },
    {
      title: "Interview Preparation",
      points: [
        "HR interview questions",
        "Communication skills",
        "Group discussion practice",
        "Resume preparation"
      ]
    }
  ]
},
  questions: {
    dsa: [
    "Explain time complexity with examples.",
    "What is a binary search tree?",
    "Difference between stack and queue.",
    "How does quicksort work?"
  ],

    dbms: [
    "What is normalization?",
    "Explain ACID properties.",
    "Difference between SQL and NoSQL.",
    "What is indexing?"
  ],

    javascript: [
    "Explain closures in JavaScript.",
    "What is event delegation?",
    "Difference between var, let and const.",
    "What is async/await?"
  ],

    react: [
    "What are React hooks?",
    "Difference between state and props.",
    "Explain virtual DOM.",
    "What is useEffect?"
  ],

    python: [
    "What is a list in Python?",
    "What is the difference between list and tuple?",
    "Explain Python decorators.",
    "What is a lambda function in Python?",
    "What is the purpose of virtual environments?"
  ],
    java: [
    "What is JVM?",
    "Explain inheritance in Java.",
    "What is the difference between interface and abstract class?",
    "What is multithreading in Java?",
    "What is method overloading vs overriding?"
  ],
     web: [
    "What is the DOM?",
    "What is the difference between HTML and HTML5?",
    "Explain REST APIs.",
    "What is responsive design?",
    "What is the difference between var, let, and const?"
  ],
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

app.post("/api/data", (req, res) => {
  const { companyType, skills } = req.body;

  const requiredSkills = companyRequirements[companyType] || [];
  const studentSkills = skills ? skills.map((s) => s.toLowerCase()) : [];

  const missingSkills = requiredSkills.filter(
    (skill) => !studentSkills.includes(skill)
  );

  let suggestedQuestions = [];

  missingSkills.forEach((skill) => {
    if (data.questions[skill]) {
      suggestedQuestions = suggestedQuestions.concat(data.questions[skill]);
    }
  });

  res.json({
    roadmap: data.roadmap[companyType] || data.roadmap.product,
    questions: {
      technical: suggestedQuestions,
      hr: data.questions.hr
    },
    resources: data.resources
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});