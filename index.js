var readlineSync = require('readline-sync');
const username = readlineSync.question("Hello, Hope you are doing good! \nWhat is your name? \n")

console.log(`Hey ${username} Get ready to play the quiz!\n`)

let score = 0;

function play(question, ans){
  let answer = readlineSync.question(`${question} \n`)
  if(answer === ans){
    score = score + 1;
    console.log("Your answer is correct \n")
  } else{
    console.log(`Oops, the answer you told is incorrect. \nCorrect is answer is ${ans}\n`)
  }
}

const questions = [
  {
    question: "What is my Birthday Month? ",
    answer: "december"
  },
  {
    "question": "Am I greater than 25",
    "answer": "no"
  },
  {
    question: "Which is my Fav Social Media Platform? ",
    answer: "instagram"
  },
  {
    "question": "Which is my favourite framework",
    "answer": "react"
  },
  {
    question: "Where do I Work? ",
    answer: "techie tessie"
  },
 {
    question: "Where do i live? ",
    answer: "varanasi"
  },
  {
    "question": "What is my favourite food? ",
    "answer": "paneer"
  },
]

for(let i = 0; i < questions.length; i++){
   play(questions[i].question, questions[i].answer)
}
console.log(`Final Score: ${score} `)

