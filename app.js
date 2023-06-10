// Storing the questions in Arrays
const questions = [
    {
    question: "Rhombic sulphur, monoclinic sulphur and amorphous sulphur are:",
      a:"Isomers",
      b:"Isotopes",
      c:"Allotropes",
    answer: "c",
},
  {
    question: "Laughing gas is",
      a:"Nitrogen(II)oxide (NO<sub>2</sub>)",
      b:"Nitrogen(I)oxide(N<sub>2</sub>O)",
      c:"Ammonia(NH<sub>3</sub>)",
    answer: "b",
  },
{
    question: "The correct name of the compound CH<sub>3</sub>CH<sub>2</sub>CONH<sub>2</sub> is",
      a:"N-methyl-propionyl amide",
      b:"Propionyl amide",
      c:"Methyl propanamide",
    answer: "a",
},
{
    question: "The name pentanone is not specific and proper because it can refer to",
      a:"2-pentanone and 3-pentanone",
      b:"1-pentanone and 5-pentanone",
      c:"Methyl propanone and Propyl methanone",
    answer: "a",
},
{
  
    question: "The oxide that remains unchanged when heated with hydrogen is",
     a: "CuO",
     b: "ZnO",
      c:"Ag<sub>2</sub>O",
    answer: "b",
},
{
    question: "What is the most metallic element in the set",
      a:"Na",
      b:"Ar",
      c:"K",
    answer: "a",
},
 {
    question: "What is the mole fraction of the water in a solution prepared by mixing 12.5g of H<sub>2</sub>O with 220g of acetone",
      a:"0.817",
      b:"0.183",
      c:"0.155",
    answer: "c",
},
{
    question: "A consequence of global warming is:",
      a:"Air pollution",
      b:"Increase in Humidity",
      c:"Flooding",
    answer: "c",
},
{
  
    question: "Gunpowder is made from charcoal, Sulphur and Potassium trioxonitrate(V). The salt in the mixture functions as :",
      a:"Exploder",
      b:"A reductant",
      c:"A oxidant",
    answer: "a",
},
{

    question: "Which one of the following group II elements has the highest first ionization energy?",
      a:"Be",
      b:"Mg",
      c:"Ca",
    answer: "a",
},
{
    question: "Which one of the following compounds does not show allotropy at room temperature and pressure",
      a:"Nitrogen",
      b:"Carbon",
      c:"Oxygen",
    answer: "a",
},
{
    question: "Cellulose and Starch can classified as one of the following:",
      a:"Sugar",
      b:"Fibres",
      c:"Carbohydrates",
    answer: "c",
},
{
    question: "What mass of anhydrous solution of sodiumtrioxocarbonate(IV) is required to prepare 250cm<sup>3</sup> of 0.10m solution? (Na = 23, C = 12, O = 16)",
      a:"5.3g",
      b:"5.24g",
      c:"5.35g",
    answer: "c",
},
{
    
    question: "How many isomers can be formed from organic compounds with formular C<sub>3</sub>H<sub>8</sub>O?",
     a: "2",
     b: "3",
      c:"4",
    answer: "a",
},
{
    question: "Which of the following is not a property of Magnesium Oxide",
      a:"Pressure of ionic bonds",
      b:"Low binding Energy",
      c:"Dissolution in polar solvent",
    answer: "b",
},
{
    question: "Tetraoxosulphate(VI)acid is described as strong acid because it is highly",
      a:"Corrosive",
      b:"Soluble in water",
      c:"Ionized in water",
    answer: "c",
},
{
    
    question: "Which of these metals, Mg, Fe, Pb, and Cu will dissolve in dilute HCl if air is blown through the solution?",
      a:"Mg and Fe only",
      b:"All of the Above",
      c:"Mg, Fe and Pb",
    answer: "a",
},
{
  
    question: "A correct electrochemical series can be obtained from K,Na,Ca,Al,Mg,Zn,Fe,Pb,H,Ag,Au by interchanging ",
      a:"Zn and Fe",
      b:"Zn and Pb",
      c:"Al and Mg",
    answer: "c",
},
{
    question: "The solubility of alkanols in water is due to:",
      a:"Their ionic characters",
      b:"Their low boiling points",
      c:"Ability to form hydrogen bond",
    answer: "c",
},
{
    question: "The gas that is not associated with global warming is",
      a:"CO<sub>2</sub>",
      b:"H<sub>2</sub>",
      c:"SO",
    answer: "c",
}
] 

// initailizing html 
const note_box = document.querySelector(".note ");
const proceed = document.querySelector(".moveon");
const quiz = document.getElementById("quizbox");
const quiz_display = document.querySelector(".quiz_content")
const answerElements = document.querySelectorAll(".choose");
const pick =document.querySelectorAll("option");
const quest = document.getElementById("quiz_quest");
const optionA = document.getElementById("a_note");
const optionB = document.getElementById("b_note");
const optionC = document.getElementById("c_note");
const nextBtn = document.getElementById("submit");


proceed.onclick = () =>{
  quiz_display.classList.add("activeQuiz") // Adding the note element
}

proceed.addEventListener('click', ()=>{
  note_box.remove();
  proceed.remove();
}); // removing the note element and continue button


let currentQuestions = 0;
let result = 0;


 function getChecked(){
 let choosen = undefined;
 answerElements.forEach((ans) =>{
  if(ans.checked){
    choosen = ans.id
  }
 });
 return choosen;
} // get the user selected options abd compare it with the answer on the array
     
  
  
function selectOptions(){
    answerElements.forEach((answ) =>(answ.checked = false));
}
//deselected options 

displayQuiz()


function displayQuiz(){
  selectOptions()
    const currentQuestionData = questions[currentQuestions]
    quest.innerHTML = currentQuestionData.question
    optionA.innerHTML = currentQuestionData.a
    optionB.innerHTML = currentQuestionData.b
    optionC.innerHTML = currentQuestionData.c;
}
// display the question and option from the array

nextBtn.addEventListener("click", () =>{
  let final = getChecked()
  if(final)
    if(final === questions[currentQuestions].answer){
      result++
    } //calculating the score of the user in correspondance to the getChecked function and array answers

    currentQuestions++
    if(currentQuestions < questions.length){
      displayQuiz();} // continue to the next question
      else{
        quiz.innerHTML = `
            <h2>You got ${result/questions.length*100}%</h2>
            <button onclick = "location.reload()">Retry</button>
              `
      }
      if(result > 14){
quiz.innerHTML = `
         <h2>You got ${result/questions.length*100}%</h2>
       `
      }
      // if user score more than 70 (14)
    });

   



    

   