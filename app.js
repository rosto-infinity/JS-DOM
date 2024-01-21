const  titre = document.querySelector('h1');
// console.log(titre);
const btn1 =document.querySelector('#btn-1'); 
// console.log(btn1);
const btn2 =document.querySelector('#btn-2'); 

// console.log(btn2)
const questionContainer =document.querySelector('.box'); 
// console.log(questionContainer);
let response = document.querySelector('p');

            //####mousedown ####

btn1.addEventListener('click', () =>{

    // console.log('Click sur btn1');
    btn1.style.backgroundColor ='green';
    btn1.style.color ='white';
    btn1.style.padding ='10px';
    
});

            //####mousedown ####

// btn1.addEventListener('click', clickBTN);
btn2.addEventListener('click', clickBTN2);

function clickBTN2(){
    // console.log('Click sur btn2');  
     btn2.style.backgroundColor = "red";
     
    //  console.log(response);
     response.classList.add('show-response');
}
    
            //####mousedown ####
 

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

  //------------keydown ------

// Fonction de manipulation des événements de pression des touches

let keypressContainer =document.querySelector(".keydown");
let key =document.querySelector("#key");


// Fonction de lecture du son
function playSound(key) {
  // Créer un nouvel élément audio et jouer le son
  const audio = new Audio();

  // Déterminer le chemin du fichier audio en fonction de la touche pressée
 audio.src =`son/${key}.mp3`
  audio.play();
}


document.addEventListener("keydown", (event) => {
   key.textContent= event.key;

  // Changement de couleur en fonction de la touche pressée
  if (event.key.toLowerCase() === "j") {
    keypressContainer.style.background = "pink";
  } else if (event.key.toLowerCase() === "h") {
    keypressContainer.style.background = "teal";
  }else if (event.key.toLowerCase() === "p") {
    keypressContainer.style.background = "orange";
  } else {
    keypressContainer.style.background = "red";
  }
  
  if (event.key.toLowerCase()  === "j" || event.key.toLowerCase()  === "p" || event.key.toLowerCase()  === "h") {
    // Jouer le son correspondant
    playSound(event.key);
  }

});



//#######################################

   //Scroll Event 
   let nav = document.querySelector('nav');
   window.addEventListener("scroll", ()=>{
    // console.log(scrollY);

    if(scrollY >=200){
      nav.style.top = 0;
    }else{
      nav.style.top = "-50px";

    }
   })


//#######################################

   //Form Event 
   let inputName = document.querySelector('input[type="text"]');
  //  console.log(inputName); 
   let form= document.querySelector('form');
  //  console.log(form); 
  let select= document.querySelector('select');
  //  console.log(select);
  


   let pseudo ="";
   let language ="";

  //---------Event input
  
  inputName.addEventListener("input", (e) =>{
  //  console.log("ok");
  //  console.log("ok");
  //  console.log(e.target.value);
  pseudo = e.target.value; 

  })
  select.addEventListener("input", (e) =>{ 
    language = e.target.value;
    
  })
  
  
  //---------Event submit 
  
  form.addEventListener("submit", (e) =>{
    e.preventDefault();

  })



