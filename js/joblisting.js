
// Toggle Menu Script


function menu_display() {
  const toggleMenu = document.getElementById('toggle-menu');
  const navigation = document.getElementById('navigation');

  toggleMenu.addEventListener('click', () => {
    navigation.classList.toggle('active');

  });
}
const jobs = [
  {
    title: "web dev",
    count: 1234,
    img: "../images/undraw_portfolio_btd8.svg"
  },
  {
    title: "web/app developer",
    count: 1234,
    img: "../images/undraw_on-the-move_tdos.svg"
  },
  {
    title: "web designer",
    count: 1234,
    img: "../images/undraw_job_hunt_5umi.svg"
  },
  {
    title: "app development",
    count: 9634,
    img: "../images/undraw_job_hunt_5umi.svg"
  },

  {
    title: "applopment",
    count: 10734,
    img: "../images/undraw_job_hunt_5umi.svg"
  },
  {
    title: "app dev",
    count: 1234,
    img: "../images/undraw_interview_yz52.svg"
  },
];

const container = document.querySelector('.cardcontainer');

jobs.forEach(job => {
  let card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
   <img src=${job.img} alt=${job.title} >
    <h3>${job.title}web devloper </h3>
    <p>${job.count} job available
   `
  container.appendChild(card)
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
const flex = document.querySelector('.flexcontainer');

lists.forEach(list => {
  let box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = `
<div class='number'>
  <p>${list.number}</p>
</div>
<h3>${list.label}</h3>
<p>${list.paragraph}</p>
`
  flex.appendChild(box)
});

