AOS.init();

// Research Papers Section - Interactive Cards
const researchSection = document.querySelector(".research-cards-section");

const researchPapers = [
  {
    id: 1,
    title: "Inscanner: Dual-Phase Detection and Classification of Auxiliary Insulation Using YOLOv8 Models",
    authors: "Youngtae Kim, Soonju Jeong, Sardar Arslan, Dhananjay Agnihotri, Yahya Ahmed, Ali Nawaz, Jinhee Song, Hyewon Kim",
    conference: "arXiv preprint - Computer Vision and Pattern Recognition (cs.CV)",
    year: 2025,
    image: "assets/images/research-page/inteferenceNetwork.png",
    abstract: "This study proposes a two-phase methodology for detecting and classifying auxiliary insulation in structural components. In the detection phase, a YOLOv8x model is trained on a dataset of complete structural blueprints, each annotated with bounding boxes indicating areas that should contain insulation. In the classification phase, these detected insulation patches are cropped and categorized into two classes: present or missing. These are then used to train a YOLOv8x-CLS model that determines the presence or absence of auxiliary insulation. Preprocessing steps for both datasets included annotation, augmentation, and appropriate cropping of the insulation regions. The detection model achieved a mean average precision (mAP) score of 82%, while the classification model attained an accuracy of 98%. These findings demonstrate the effectiveness of the proposed approach in automating insulation detection and classification, providing a foundation for further advancements in this domain.",
    doi: "10.48550/arXiv.2502.18871",
    link: "https://arxiv.org/abs/2502.18871",
    publisher: "arXiv",
    citations: "Recent",
    views: "New Publication",
    accuracy: "82% mAP Detection, 98% Classification"
  },
  {
    id: 2,
    title: "Deep Convolutional Neural Network based Classification of Alzheimer's Disease using MRI Data",
    authors: "Ali Nawaz, Syed Muhammad Anwar, Rehan Liaqat, Javid Iqbal, Ulas Bagci, Muhammad Majid",
    conference: "2020 IEEE 23rd International Multitopic Conference (INMIC)",
    year: 2020,
    image: "assets/images/research-page/deepNetwork.png",
    abstract: "Alzheimer's disease (AD) is a progressive and incurable neurodegenerative disease which destroys brain cells and causes loss to patient's memory. Early detection can prevent the patient from further damage to the brain cells and hence avoid permanent memory loss. In the past few years, various automatic tools and techniques have been proposed for the diagnosis of AD. Several methods focus on fast, accurate, and early detection of the disease to minimize the loss to a patient's mental health. Although machine learning and deep learning techniques have significantly improved medical imaging systems for AD by providing diagnostic performance close to the human level. But the main problem faced during multi-class classification is the presence of highly correlated features in the brain structure. In this paper, we have proposed a smart and accurate way of diagnosing AD based on a two-dimensional deep convolutional neural network (2D-DCNN) using an imbalanced three-dimensional MRI dataset. Experimental results on Alzheimer's Disease Neuroimaging Initiative magnetic resonance imaging (MRI) dataset confirms that the proposed 2D-DCNN model is superior in terms of accuracy, efficiency, and robustness. The model classifies MRI into three categories: AD, mild cognitive impairment, and normal control; and has achieved 99.89% classification accuracy with imbalanced classes. The proposed model exhibits noticeable improvement in accuracy as compared to state-of-the-art methods.",
    doi: "10.1109/INMIC50486.2020.9318172",
    link: "https://ieeexplore.ieee.org/abstract/document/9318172",
    publisher: "IEEE",
    citations: "46+ Citations",
    views: "765+ Views",
    accuracy: "99.89% Accuracy"
  },
  {
    id: 3,
    title: "Ordinary Learning Method for Heart Disease Detection using Clinical Data",
    authors: "Javid Iqbal, Muhmmad Munwar Iqbal, Umair Khadam, Ali Nawaz",
    conference: "2020 3rd International Conference on Computing, Mathematics and Engineering Technologies (iCoMET)",
    year: 2020,
    image: "assets/images/research-page/mca.png",
    abstract: "Heart diseases are one of the major causes of human deaths today. About 610,000 human beings expire annually in the United States due to this fatal disease and the condition is more severe in the underdeveloped countries lacking medical experts. Accurate detection of heart disease in a human being can be helpful in proper medication against this lethal disease and considerably reduce this alarming death rate. Data mining and machine learning techniques are being widely used for medical diagnosis these days. This research paper employs Ordinary Learning Method for the accurate detection of heart disease using clinical data. The proposed method is tested on the Standard UCI (University of California, Irvine) Cleveland Heart Disease dataset using 14 attributes. The achieved accuracy of the proposed method is 98.4615% which is compared with other states of the art techniques such as C5.0 decision trees, Support vector machine, KNN and Neural Network. Comparison results show that the proposed OLM technique outperforms the previous data mining techniques proposed in literature for the detection of heart disease.",
    doi: "10.1109/iCoMET48670.2020.9074056",
    link: "https://ieeexplore.ieee.org/abstract/document/9074056",
    publisher: "IEEE",
    citations: "5+ Citations",
    views: "212+ Views",
    accuracy: "98.46% Accuracy"
  },
  {
    id: 4,
    title: "Optimized Prediction Model for Type 2 Diabetes Mellitus Using Gradient Boosting Algorithm",
    authors: "Akhyar Ali Khan, Huma Qayyum, Rehan Liaqat, Fawad Ahmad, Ali Nawaz, Babar Younis",
    conference: "2021 Mohammad Ali Jinnah University International Conference on Computing (MAJICC)",
    year: 2021,
    image: "assets/images/research-page/crossLingual.png",
    abstract: "Diabetes is a growing disease which has approximately affected 381 million people over the globe. Among diabetic patients, 30% of the adult population is diagnosed with Type 2 Diabetes Mellitus (T2DM). Predicting T2DM at early stages can help avoid serious complications at later stages. Data mining (DM) and machine learning (ML) based techniques are gaining popularity in disease diagnosis, reasons discovery, and decision making. Various research studies using DM are available in the literature to predict diabetes but there is room to improve the performance. In this study, a gradient boosting algorithm is proposed for the prediction of T2DM. We have used the PIMA Indian Diabetes dataset collected by an American institute UCI for analyzing our prediction model with 10-fold cross-validation. Our proposed model exhibits better performance as compared to various other models proposed in the literature. The proposed model can support medical experts in the decision-making and prediction of T2DM.",
    doi: "10.1109/MAJICC53071.2021.9526257",
    link: "https://ieeexplore.ieee.org/abstract/document/9526257",
    publisher: "IEEE",
    citations: "10+ Citations",
    views: "219+ Views",
    accuracy: "Superior Performance"
  },
  {
    id: 5,
    title: "Mortality Prediction in ICU Patients Using Machine Learning Models",
    authors: "Fawad Ahmad, Huma Ayub, Rehan Liaqat, Akhyar Ali Khan, Ali Nawaz, Babar Younis",
    conference: "2021 International Bhurban Conference on Applied Sciences and Technologies (IBCAST)",
    year: 2021,
    image: "assets/images/research-page/semanticSegmentation.png",
    abstract: "Effective utilization of limited intensive care unit (ICU) allocations is a challenging task for medical experts to save precious human lives. The prolonged ICU stay of relatively secure patients and patients with low chances of recovery can cause life-threatening effects on patients waiting for ICU accommodation. Machine learning-based techniques for early prediction of mortality can help in this regard. This paper presents two mortality prediction models using the support vector machine (SVM) and linear discriminant analysis. The proposed models use clinical data of the ICU patients for early prediction of mortality. Distribution filtering is performed using the chi-square distribution during pre-processing. A subset of the publicly available Medical Information Mart for Intensive Care (MIMIC-III v1.4) dataset is used for the evaluation of the proposed models. The problem of class imbalance is handled by synthetic minority oversampling technique. The comparison of obtained results is performed with existing SVM and multiple logistic regression models to show the effectiveness of the proposed models. The results of the study can be helpful for clinical experts for better decision making regarding the utilization of ICU allocations.",
    doi: "10.1109/IBCAST51254.2021.9393012",
    link: "https://ieeexplore.ieee.org/abstract/document/9393012",
    publisher: "IEEE",
    citations: "4+ Citations",
    views: "404+ Views",
    accuracy: "High Predictive Performance"
  },
  {
    id: 6,
    title: "Melanoma Detection Using a Deep Learning Approach",
    authors: "Sohail Manzoor, Huma Qayyum, Farman Hassan, Asad Ullah, Ali Nawaz, Auliya Ur Rahman",
    conference: "International Journal of Innovations in Science & Technology (IJIST)",
    year: 2022,
    image: "assets/images/research-page/imageDecomposition.png",
    abstract: "Melanoma is a skin lesion disease; it is a skin cancer that is caused by uncontrolled growth in melanocytic tissues. Damaged cells can cause damage to nearby cells and consequently spreads cancer in other parts of the body. The aim of this research is the early detection of Melanoma disease, many researchers have already struggled and achieved success in detecting melanoma with different values for their evaluation parameters, they used different machine learning as well as deep learning approaches, and we applied deep learning approach for Melanoma detection, we used publicly available dataset for experimentation purpose. We applied deep learning algorithms ResNet50 and VGG16 for Melanoma detection; the accuracy, precision, recall, Jaccard index, and dice co-efficient of our proposed model are 92.3%, 93.3%, 90%, 9.98%, and 97.7%, respectively. Our proposed algorithm can be used to increase chances of survival for patients and can save the money which is used for diagnosis and treatment of Melanoma every year.",
    doi: "10.33411/ijist/2022040117",
    link: "https://journal.50sea.com/index.php/IJIST/article/view/191",
    publisher: "IJIST",
    citations: "Open Access",
    views: "Full Text Available",
    accuracy: "92.3% Accuracy"
  }
];

