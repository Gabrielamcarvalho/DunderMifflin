document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');
});
/*Reviews*/
const reviews = [
  {
    id: 1,
    name: 'Aaron Grandy',
    job: 'Stone, Cooper, and Grandy: Attorneys at Law',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque temporibus, exercitationem magnam hic repellat sit fugiat libero veniam distinctio fuga!',
    img: 
      './images/AaronGrandy.jpg',
  },
  {
    id: 2,
    name: 'Phil Maguire',
    job: 'Businessman',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque temporibus, exercitationem magnam hic repellat sit fugiat libero veniam distinctio fuga!',
    img:
      './images/PhilMaguire.jpg',
  },
  {
    id: 3,
    name: 'Larry Meyers',
    job: 'Scranton High School',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque temporibus, exercitationem magnam hic repellat sit fugiat libero veniam distinctio fuga!',
    img:
      './images/LarryMeyers.jpg',
  },
  {
    id: 4,
    name: 'Daniel Schofield',
    job: 'Harper Collins',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque temporibus, exercitationem magnam hic repellat sit fugiat libero veniam distinctio fuga!',
    img:
      './images/BobGebertDanielSchofield.jpg'
  }
];

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;



//show person based on item

function showPerson(){
    const item = reviews[currentItem];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    img.src = item.img;
}

window.addEventListener('DOMContentLoaded', () =>{
    showPerson();
});

//show next person

nextBtn.addEventListener('click', () =>{
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson();
});
//show prev person
prevBtn.addEventListener('click', ()=>{
    currentItem--;
    if(currentItem < 0){
    currentItem = reviews.length -1;
    }
    showPerson();
});