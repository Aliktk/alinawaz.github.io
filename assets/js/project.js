AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Media Content Analysis",
    cardImage: "assets/images/project-page/mca.png",
    description: "Media Analytics is an AI-powered software solution that enables situational awareness and trend analysis.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/mca.png",
    Previewlink: "",
    Githublink: "https://github.com/Aliktk/media_content_analysis",
  },
  {
    title: "Recipe App",
    cardImage: "assets/images/project-page/recipe.jpg",
    description: "Developed Recipe Recommendation Web App using ReactJs and Edamam (Recipe Search API)",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/recipe.jpg",
    Previewlink: "https://recipe-app-five-xi.vercel.app/",
    Githublink: "https://github.com/MHassaanButt/Recipe-App",
  },
  {
    title: "Print Scrapper",
    cardImage: "assets/images/project-page/scrap.png",
    description: "devloping different scrappers for multiple local and international print media website which will scrap their different information regarding news.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/Aliktk/print_media_scrappers",
    Githublink: "https://github.com/Aliktk/print_media_scrappers",
  },
  {
    title: "Profile card component",
    cardImage: "assets/images/project-page/scrap.png",
    description: "This is a solution to the Profile card component challenge on Frontend Mentor. Frontend Mentor challenges help us to improve our coding skills by building realistic projects.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://Aliktk.github.io/profile-card-component/",
    Githublink: "https://github.com/Aliktk/profile-card-component",
  },

  {
    title: "Masks to RGB Conversion for Semanctic Segmentation",
    cardImage: "assets/images/project-page/Bilbao_1031_1107_152805_650_Mix_1.2K_A-L_12_Cam_I_frame_0816.png",
    description: "Converting Greyscale Masks to RGB images by assigning each class of mask a color using OpenCV.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/Aliktk/Grey_Scale_Masks_to_RGB_Conversion",
  },
  {
    title: "Plotting Image from Json with RLE Encoding",
    cardImage: "assets/images/project-page/json_ploting.jpg",
    description:
      "In this demo project, I read Json and plot image using CV2 by applying RLE encoding and decoding.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Aliktk/Plotting-Json-into-Image-with-RLE-Encoding",
  },
  {
    title: "Rice Deases Classfication",
    cardImage: "assets/images/project-page/rice.jpg",
    description: "In this project, I used Hybrid deep CNN transfer learning on rice plant images, perform classification and identification of various rice diseases. I employed Transfer Learning to generate our deep learning model using Rice Leaf Dataset from a secondary source. The proposed model is 90.8% accurate, Experiments show that the proposed approach is viable, and it can be used to detect plant diseases efficiently.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Aliktk/Rice-Disease-Classfication",
  },
  {
    title: "Brain Tumor Classfication",
    cardImage: "assets/images/project-page/brain.jpg",
    description:
      "I used Kaggle dataset of Brain MRI images and classified the images on the basis of tumor and predict its type using 2D CNN.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "https://github.com/Aliktk/Brain_Tumor_Classfication_Using_DL",
  },
  {
    title: "Covid prediction based on medical symptoms",
    cardImage: "assets/images/project-page/covid.jpg",
    description: "In this project I considered several medical symptoms to predict using logistic regression either the person is infected or not and also provide some recommendations to him/her.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "https://github.com/Aliktk/Covid_Prediction_based_on_medical_symptoms",
  },
  {
    title: "Calamity Prediction",
    cardImage: "assets/images/project-page/cal.jpg",
    description: "In this project I used past three years data of climate having key attributes like rainfall, wind speed, direction, temperature etc and predict calamity on the basis of these key attributes for next year three years using logestic regression technique and also perform descriptive data analysis.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "https://github.com/Aliktk/Calamity_Prediction",
  },
  {
    title: "ODI Match Winner Prediction",
    cardImage: "assets/images/project-page/crck.jpg",
    description: 'In this project, I predict a winner for the ashes ODI series between England and Australia where the away team is England and the home team is Australia using a machine learning algorithm.',
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "https://github.com/Aliktk/Cricket_Predictions",
  },
  {
    title: "Flight Delays Prediction",
    cardImage: "assets/images/project-page/flight.jpeg",
    description: "In this project, I used Decision Tree Learning Model as the main algorithm to build the model. Due to the big amount of flight data, I implement the project using MRJob, PySpark and Spark's MLlib then compare the performance and accuracy of those implementations",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "https://github.com/Aliktk/Flight-Delays-Prediction",
  },
  {
    title: "Crime Classification",
    cardImage: "assets/images/project-page/crime.jpg",
    description: 'In this project I stream data and do crime classification using Spark. This dataset contains incidents derived from the SFPD Crime Incident Reporting system. The data ranges from 1/1/2003 to 5/13/2015. I do some data analysis of crime scenes in different areas and with respect to other parameters.',
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "https://github.com/Aliktk/Crime-Spark-ML",
  },

];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
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