const showResearchCards = () => {
  let output = "";
  researchPapers.forEach((paper) => {
    output += `
      <div class="card card1" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="margin: 20px 0;">
        <div class="row no-gutters">
          <div class="col-md-3">
            <img src="${paper.image}" class="card-img research-paper-img" alt="${paper.title}" style="height: 100%; object-fit: cover; border-radius: 10px 0 0 10px;">
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <a href="${paper.link}" target="_blank" class="paperTitle" style="text-decoration: none;">
                <h4 class="card-title" style="color: #bb86fc; font-weight: bold;">${paper.title}</h4>
              </a>
              <p class="card-text" style="font-size: 0.9rem; color: #888;"><strong>Authors:</strong> ${paper.authors}</p>
              <p class="card-text" style="font-size: 0.9rem;"><strong>${paper.publisher}</strong> | ${paper.conference} (${paper.year})</p>
              <div class="paper-metrics" style="margin: 10px 0;">
                <span class="badge badge-primary" style="margin-right: 10px; background: #bb86fc;">${paper.citations}</span>
                <span class="badge badge-success" style="margin-right: 10px; background: #4caf50;">${paper.views}</span>
                <span class="badge badge-info" style="background: #2196f3;">${paper.accuracy}</span>
              </div>
              <button class="button-abstract" onclick="toggleAbstract(${paper.id})" style="margin-top: 10px;">
                ABSTRACT <i class="fas fa-chevron-down" id="icon-${paper.id}"></i>
              </button>
              <a href="${paper.link}" target="_blank" class="button-abstract" style="background-color: #4caf50; margin-left: 10px;">
                VIEW PAPER <i class="fas fa-external-link-alt"></i>
              </a>
              <div id="abstract-${paper.id}" class="abstract-content" style="display: none; margin-top: 15px; padding: 15px; background: rgba(187, 134, 252, 0.1); border-radius: 8px; border-left: 4px solid #bb86fc;">
                <p style="text-align: justify; line-height: 1.6;">${paper.abstract}</p>
                <p style="margin-top: 10px;"><strong>DOI:</strong> <a href="https://doi.org/${paper.doi}" target="_blank" style="color: #bb86fc;">${paper.doi}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  researchSection.innerHTML = output;
};

// Toggle abstract function
function toggleAbstract(id) {
  const abstract = document.getElementById(`abstract-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  
  if (abstract.style.display === "none") {
    abstract.style.display = "block";
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  } else {
    abstract.style.display = "none";
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
}

document.addEventListener("DOMContentLoaded", showResearchCards);
