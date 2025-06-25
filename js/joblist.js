

    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    const data = [
  {
    img: "../images/web.svg",
    title: "web development",
    text: "This is some example text for card 1."
  },
  {
    img: "../images/data.svg",
    title: "Data Science",
    text: "This is some example text for card 2."
  },
  {
    img: "../images/content.svg",
    title: "content writing",
    text: "This is some example text for card 3."
  },
  {
    img: "../images/joblist.svg",
    title: "design",
    text: "This is some example text for card 4."
  },
  {
    img: "../images/marketing.svg",
    title: "marketing",
    text: "This is some example text for card 5."
  },
  {
    img: "../images/mobile.svg",
    title: "mobile development",
    text: "This is some example text for card 6."
  }
];

const container = document.getElementById("cardContainer");
data.forEach(item => {
  const col = document.createElement("div");
  col.className = " col-lg-4 col-md-6 mb-4 d-flex";

  col.innerHTML = `
    <div class="card shadow-sm">
      <img src="${item.img}" class="mx-auto img-fluid card-img-top " alt="${item.title}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.text}</p>
      </div>
    </div>
  `;

  container.appendChild(col);
});


const lists = [
  {
    number: 1,
    label: "create your profile",
    paragraph: " sign up and show case your skills, experience and portfolio"
  },
  {
    number: 2,
    label: "create your profile",
    paragraph: " sign up and show case your skills, experience and portfolio"
  },
  {
    number: 3,
    label: "create your profile",
    paragraph: " sign up and show case your skills, experience and portfolio"
  },
  {
    number: 4,
    label: "create your profile",
    paragraph: " sign up and show case your skills, experience and portfolio"
  },
];
// const flex = document.querySelector('.flexcontainer');
 let box = document.getElementById('flexContainer');
lists.forEach(list => {
  const box = document.createElement('div');
  box.className = '  box container border-primary col-lg-2 col-md-12 col-sm-6  mx-auto my-5 d-flex flex-column align-items-center justify-content-center';
  box.innerHTML = `
<div class=' number'>
  <p>${list.number}</p>
</div>
<h3>${list.label}</h3>
<p>${list.paragraph}</p>
`
  flexContainer.appendChild(box)
});

