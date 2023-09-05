/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [

  {
    title: "Intelligent Phishing Url Detection: A Solution Based On Deep Learning Framework",
    authors:
      "Ali Nawaz, Jian Ping Li, Tehreem Saboor, Muhammad Arslan, Muhammad Adnan Farooq Butt",
    conferences:
      "2021 18th International Computer Conference on Wavelet Active Media Technology and Information Processing (ICCWAMTIP)",
    researchYr: 2021,
    citebox: "popup2",
    image: "assets/images/research-page/sec.png",
    citation: {
      vancouver:
        'M. H. F. Butt, J. P. Li, T. Saboor, M. Arslan and M. A. F. Butt, "Intelligent Phishing Url Detection: A Solution Based On Deep Learning Framework," 2021 18th International Computer Conference on Wavelet Active Media Technology and Information Processing (ICCWAMTIP), 2021, pp. 434-439, doi: 10.1109/ICCWAMTIP53232.2021.9674162.',
    },
    abstract:
      "On the Internet, every different day, kinds of attacks are deployed on innocent users. Among all, phishing is the most severe attack in which users lose their credentials or private information and their financial status quickly. The attacker uses their credibility or sensitive information to harm the target or victim. The attacker is clever and uses different strategies to fetch user-sensitive information. The existing techniques fail to overcome these issues to some extent. This work focuses on discovering the essential features that help to differentiate the legitimate and illegitimate URLs. We applied a deep learning technique on the benchmark datasets to identify the pattern of phishing URLs. We used gradient boosted decision trees algorithm to train our model and applied the regular deeply connected neural network layers in various sequences and Adam optimizer. The most found patterns will help the system to detect phishing URLs and avoid phishing. We consider the accuracy, Ff-score, and Root Mean Square Error (RMSE) as our evaluation metrics for model evaluation. The results show that the trained model can achieve an approximately 92% accuracy and 94% f-score.",
    absbox: "absPopup2",
  },
  {
    title: "Identification and Classification of Rice Plant Disease Using Hybrid Transfer Learning",
    authors:
      "Muhammad Hanif Tunio, Li Jianping, Ali Nawaz, Imran Memon",
    conferences:
      "2021 18th International Computer Conference on Wavelet Active Media Technology and Information Processing (ICCWAMTIP)",
    researchYr: 2021,
    citebox: "popup2",
    image: "assets/images/research-page/rice.jpg",
    citation: {
      vancouver:
        'M. H. Tunio, L. Jianping, M. H. F. Butt and I. Memon, "Identification and Classification of Rice Plant Disease Using Hybrid Transfer Learning," 2021 18th International Computer Conference on Wavelet Active Media Technology and Information Processing (ICCWAMTIP), 2021, pp. 525-529, doi: 10.1109/ICCWAMTIP53232.2021.9674124.',
    },
    abstract:
      "On the Internet, every different day, kinds of attacks are deployed on innocent users. Among all, phishing is the most severe attack in which users lose their credentials or private information and their financial status quickly. The attacker uses their credibility or sensitive information to harm the target or victim. The attacker is clever and uses different strategies to fetch user-sensitive information. The existing techniques fail to overcome these issues to some extent. This work focuses on discovering the essential features that help to differentiate the legitimate and illegitimate URLs. We applied a deep learning technique on the benchmark datasets to identify the pattern of phishing URLs. We used gradient boosted decision trees algorithm to train our model and applied the regular deeply connected neural network layers in various sequences and Adam optimizer. The most found patterns will help the system to detect phishing URLs and avoid phishing. We consider the accuracy, Ff-score, and Root Mean Square Error (RMSE) as our evaluation metrics for model evaluation. The results show that the trained model can achieve an approximately 92% accuracy and 94% f-score.",
    absbox: "absPopup2",
  },
  {
    title: "A Tunable and Explainable Attributes (TEA) for Recommendation System",
    authors:
      "Muhammad Hassan Farooq Butt, Jian Ping Li, Tehreem Saboor",
    conferences:
      "2020 17th International Computer Conference on Wavelet Active Media Technology and Information Processing (ICCWAMTIP)",
    researchYr: 2020,
    citebox: "popup2",
    image: "assets/images/research-page/tune.png",
    citation: {
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
