AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "AURA & LEAH - Self-Healing IT Platform",
    cardImage: "assets/images/real.png",
    description: "🤖 Revolutionary enterprise AI platform: AURA (desktop agent) + LEAH (Azure OpenAI backend). Features: LangGraph agents with 30+ tools, vector search (Azure AI), correlation engine (Z-score + FDR), adaptive learning from technician feedback, PostgreSQL LISTEN/NOTIFY workflow. Autonomous detection, diagnosis & resolution with intelligent rollback. Real-time WebSocket communication, customer portal (Next.js), 4-trigger learning system. Production-grade self-healing for Windows fleets.",
    tagimg: "https://img.icons8.com/color/96/microsoft.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Mynatek - Hospital Cleaning Verification System",
    cardImage: "assets/images/mynatek.png",
    description: "🏥 Revolutionary healthcare AI combining ST-GCN pose estimation + YOLOv11 segmentation for real-time hygiene monitoring. Edge-deployed system with custom action recognition, automated surface detection & comprehensive training pipelines. Industry-leading accuracy for patient safety.",
    tagimg: "https://img.icons8.com/color/96/pytorch.png",
    Previewlink: "https://github.com/Aliktk/mynatek-hospital-cleaning",
    Githublink: "https://github.com/Aliktk/mynatek-hospital-cleaning",
  },
  {
    title: "AutoScanX - Real-Time ANPR System",
    cardImage: "assets/images/project-page/anpr.jpg",
    description: "🚗 High-performance ANPR system processing multi-lane traffic at 60+ FPS. Leverages PaddleOCR + OpenCV for IR camera feeds with advanced preprocessing. Handles moving vehicles, varying angles & weather conditions with 98%+ accuracy.",
    tagimg: "https://img.icons8.com/color/96/opencv.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Subang Fire Department 3.0 - Civil Engineering AI",
    cardImage: "assets/images/project-page/subang.png",
    description: "🏗️ Government-grade AI for Subang Fire Department, South Korea. Automates blueprint analysis using SAM2 segmentation + YOLOv8 detection for building approvals. Features: automatic symbol counting, area calculation, floor detection & Template Matching. Processes 1000+ drawings daily for fire safety compliance.",
    tagimg: "https://img.icons8.com/color/96/artificial-intelligence.png",
    Previewlink: "https://github.com/Aliktk/sobang-blueprint-analyzer",
    Githublink: "https://github.com/Aliktk/sobang-blueprint-analyzer",
  },
  {
    title: "PointChecker - LLM Document Intelligence",
    cardImage: "assets/images/pointchecker.png",
    description: "📄 Enterprise RAG system with multi-modal document processing. Integrates Llamaparse, OpenAI GPT-4, Gemini Flash 2.0, Marker, Docling & Cohere Rerank 3.5. Automated citation extraction, semantic search & structured data extraction. Legal-grade accuracy.",
    tagimg: "https://img.icons8.com/color/96/chatgpt.png",
    Previewlink: "https://www.pointchecker.ai/",
    Githublink: "https://github.com/Aliktk/pointchecker-rag",
  },
  {
    title: "Sahafat (Media Content Analysis) - Intelligence Platform",
    cardImage: "assets/images/project-page/media content analysis.jpg",
    description: "📺 Real-time media intelligence system monitoring 64+ TV channels + 50+ newspapers + social media. Features: low-latency streaming, multilingual OCR, sentiment analysis, NLP summarization, Elasticsearch integration. Clip Factory for instant video extraction. 30-day video archive.",
    tagimg: "https://img.icons8.com/color/96/python.png",
    Previewlink: "",
    Githublink: "https://github.com/Aliktk/media_content_analysis",
  },
  {
    title: "Chest X-ray Disease Detection & Localization",
    cardImage: "assets/images/project-page/chest-xray.png",
    description: "🔬 Novel weakly-supervised deep learning framework for multi-disease detection in chest X-rays. Trained on MIMIC-CXR + VinDr-PCXR datasets. Region proposal networks achieve SOTA localization without pixel-level annotations. Published in IEEE T-MI (2023).",
    tagimg: "https://img.icons8.com/color/96/pytorch.png",
    Previewlink: "https://xylexa.ai/xycad-cxr/",
    Githublink: "",
  },
  {
    title: "XyCAD-MMG - Breast Cancer Detection AI",
    cardImage: "assets/images/project-page/xycad.png",
    description: "🎗️ Clinical-grade mammography analysis system (XyCAD-MMG by Xylexa). Deep learning for lesion detection, classification & localization of both mass and calcifications. FDA 510(k) pending. Boosts radiologist accuracy by 19%, reduces interpretation time by 25%. Acts as independent/concurrent reader with 95%+ sensitivity.",
    tagimg: "https://img.icons8.com/color/96/tensorflow.png",
    Previewlink: "https://xylexa.ai/xycad-mmg/",
    Githublink: "",
  },
  {
    title: "S4 Smart Surveillance Security System",
    cardImage: "assets/images/project-page/s4 Smart Surveillance Security System.jpg",
    description: "🎥 Advanced surveillance system with YOLOv8/v10 real-time detection. Implements Defense-GAN for adversarial attack prevention. Multi-camera support, person re-identification & behavior analysis. Robust against lighting variations & occlusions. Edge-deployable.",
    tagimg: "https://img.icons8.com/color/96/security-checked.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Print Media Intelligence Scraper",
    cardImage: "assets/images/project-page/print media scrapper.jpg",
    description: "📰 Distributed web scraping system for 50+ news sources (local & international). Features: anti-bot detection bypass, Elasticsearch indexing, e-newspaper PDF analysis, automated scheduling & data deduplication. Processes 10,000+ articles daily.",
    tagimg: "https://img.icons8.com/color/96/python.png",
    Previewlink: "https://github.com/Aliktk/print_media_scrappers",
    Githublink: "https://github.com/Aliktk/print_media_scrappers",
  },
  {
    title: "Bird Species Recognition - Wildlife AI",
    cardImage: "assets/images/project-page/bird voice.png",
    description: "🦅 Multi-modal bird classification system using Faster R-CNN, ResNet50 & VGG19. Trained on Xeno-Canto audio-visual dataset. Recognizes 55 species with audio+visual fusion. Real-time detection for wildlife conservation & biodiversity monitoring.",
    tagimg: "https://img.icons8.com/color/96/pytorch.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Image Forgery Detection - Digital Forensics",
    cardImage: "assets/images/project-page/image forgery.png",
    description: "🔍 Advanced forensic system detecting copy-move manipulations. Implements SIFT, SURF, IHC & AKAZE feature extraction. Identifies cloned regions, rotation, scaling & JPEG compression. High precision for legal & media verification applications.",
    tagimg: "https://img.icons8.com/color/96/opencv.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Alzheimer's Detection - Neuroimaging AI",
    cardImage: "assets/images/project-page/alzheimer.jpg",
    description: "🧬 Deep CNN for Alzheimer's early detection using brain MRI. Multi-stage classification (Normal/MCI/AD). 2D & 3D imaging analysis with spatial-temporal features. Master's thesis project - Published IEEE INMIC 2020. Clinical collaboration validated.",
    tagimg: "https://img.icons8.com/color/96/tensorflow.png",
    Previewlink: "",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / contain no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
