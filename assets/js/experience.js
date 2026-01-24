AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Senior AI/ML Engineer 🚀",
    cardImage: "assets/images/experience-page/invozone.png",
    place: "Invozone | Johar Town Lahore (Remote)",
    time: "(April 2025 - Present)",
    desp: "<li><strong>L34H Platform:</strong> Architected enterprise AI automation using Azure OpenAI + FastAPI + PostgreSQL with intelligent IT issue resolution & rollback capabilities</li><li><strong>Mynatek Flagship:</strong> Led hospital cleaning verification system combining ST-GCN pose estimation + YOLOv11 segmentation for real-time hygiene monitoring on edge devices</li><li><strong>AutoScanX ANPR:</strong> Built high-performance license plate recognition system for multi-lane traffic using PaddleOCR + OpenCV at 60+ FPS</li><li>Implemented LangGraph-based conversational AI interfaces with WebSocket real-time communication</li><li>Developed comprehensive training pipelines with data augmentation, annotation tools & visualization modules</li>"
  },
  {
    title: "Senior Computer Vision Engineer 🎯",
    cardImage: "assets/images/experience-page/doaz.png",
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
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
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

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  // {
  //   title: "GirlScript Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/1.jpg",
  //   description:
  //     "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  // },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
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
