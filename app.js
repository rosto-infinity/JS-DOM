const  titre = document.querySelector('h1');
// console.log(titre);

const btn1 =document.querySelector('#btn-1'); 
// console.log(btn1);


const btn2 =document.querySelector('#btn-2'); 

// console.log(btn2);


const questionContainer =document.querySelector('.box'); 

// console.log(questionContainer);



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
     let response = document.querySelector('p');
     console.log(response);

     response.classList.add('show-response');

}


questionContainer.addEventListener('click', () =>{

  questionContainer.classList.add('question-click');
    
} )


//---------  callback function 
        // function AB(a){
        //     // instruction
        // }(a)