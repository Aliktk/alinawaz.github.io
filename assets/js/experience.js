AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Founder & CEO 🚀",
    cardImage: "https://img.icons8.com/color/96/artificial-intelligence.png",
    place: "PAK-AI (Founder) | Pakistan",
    time: "(June 2026 - Present)",
    desp: "<li>Founded <strong>PAK-AI</strong>, an AI company delivering both custom AI/ML solutions for clients and in-house AI products</li><li>Lead overall technical, product & business strategy — from R&D and architecture to delivery and team building</li><li>Specialize in Computer Vision, NLP, Generative AI, Agentic AI, LLMs & RAG pipelines for real-world enterprise use cases</li><li>Build production-grade AI systems end to end: data pipelines, model training/fine-tuning, deployment & MLOps</li><li>Drive client engagements, partnerships and the vision for scalable, impactful AI solutions</li>"
  },
  {
    title: "Senior AI/ML Engineer 🚀",
    cardImage: "assets/images/experience-page/invozone.png",
    place: "Invozone | Johar Town Lahore (Remote)",
    time: "(April 2025 - May 2026)",
    desp: "<li><strong>L34H Platform:</strong> Architected enterprise AI automation using Azure OpenAI + FastAPI + PostgreSQL with intelligent IT issue resolution & rollback capabilities</li><li><strong>Mynatek Flagship:</strong> Led hospital cleaning verification system combining ST-GCN pose estimation + YOLOv11 segmentation for real-time hygiene monitoring on edge devices</li><li><strong>AutoScanX ANPR:</strong> Built high-performance license plate recognition system for multi-lane traffic using PaddleOCR + OpenCV at 60+ FPS</li><li>Implemented LangGraph-based conversational AI interfaces with WebSocket real-time communication</li><li>Developed comprehensive training pipelines with data augmentation, annotation tools & visualization modules</li>"
  },
  {
    title: "Senior Computer Vision Engineer 🎯",
    cardImage: "assets/images/experience-page/doaz_logo.jpg",
    place: "doAZ | Gangnam-gu, Seoul, South Korea (Remote)",
    time: "(Oct 2024 - March 2025)",
    desp: "<li><strong>Sobang 3.0 Government System:</strong> Delivered production-ready blueprint analyzer for South Korean building approvals using SAM2 + YOLOv8 - processing 1000+ drawings daily</li><li><strong>PointChecker RAG System:</strong> Built enterprise document intelligence platform with Llamaparse, GPT-4, Gemini Flash 2.0, Marker, Docling & Cohere Rerank 3.5</li><li>Developed custom Template Matching annotator for blueprint floor dataset creation using Roboflow</li><li>Implemented automatic segmentation, area calculation & floor detection with legal-grade accuracy</li><li>Researched GAN-based background removal + Real-ESRGAN image restoration for blueprint clarity enhancement</li>"
  },
  {
    title: "Lead AI Engineer 💡",
    cardImage: "assets/images/experience-page/horizon.png",
    place: "Horizon Tech Services | NSTP, NUST Islamabad",
    time: "(Dec 2023 - Sep 2024)",
    desp: "<li><strong>Media Intelligence Platform:</strong> Led comprehensive AI system monitoring 64+ TV channels + 50+ newspapers + social media with Elasticsearch integration</li><li><strong>Live Streaming Infrastructure:</strong> Built low-latency streaming system (UDP/TCP/HLS) with 30-day video backup & Clip Factory for real-time OCR-based clipping</li><li><strong>ML Pipeline Development:</strong> Deployed multilingual transcription, translation, OCR, text classification & sentiment analysis using Hugging Face + OpenAI</li><li>Directed Agile/Scrum teams in Jira delivering tailored AI solutions to Fortune 500 clients</li><li>Containerized applications with Docker for seamless multi-platform deployment on HPC clusters</li>"
  },
  {
    title: "AI Engineer 🔬",
    cardImage: "assets/images/experience-page/horizon.png",
    place: "Horizon Tech Services | NSTP, NUST Islamabad",
    time: "(July 2022 - Dec 2023)",
    desp: "<li>Conducted cutting-edge R&D in Deep Learning & NLP for sentiment analysis, text translation & news classification</li><li>Enhanced smart surveillance systems using YOLOv8/YOLOv10 with real-time object detection & tracking</li><li>Built bird species recognition system using Faster R-CNN + ResNet50 + VGG19, classifying 55 species from Xeno-Canto dataset</li><li>Developed RRDB models for image super-resolution & upscaling of low-resolution surveillance footage</li><li>Implemented Defense-GAN for adversarial attack prevention, enhancing AI model robustness</li><li>Created copy-move forgery detection using SIFT, SURF, IHC & AKAZE for digital forensics</li>"
  },
  {
    title: "AI Engineer - Medical Imaging 🏥",
    cardImage: "assets/images/experience-page/xylexa.png",
    place: "Xylexa | NSTP, NUST Islamabad",
    time: "(Dec 2020 - June 2022)",
    desp: "<li><strong>Breast Cancer CAD:</strong> Developed mammography analysis system using VinDr-Mammo dataset achieving 95%+ lesion detection sensitivity</li><li><strong>Chest X-ray AI:</strong> Created multi-disease classification & lung segmentation models for pneumonia detection using MIMIC-CXR & VinDr-PCXR</li><li>Collaborated with radiographers on medical image annotation & clinical validation - improving diagnostic precision by 30%</li><li>Enhanced DICOM/Nifti medical imaging pipelines with quality optimization & metadata standardization</li><li>Implemented incremental learning for continuous model improvement with new clinical data</li><li>Completed CITI Program certification for Human Research & medical imaging ethics</li>"
  },
  {
    title: "Research Assistant (Teaching Assistant) 📚",
    cardImage: "assets/images/experience-page/uet.jfif",
    place: "University of Engineering and Technology | Taxila",
    time: "(March 2019 - July 2020)",
    desp: "<li>Pioneered AI research at SIMPLE Lab focusing on brain MRI analysis for neurodegenerative diseases</li><li>Developed deep learning frameworks for Alzheimer's Disease early detection using 2D & 3D MRI imaging</li><li>Published research in IEEE INMIC 2020 on CNN-based Alzheimer's classification</li><li>Specialized in medical image preprocessing, feature extraction & spatial-temporal analysis techniques</li><li>Explored innovative neuroimaging technologies & their integration with state-of-the-art AI architectures</li><li>Mentored undergraduate students in machine learning & computer vision coursework</li>"
  },
  {
    title: "ICT Instructor & NIP Intern 👨‍🏫",
    cardImage: "https://img.icons8.com/color/96/training.png",
    place: "Cambridge Model College | Karak, KPK (National Internship Program)",
    time: "(March 2017 - March 2018)",
    desp: "<li>Participated in the National Internship Program (NIP) in collaboration with the KPK IT Board, Peshawar, contributing to software industry projects</li><li>Served as Senior ICT Instructor, teaching computer science and overseeing the computer labs at Cambridge Model College, Karak</li><li>Mentored students in fundamental programming and IT skills</li>"
  },
  {
    title: "Graphic Design Intern - KP IT Board 🎨",
    cardImage: "https://img.icons8.com/color/96/design.png",
    place: "DYNIMAX Intermedia | Islamabad, Pakistan",
    time: "(Jan 2017 - June 2017)",
    desp: "<li>Selected for the competitive KP IT Board Internship Program</li><li>Gained hands-on mastery of graphic design tools: Photoshop, Illustrator, Corel Draw, Sony Vegas & Canva</li><li>Built practical skills in graphic design, video editing, photography and 2D/3D animation</li>"
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img loading="lazy" src="${cardImage}" class="featured-image" style="width: 100%; height: 200px; object-fit: contain; padding: 10px; background: white;"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Awards and Achievements Section

const awardssection = document.querySelector(".awards-section");
const awards = [
  {
    title: "Prime Minister Laptop Scheme Award 🏅",
    image: "assets/images/Laptop-Scheme.webp",
    description: "Recognized for ranking in the top ten in Software Engineering at the University of Science and Technology Bannu. This prestigious national award honors academic excellence.",
  },
  {
    title: "Diya Foundation Scholarships 🎓",
    image: "assets/images/diya scholership.jpg",
    description: "Awarded for academic merit and financial need during bachelor's studies. Multiple scholarships received for consistent academic performance throughout undergraduate program.",
  },
  {
    title: "Best Student Award ⭐",
    image: "assets/images/best student.jpg",
    description: "Honored for excellence in academics and extracurricular activities. Recognized as an outstanding student demonstrating leadership and academic prowess.",
  },
  {
    title: "Fuji Foundation Scholarship 🌟",
    image: "assets/images/fuji.jpg",
    description: "Granted to beneficiaries for outstanding performance. Competitive scholarship awarded for exceptional academic achievements and potential.",
  },
];

// Shared card template for the Awards and Leadership sections (identical markup).
const renderInfoCards = (items) =>
  items
    .map(
      ({ title, image, description }) => `
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">

      <img loading="lazy" src="${image}" class="card-img" style="border-radius:10px; width: 100%; height: 250px; object-fit: contain; padding: 10px; background: white;">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>

      </div>
      `
    )
    .join("");

const showAwards = () => {
  if (awardssection) awardssection.innerHTML = renderInfoCards(awards);
};
document.addEventListener("DOMContentLoaded", showAwards);

// Leadership and Volunteering Section

const leadershipsection = document.querySelector(".leadership-section");
const leadership = [
  {
    title: "AI Seminars Leader 🎤",
    image: "assets/images/AI Seminars.jpg",
    description: "Spearheaded sessions at universities on AI, Machine Learning, and Data Science, engaging students and professionals across multiple institutions. Conducted 20+ workshops on emerging AI technologies.",
  },
  {
    title: "Online Tutoring Volunteer 👨‍🏫",
    image: "assets/images/Online tutor.jpg",
    description: "Volunteered to mentor underprivileged students in tech education and career development, helping them transition into tech careers. Mentored 100+ students in AI/ML career paths.",
  },
  {
    title: "Community Leadership (550+ Students) 👥",
    image: "assets/images/kamyab jawan.jpg",
    description: "Directed a community of 550+ students, organizing workshops and coding sessions for skill enhancement and professional development. Built a thriving tech community.",
  },
  {
    title: "Opti Key Project 🔬",
    image: "assets/images/optikey.jpg",
    description: "Revolutionary project for blind persons to utilize technology, making digital interfaces accessible through innovative assistive technology. Transformative impact on accessibility.",
  },
  {
    title: "Bacteria Cell Counter 🧪",
    image: "assets/images/Bacteria Cell Counter.jpg",
    description: "Pioneering advancement in assistive technology for biotechnology, automating bacterial cell counting for research labs. Heralding advancements in lab automation.",
  },
];

const showLeadership = () => {
  if (leadershipsection) leadershipsection.innerHTML = renderInfoCards(leadership);
};
document.addEventListener("DOMContentLoaded", showLeadership);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  // {
  //   title: "GirlScript Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/1.jpg",
  //   description:
  //     "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img loading="lazy" src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section - Removed as not applicable

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img loading="lazy" src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
