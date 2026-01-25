AOS.init();

// Core Skills Categories
const skillsCategories = [
  {
    category: "Languages",
    icon: "fas fa-code",
    color: "#bb86fc",
    skills: ["C", "C++", "Python"]
  },
  {
    category: "AI & Machine Learning",
    icon: "fas fa-brain",
    color: "#6C63FF",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "LLM", "OpenAI"]
  },
  {
    category: "Frameworks",
    icon: "fas fa-layer-group",
    color: "#bb86fc",
    skills: ["Flask", "Fast API", "PyTorch", "TensorFlow"]
  },
  {
    category: "Front End",
    icon: "fas fa-palette",
    color: "#6C63FF",
    skills: ["HTML", "HTML5", "CSS", "Bootstrap"]
  },
  {
    category: "Databases",
    icon: "fas fa-database",
    color: "#bb86fc",
    skills: ["PostgreSQL", "SQLite"]
  },
  {
    category: "Cloud & Deployment",
    icon: "fas fa-cloud",
    color: "#6C63FF",
    skills: ["AWS EC2", "AWS (Intermediate)"]
  },
  {
    category: "Real-time Streaming",
    icon: "fas fa-video",
    color: "#bb86fc",
    skills: ["RTMP", "UDP", "TCP", "ffmpeg", "h264"]
  },
  {
    category: "Unit Testing",
    icon: "fas fa-vial",
    color: "#6C63FF",
    skills: ["Python Unit Test", "Pytest"]
  },
  {
    category: "APIs",
    icon: "fas fa-plug",
    color: "#bb86fc",
    skills: ["Fast API", "RESTful APIs"]
  },
  {
    category: "API Testing",
    icon: "fas fa-flask",
    color: "#6C63FF",
    skills: ["Thunder Client", "Postman"]
  },
  {
    category: "Research & Technical Writing",
    icon: "fas fa-file-alt",
    color: "#bb86fc",
    skills: ["MS 365", "Overleaf", "LaTeX"]
  },
  {
    category: "Operating Systems",
    icon: "fas fa-desktop",
    color: "#6C63FF",
    skills: ["Windows", "Linux", "Windows Servers"]
  },
  {
    category: "Project & Task Management",
    icon: "fas fa-tasks",
    color: "#bb86fc",
    skills: ["Jira", "Agile", "Scrum", "Trello"]
  },
  {
    category: "Graphic Designing",
    icon: "fas fa-paint-brush",
    color: "#6C63FF",
    skills: ["Photoshop", "Illustrator", "Lightroom", "CorelDraw", "Canva"]
  }
];

const techStackCards = document.querySelector(".techstack-box");

const displaySkillsCards = () => {
  const entireCardTemplate = skillsCategories.map((category)=> {
      return `        
    <div class="skill-category-card" data-aos="fade-up" data-aos-easing="ease-out" data-aos-delay="100" data-aos-duration="500"> 
        <div class="skill-card">
            <div class="skill-card-header">
                <i class="${category.icon}" style="color: ${category.color}; font-size: 2.5rem; margin-bottom: 15px;"></i>
                <h3 style="color: ${category.color}; font-weight: 700; font-size: 1.4rem; margin-bottom: 20px;">${category.category}</h3>
            </div>
            <div class="skill-card-body">
                <div class="skills-list">
                    ${category.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};

document.addEventListener("DOMContentLoaded", displaySkillsCards);
