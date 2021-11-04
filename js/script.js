
// creiamo un oggetto contenente immagine, nome, descrizione.

const container = document.querySelector(".team-container");
const btn = document.querySelector("#addMemberButton");

const profile = [
  {
    img:"img/wayne-barnett-founder-ceo.jpg",
    name: "Wayne Barnett",
    job: "Founder & CEO"
  },
  {
    img: "img/angela-caroll-chief-editor.jpg",
    name: "Angela Caroll",
    job:  "Chief Editor",
  },
  {
    img:"img/walter-gordon-office-manager.jpg",
    name:  "Walter Gordon",
    job: "Office Manager"
  },
  {
    img: "img/angela-lopez-social-media-manager.jpg", 
    name: "Angela Lopez",
    job: "Social Media Manager"
  },
  {
    img: "img/scott-estrada-developer.jpg", 
    name: "Scott Estrada", 
    job: "Developer"
  },
  {
    img: "img/barbara-ramos-graphic-designer.jpg",
    name: "Barbara Ramos",
    job: "Graphic Designer"
  }
];

createBox();

btn.addEventListener("click", function(){
  let nameToAdd = document.getElementById("name").value;
  let jobToAdd = document.getElementById("role").value;
  let imgToAdd = document.getElementById("image").value;

  const newProfile = {
    img: imgToAdd,
    name: nameToAdd,
    job: jobToAdd
  }
  
  profile.push(newProfile);


  console.log(nameToAdd);
  console.log(profile);
  container.innerHTML= "";
  createBox();
});

 

function createBox(){
  for(let index in profile){
  const singleProfile = profile[index];
  
  const imgsingleProfile = singleProfile.img;
  const namesingleProfile = singleProfile.name;
  const jobsingleProfile = singleProfile.job;

  container.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${imgsingleProfile}" alt="Wayne Barnett"/>
      </div>
      <div class="card-text">
      <h3>${namesingleProfile}</h3>
      <p>${jobsingleProfile}</p>
    </div>
  </div>
`
;

};
}
// intercettare il bottone e caricare il contenuto dei tre box di testo con un push 

