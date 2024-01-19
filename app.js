const  titre = document.querySelector('h1');
// console.log(titre);

const btn1 =document.querySelector('#btn-1'); 
// console.log(btn1);


const btn2 =document.querySelector('#btn-2'); 

// console.log(btn2);


const questionContainer =document.querySelector('.box'); 

// console.log(questionContainer);

let response = document.querySelector('p');
let keypressContainer =document.querySelector(".keypress");
let key =document.querySelector("#key");
btn1.addEventListener('click', () =>{

    // console.log('Click sur btn1');
    btn1.style.backgroundColor ='green';
    btn1.style.color ='white';
    btn1.style.padding ='10px';
    
});


// btn1.addEventListener('click', clickBTN);
btn2.addEventListener('click', clickBTN2);

function clickBTN2(){
    // console.log('Click sur btn2');  
     btn2.style.backgroundColor = "red";
     
    //  console.log(response);
     response.classList.add('show-response');
}

questionContainer.addEventListener('click', () =>{
  questionContainer.classList.toggle('question-click');
    
} ) 


//---------  callback function 
        // function AB(a){
        //     // instruction
        // }(a)
// 
        // Mouvement de la souris

        //------mousemove-----

 let  mousemove =document.querySelector(".mousemove");
//  console.log(mousemove); 
window.addEventListener("mousemove",  (e)=>{
  
  mousemove.style.left= e.pageX + "px" 
  mousemove.style.top= e.pageY + "px" 
})      

//------mousedown --------


window.addEventListener('mousedown',
()=>{
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";

});

//---------mouseup --------
window.addEventListener('mouseup',
()=>{
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";

});
//-------mouseenter -------
questionContainer.addEventListener(
  "mouseenter", () => {
  questionContainer.style.background = "pink";
  questionContainer.style.border ="12px dashed red"
  });

  //------------mouseout ------
questionContainer.addEventListener(
  "mouseout", () => {
  questionContainer.style.background = "rgba(0,0,0,0.3)";
  });

  //-------------mouseover -------
response.addEventListener('mouseover',
() => {
  // console.log(response.style.transform = "rotate(1deg)");
response.style.transform = "rotate(3deg)";
});



// document.addEventListener("keydown", (e) => {
//   key.textContent = e.key;
//   if (e.key === "j") {
//     keypressContainer.style.background = "pink";
//   } else if (e.key === "h") {
//     keypressContainer.style.background = "teal";
//   } else {
//     keypressContainer.style.background = "red";
//   }
// });


// // Fonction de manipulation des événements de pression des touches
// document.addEventListener("keydown", (event) => {
//   const key = event.key.toLowerCase();

//   // Vérification des touches pressées
//   if (key === "j" || key === "p" || key === "h") {
//     // Jouer le son correspondant
//     playSound(key);
//   }
// });

// // Fonction de lecture du son
// function playSound(key) {
//   let soundPath = "";

//   // Déterminer le chemin du fichier audio en fonction de la touche pressée
//   switch (key) {
//     case "j":
//       soundPath = "chemin/du/son_j.mp3";
//       break;
//     case "p":
//       soundPath = "chemin/du/son_p.mp3";
//       break;
//     case "h":
//       soundPath = "chemin/du/son_h.mp3";
//       break;
//     default:
//       return; // Ne rien faire si la touche n'est pas prise en charge
//   }

//   // Créer un nouvel élément audio et jouer le son
//   const audio = new Audio(soundPath);
//   audio.play();
// }



// Fonction de manipulation des événements de pression des touches
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  // Vérification des touches pressées
  if (key === "j" || key === "p" || key === "h") {
    // Jouer le son correspondant
    playSound(key);
  }

  // Changement de couleur en fonction de la touche pressée
  if (key === "j") {
    keypressContainer.style.background = "pink";
  } else if (key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
});

// Fonction de lecture du son
function playSound(key) {
  let soundPath = "";

  // Déterminer le chemin du fichier audio en fonction de la touche pressée
  switch (key) {
    case "j":
      soundPath = "son/son_j.mp3";
      break;
    case "p":
      soundPath = "son/son_p.mp3";
      break;
    case "h":
      soundPath = "son/son_h.mp3";
      break;
    default:
      return; // Ne rien faire si la touche n'est pas prise en charge
  }

  // Créer un nouvel élément audio et jouer le son
  const audio = new Audio(soundPath);
  audio.play();
}