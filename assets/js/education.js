AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Machine and Deep Learning",
    cardImage: "assets/images/dice.png",
    moocLink: "#",
    issuer: "DICE Analytics",
    date: "Dec 2019"
  },
  {
    title: "Deep Learning using Pytorch",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "#",
    issuer: "Udacity",
    date: "April 2020"
  },
  {
    title: "Deep Learning Specialization",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "#",
    issuer: "Coursera",
    date: "May 2020"
  },
  {
    title: "Artificial Intelligence [ML/DL]",
    cardImage: "assets/images/navttc.jpg",
    moocLink: "#",
    issuer: "NAVTTC",
    date: "March 2020"
  },
  {
    title: "National Freelancing Training",
    cardImage: "assets/images/mitt.jpg",
    moocLink: "#",
    issuer: "MITT",
    date: "July 2020"
  },
  {
    title: "Professional Python Programming",
    cardImage: "assets/images/pseb.png",
    moocLink: "#",
    issuer: "PSEB",
    date: "Aug 2020"
  },
  {
    title: "SCRUM Product Owner",
    cardImage: "assets/images/pseb.png",
    moocLink: "#",
    issuer: "PSEB",
    date: "Aug 2020"
  },
  {
    title: "E-Rozgaar on Creative Design",
    cardImage: "assets/images/pitb.jpg",
    moocLink: "#",
    issuer: "PITB",
    date: "Sep 2020"
  },
  {
    title: "AI for Medical Diagnosis",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/learn/ai-for-medical-diagnosis",
    issuer: "Coursera",
    date: "May 2020"
  },
  {
    title: "Python for Data Science Chilla",
    cardImage: "assets/images/codanic.jpg",
    moocLink: "#",
    issuer: "Codanics",
    date: "Feb 2022"
  },
  {
    title: "ChatGPT Prompt Engineering",
    cardImage: "assets/images/deeplearning.png",
    moocLink: "#",
    issuer: "deeplearning.ai",
    date: "2023"
  },
  {
    title: "Pair Programming with LLM",
    cardImage: "assets/images/deeplearning.png",
    moocLink: "#",
    issuer: "deeplearning.ai",
    date: "2023"
  },
  {
    title: "Finetuning Large Language Models",
    cardImage: "assets/images/deeplearning.png",
    moocLink: "#",
    issuer: "deeplearning.ai",
    date: "2023"
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink, issuer, date }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img loading="lazy" src=${cardImage} class="card-img-top content-image" style="width: 100%; height: 150px; object-fit: contain; padding: 10px; background: white;">     
                  <div class="content-details fadeIn-bottom">
                    ${moocLink !== '#' ? `<a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>` : ''}                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                    <p class="text-center text-muted" style="font-size:10px;margin:0">${issuer}</p>
                    <p class="text-center text-muted" style="font-size:10px">${date}</p>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
