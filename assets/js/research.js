/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
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
  },
  {
    title: "Melanoma Detection Using a Deep Learning Approach",
    authors: "Sohail Manzoor, Ali Nawaz, et al.",
    conferences: "International Journal of Innovations in Science & Technology (IJIST)",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/melanoma.png",
    citation: {
      vancouver:
        'Manzoor, Sohail et al., "Melanoma Detection Using a Deep Learning Approach," International Journal of Innovations in Science & Technology, 2022.',
    },
    abstract:
      "This study proposes a deep learning-based approach for automated melanoma detection from dermoscopic images. Using convolutional neural networks and transfer learning techniques, our model achieves high accuracy in distinguishing melanoma from benign skin lesions. The research contributes to early cancer detection and demonstrates the potential of AI in dermatological diagnostics.",
    absbox: "absPopup2",
  },
  {
    title: "Mortality Prediction in ICU Patients Using Machine Learning Models",
    authors: "Fawad Ahmad, Ali Nawaz, et al.",
    conferences: "19th International Bhurban Conference on Applied Sciences and Technology (IBCAST)",
    researchYr: 2021,
    citebox: "popup3",
    image: "assets/images/research-page/icu.png",
    citation: {
      vancouver:
        'Ahmad, Fawad et al., "Mortality Prediction in ICU Patients Using Machine Learning Models," IBCAST, 2021.',
    },
    abstract:
      "This research develops machine learning models for predicting mortality in intensive care unit (ICU) patients using clinical data. Multiple algorithms including Random Forest, XGBoost, and Neural Networks were evaluated on the MIMIC-III database. The models demonstrate high predictive accuracy and provide interpretable features for clinical decision support.",
    absbox: "absPopup3",
  },
  {
    title: "Optimized Prediction Model for Type 2 Diabetes Mellitus Using Gradient Boosting Algorithm",
    authors: "Khan, et al., Ali Nawaz",
    conferences: "Pak-Euro Journal on Medical and Life Sciences (MAJICC)",
    researchYr: 2021,
    citebox: "popup4",
    image: "assets/images/research-page/diabetes.png",
    citation: {
      vancouver:
        'Khan, et al., "Optimized Prediction Model for Type 2 Diabetes Mellitus Using Gradient Boosting Algorithm," MAJICC, 2021.',
    },
    abstract:
      "This work presents an optimized machine learning model for early prediction of Type 2 Diabetes Mellitus using gradient boosting algorithms. Feature engineering and hyperparameter optimization techniques are employed to enhance model performance. The proposed model achieves superior accuracy compared to traditional methods and provides clinically relevant insights for diabetes prevention.",
    absbox: "absPopup4",
  },
  {
    title: "Deep Convolutional Neural Network-Based Classification of Alzheimer's Disease Using MRI Data",
    authors: "Ali Nawaz, Syed Muhammad Anwar, Javed Ali Khan",
    conferences: "23rd International Multitopic Conference (IEEE INMIC)",
    researchYr: 2020,
    citebox: "popup5",
    image: "assets/images/research-page/alzheimer.png",
    citation: {
      vancouver:
        'Nawaz, Ali et al., "Deep Convolutional Neural Network-Based Classification of Alzheimer\'s Disease Using MRI Data," IEEE INMIC, 2020.',
    },
    abstract:
      "This paper proposes a deep convolutional neural network (DCNN) architecture for automated classification of Alzheimer's disease from brain MRI scans. The model employs advanced preprocessing techniques and data augmentation strategies to handle limited medical imaging datasets. Experimental results demonstrate that the proposed DCNN achieves high classification accuracy for distinguishing between different stages of Alzheimer's disease, offering potential for early diagnosis and treatment planning.",
    absbox: "absPopup5",
  },
  {
    title: "Ordinary Learning Method for Heart Disease Detection Using Clinical Data",
    authors: "Javid Iqbal, Ali Nawaz, et al.",
    conferences: "3rd International Conference on Computing, Mathematics and Engineering Technologies (iCoMET)",
    researchYr: 2020,
    citebox: "popup6",
    image: "assets/images/research-page/heart.png",
    citation: {
      vancouver:
        'Iqbal, Javid et al., "Ordinary Learning Method for Heart Disease Detection Using Clinical Data," iCoMET, 2020.',
    },
    abstract:
      "This research investigates the application of ordinary machine learning methods for detecting heart disease using clinical patient data. Various classification algorithms are evaluated and compared on benchmark cardiovascular disease datasets. The study provides insights into feature importance and demonstrates the effectiveness of traditional ML approaches in medical diagnosis applications.",
    absbox: "absPopup6",
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
                    <a href="#0" class="paperTitle"> ${title} </a> 
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
