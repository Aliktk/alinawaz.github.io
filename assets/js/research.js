/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Inscanner: Dual-Phase Detection and Classification of Auxiliary Insulation Using YOLOv8 Models",
    authors: "Youngtae Kim, Soonju Jeong, Sardar Arslan, Dhananjay Agnihotri, Yahya Ahmed, Ali Nawaz, Jinhee Song, Hyewon Kim",
    conferences: "arXiv preprint arXiv:2502.18871",
    researchYr: 2025,
    citebox: "popup0",
    image: "assets/images/research-page/inscanner.png",
    citation: {
      vancouver:
        'Youngtae Kim, Soonju Jeong, Sardar Arslan, Dhananjay Agnihotri, Yahya Ahmed, Ali Nawaz, Jinhee Song, Hyewon Kim. "Inscanner: Dual-Phase Detection and Classification of Auxiliary Insulation Using YOLOv8 Models," arXiv preprint arXiv:2502.18871, 2025.',
    },
    abstract:
      "This study proposes a two-phase methodology for detecting and classifying auxiliary insulation in structural components. In the detection phase, a YOLOv8x model is trained on a dataset of complete structural blueprints, each annotated with bounding boxes indicating areas that should contain insulation. In the classification phase, these detected insulation patches are cropped and categorized into two classes: present or missing. These are then used to train a YOLOv8x-CLS model that determines the presence or absence of auxiliary insulation. Preprocessing steps for both datasets included annotation, augmentation, and appropriate cropping of the insulation regions. The detection model achieved a mean average precision (mAP) score of 82%, while the classification model attained an accuracy of 98%.",
    absbox: "absPopup0",
    paper_link: "https://arxiv.org/abs/2502.18871",
  },
  {
    title: "Weakly-Supervised Region Proposals for Chest-Xray Disease Localization and Classification",
    authors: "Ali Nawaz, Syed Muhammad Anwar, Javed Ali Khan",
    conferences: "IEEE Transactions on Medical Imaging (T-MI) - Submitted 2023",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/chest-xray.png",
    citation: {
      vancouver:
        'Nawaz, Ali et al., "Weakly-Supervised Region Proposals for Chest-Xray Disease Localization and Classification," IEEE Transactions on Medical Imaging, 2023. (Submitted)',
    },
    abstract:
      "This research presents a novel weakly-supervised deep learning approach for automatic disease localization and classification in chest X-ray images. Our method leverages region proposal networks to identify and classify multiple thoracic diseases without requiring pixel-level annotations. The framework achieves state-of-the-art performance on benchmark datasets including MIMIC-CXR and VinDr-PCXR, demonstrating significant improvements in both localization accuracy and classification performance compared to existing methods.",
    absbox: "absPopup1",
    paper_link: null,
  },
  {
    title: "Melanoma Detection Using a Deep Learning Approach",
    authors: "Sohail Manzoor, Huma Qayyum, Farman Hassan, Asad Ullah, Ali Nawaz, Auliya Ur Rahman",
    conferences: "International Journal of Innovations in Science & Technology (IJIST)",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/melanoma.png",
    citation: {
      vancouver:
        'Manzoor, Sohail et al., "Melanoma Detection Using a Deep Learning Approach," International Journal of Innovations in Science & Technology, vol. 4, no. 1, pp. 222–232, 2022. DOI: https://doi.org/10.33411/ijist/2022040117',
    },
    abstract:
      "Melanoma is a skin lesion disease; it is a skin cancer that is caused by uncontrolled growth in melanocytic tissues. Damaged cells can cause damage to nearby cells and consequently spreads cancer in other parts of the body. The aim of this research is the early detection of Melanoma disease, many researchers have already struggled and achieved success in detecting melanoma with different values for their evaluation parameters, they used different machine learning as well as deep learning approaches, and we applied deep learning approach for Melanoma detection, we used publicly available dataset for experimentation purpose. We applied deep learning algorithms ResNet50 and VGG16 for Melanoma detection; the accuracy, precision, recall, Jaccard index, and dice co-efficient of our proposed model are 92.3%, 93.3%, 90%, 9.98%, and 97.7%, respectively.",
    absbox: "absPopup2",
    paper_link: "https://journal.50sea.com/index.php/IJIST/article/view/191",
  },
  {
    title: "Mortality Prediction in ICU Patients Using Machine Learning Models",
    authors: "Fawad Ahmad, Huma Ayub, Rehan Liaqat, Akhyar Ali Khan, Ali Nawaz, Babar Younis",
    conferences: "19th International Bhurban Conference on Applied Sciences and Technology (IBCAST)",
    researchYr: 2021,
    citebox: "popup3",
    image: "assets/images/research-page/icu.png",
    citation: {
      vancouver:
        'Ahmad, Fawad et al., "Mortality Prediction in ICU Patients Using Machine Learning Models," 2021 International Bhurban Conference on Applied Sciences and Technologies (IBCAST), 2021, pp. 1-5, DOI: 10.1109/IBCAST51254.2021.9393012',
    },
    abstract:
      "Effective utilization of limited intensive care unit (ICU) allocations is a challenging task for medical experts to save precious human lives. The prolonged ICU stay of relatively secure patients and patients with low chances of recovery can cause life-threatening effects on patients waiting for ICU accommodation. Machine learning-based techniques for early prediction of mortality can help in this regard. This paper presents two mortality prediction models using the support vector machine (SVM) and linear discriminant analysis. The proposed models use clinical data of the ICU patients for early prediction of mortality. Distribution filtering is performed using the chi-square distribution during pre-processing. A subset of the publicly available Medical Information Mart for Intensive Care (MIMIC-III v1.4) dataset is used for the evaluation of the proposed models.",
    absbox: "absPopup3",
    paper_link: "https://ieeexplore.ieee.org/abstract/document/9393012",
  },
  {
    title: "Optimized Prediction Model for Type 2 Diabetes Mellitus Using Gradient Boosting Algorithm",
    authors: "Akhyar Ali Khan, Huma Qayyum, Rehan Liaqat, Fawad Ahmad, Ali Nawaz, Babar Younis",
    conferences: "2021 Mohammad Ali Jinnah University International Conference on Computing (MAJICC)",
    researchYr: 2021,
    citebox: "popup4",
    image: "assets/images/research-page/diabetes.png",
    citation: {
      vancouver:
        'Khan, Akhyar Ali et al., "Optimized Prediction Model for Type 2 Diabetes Mellitus Using Gradient Boosting Algorithm," 2021 Mohammad Ali Jinnah University International Conference on Computing (MAJICC), 2021, pp. 1-5, DOI: 10.1109/MAJICC53071.2021.9526257',
    },
    abstract:
      "Diabetes is a growing disease which has approximately affected 381 million people over the globe. Among diabetic patients, 30% of the adult population is diagnosed with Type 2 Diabetes Mellitus (T2DM). Predicting T2DM at early stages can help avoid serious complications at later stages. Data mining (DM) and machine learning (ML) based techniques are gaining popularity in disease diagnosis, reasons discovery, and decision making. Various research studies using DM are available in the literature to predict diabetes but there is room to improve the performance. In this study, a gradient boosting algorithm is proposed for the prediction of T2DM. We have used the PIMA Indian Diabetes dataset collected by an American institute UCI for analyzing our prediction model with 10-fold cross-validation. Our proposed model exhibits better performance as compared to various other models proposed in the literature.",
    absbox: "absPopup4",
    paper_link: "https://ieeexplore.ieee.org/abstract/document/9526257",
  },
  {
    title: "Deep Convolutional Neural Network-Based Classification of Alzheimer's Disease Using MRI Data",
    authors: "Ali Nawaz, Syed Muhammad Anwar, Rehan Liaqat, Javid Iqbal, Ulas Bagci, Muhammad Majid",
    conferences: "23rd International Multitopic Conference (IEEE INMIC)",
    researchYr: 2020,
    citebox: "popup5",
    image: "assets/images/research-page/alzheimer.png",
    citation: {
      vancouver:
        'Nawaz, Ali et al., "Deep Convolutional Neural Network based Classification of Alzheimer\'s Disease using MRI Data," 2020 IEEE 23rd International Multitopic Conference (INMIC), 2020, pp. 1-5, DOI: 10.1109/INMIC50486.2020.9318172',
    },
    abstract:
      "Alzheimer's disease (AD) is a progressive and incurable neurodegenerative disease which destroys brain cells and causes loss to patient's memory. Early detection can prevent the patient from further damage to the brain cells and hence avoid permanent memory loss. In the past few years, various automatic tools and techniques have been proposed for the diagnosis of AD. Several methods focus on fast, accurate, and early detection of the disease to minimize the loss to a patient's mental health. Although machine learning and deep learning techniques have significantly improved medical imaging systems for AD by providing diagnostic performance close to the human level. But the main problem faced during multi-class classification is the presence of highly correlated features in the brain structure. In this paper, we have proposed a smart and accurate way of diagnosing AD based on a two-dimensional deep convolutional neural network (2D-DCNN) using an imbalanced three-dimensional MRI dataset. Experimental results on Alzheimer's Disease Neuroimaging Initiative magnetic resonance imaging (MRI) dataset confirms that the proposed 2D-DCNN model is superior in terms of accuracy, efficiency, and robustness. The model classifies MRI into three categories: AD, mild cognitive impairment, and normal control; and has achieved 99.89% classification accuracy with imbalanced classes. The proposed model exhibits noticeable improvement in accuracy as compared to state-of-the-art methods.",
    absbox: "absPopup5",
    paper_link: "https://ieeexplore.ieee.org/abstract/document/9318172",
  },
  {
    title: "Ordinary Learning Method for Heart Disease Detection Using Clinical Data",
    authors: "Javid Iqbal, Muhmmad Munwar Iqbal, Umair Khadam, Ali Nawaz",
    conferences: "3rd International Conference on Computing, Mathematics and Engineering Technologies (iCoMET)",
    researchYr: 2020,
    citebox: "popup6",
    image: "assets/images/research-page/heart.png",
    citation: {
      vancouver:
        'Iqbal, Javid et al., "Ordinary Learning Method for Heart Disease Detection using Clinical Data," 2020 3rd International Conference on Computing, Mathematics and Engineering Technologies (iCoMET), 2020, pp. 1-6, DOI: 10.1109/iCoMET48670.2020.9074056',
    },
    abstract:
      "Heart diseases are one of the major causes of human deaths today. About 610000 human beings expire annually in the United States due to this fatal disease and the condition is more severe in the underdeveloped countries lacking medical experts. Accurate detection of heart disease in a human being can be helpful in proper medication against this lethal disease and considerably reduce this alarming death rate. Data mining and machine learning techniques are being widely used for medical diagnosis these days. This research paper employs Ordinary Learning Method for the accurate detection of heart disease using clinical data. The proposed method is tested on the Standard UCI(University of California, Irvine) Cleveland Heart Disease dataset using 14 attributes. The achieved accuracy of the proposed method is 98.4615% which is compared with other states of the art techniques such as C5.0 decision trees, Support vector machine, KNN and Neural Network. Comparison results show that the proposed OLM technique outperforms the previous data mining techniques proposed in literature for the detection of heart disease.",
    absbox: "absPopup6",
    paper_link: "https://ieeexplore.ieee.org/abstract/document/9074056",
  },
];
      vancouver:
        'M. H. Farooq Butt, J. P. Li and T. Saboor, "A Tunable and Explainable Attributes (TEA) for Recommendation System," 2020 17th International Computer Conference on Wavelet Active Media Technology and Information Processing (ICCWAMTIP), 2020, pp. 39-43, doi: 10.1109/ICCWAMTIP51612.2020.9317519.',
    },
    abstract:
      "Recommender system in information retrieval systems recommends relevant items to consumers by inspecting the consumer's preferences and objective behaviours. We received recommendations daily regarding what to take in as food, buy, and choices about the wear trends. However, we can understand our recommendations, and even less, we can tune our preferences efficiently. One main concern is those undesired or irrelevant recommendations, not only wasting our time, but they also cost media companies millions of dollars every year. Considering this issue, we proposed a tunable and explainable recommendation system where the attributes that determined the recommendations are explainable and tunable for every individual consumer. Irrelevant recommendations waste the consumer's time and the company's money, but if we put the power of the recommendations in the consumer's hands, we have a win-win situation. The suggested method addresses recommendation algorithms issues, which creates negative feedback loops and allows consumers to be aware of the profile they are building and tune it to see the content that interests them most.",
    absbox: "absPopup2",
  },
  {
    title: "A Novel Recommender Model Using Trust Based Networks",
    authors:
      "Ali Nawaz, Xinyou Zhang, Ghufran Ahmad Khan, Andleeb Masood, Muhammad Adnan Farooq Butt, Otabek Khudayberdiev",
    conferences:
      "2019 16th International Computer Conference on Wavelet Active Media Technology and Information Processing",
    researchYr: 2019,
    citebox: "popup1",
    image: "assets/images/research-page/novel.png",
    citation: {
      vancouver:
        'M. H. Farooq Butt, X. Zhang, G. A. Khan, A. Masood, M. A. Farooq Butt and O. Khudayberdiev, "A Novel Recommender Model Using Trust Based Networks," 2019 16th International Computer Conference on Wavelet Active Media Technology and Information Processing, 2019, pp. 81-84, doi: 10.1109/ICCWAMTIP47768.2019.9067723.',
    },
    abstract:
      "Recommended systems are highly rated recently by online users in social networking. In general, recommendation model made by existing algorithms are not reliable because these recommendations did not consider the trust factor between active users and nearest neighbors in social networks services. In order to solve this problem, new methods have been suggested based on trust-based networks with missing connections among users and elimination of cold start scenario. In our study, experiments are conducted on publicly available datasets to validate our algorithm. Through experimental results, our model is proven more robust, efficient in execution and more precise.",
    absbox: "absPopup1",
  },

  {
    title:
      "Fire detection in Surveillance Videos using a combination with PCA and CNN",
    authors: "Otabek Khudayberdiev, Ali Nawaz",
    conferences:
      "Academic Journal of Computing & Information Science",
    researchYr: 2020,
    citebox: "popup3",
    image: "assets/images/research-page/fire.png",
    citation: {
      vancouver:
        "Otabek Khudayberdiev, Ali Nawaz. Fire detection in Surveillance Videos using a combination with PCA and CNN. Academic Journal of Computing & Information Science (2020), Vol. 3, Issue 3: 27-33. https://doi.org/10.25236/AJCIS.2020.030304.",
    },
    abstract:
      "This paper proposes a novel approach to early fire detection system from closed-circuit television (CCTV) using combination Principal Component Analysis (PCA) and Convolutional Neural Networks (CNN). It takes full advantage of the existing traditional methods like color or motional characteristics information of fire. However, CNN based fire detection system needs more computational requirements, high memory and time, in this paper, we propose energy-friendly CNN architecture for fire detection deep neural networks, inspired by MobileNet. The main role of PCA is to perform feature extraction of row data and then send it to CNN architecture. The experimental results on benchmark fire datasets reveal that the proposed method can achieve better classification performance and indicates that using CNN to detect fire in video captures is an effective way.",
    absbox: "absPopup3",
  },

  // {
  //   title:
  //     "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
  //   authors:
  //     "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup4",
  //   image: "assets/images/research-page/dialogueState.png",
  //   citation: {
  //     vancouver:
  //       "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 4",
  //   absbox: "absPopup4",
  // },

  // {
  //   title: "Dual Super-Resolution Learning for Semantic Segmentation",
  //   authors: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup5",
  //   image: "assets/images/research-page/semanticSegmentation.png",
  //   citation: {
  //     vancouver:
  //       "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 5",
  //   absbox: "absPopup5",
  // },

  // {
  //   title: "Deep Unfolding Network for Image Super-Resolution",
  //   authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup6",
  //   image: "assets/images/research-page/deepNetwork.png",
  //   citation: {
  //     vancouver:
  //       "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 6",
  //   absbox: "absPopup6",
  // },

  // {
  //   title:
  //     "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
  //   authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup7",
  //   image: "assets/images/research-page/imageDecomposition.png",
  //   citation: {
  //     vancouver:
  //       "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 7",
  //   absbox: "absPopup7",
  // },
  // {
  //   title:
  //     "Forward and Backward Information Retention for Accurate Binary Neural Networks",
  //   authors:
  //     "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup8",
  //   image: "assets/images/research-page/neuralNetworks.jpg",
  //   citation: {
  //     vancouver:
  //       "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 8",
  //   absbox: "absPopup8",
  // },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      paper_link,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    ${paper_link ? `<a href="${paper_link}" target="_blank" rel="noopener noreferrer" class="paperTitle"> ${title} <i class="fas fa-external-link-alt" style="font-size:0.8em;margin-left:5px"></i></a>` : `<a href="#0" class="paperTitle"> ${title} </a>`}
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                        ${paper_link ? `<a href="${paper_link}" target="_blank" rel="noopener noreferrer" class="button button-accent button-small text-right button-abstract" style="margin-left:5px;text-decoration:none">
                            VIEW PAPER
                        </a>` : ''}
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
