const quizDB = [
  {
    question: "Q1: What is HTML?",
    a: "HTML describes the structure of a webpage",
    b: "HTML is the standard markup language mainly used to create web pages",
    c: "HTML consists of a set of elements that helps the browser how to view the content",
    d: "All of the mentioned",
    ans: "ans4",
  },
  {
    question: "Q2: Which of the following JavaScript cannot do?",
    a: "JavaScript can react to events",
    b: "JavaScript can manipulate HTML elements",
    c: "JavaScript can be use to validate data",
    d: "All of the Above",
    ans: "ans4",
  },
  {
    question: "Q3: What is CSS stand for",
    a: "Color Style Sheets",
    b: "Cascade Sheets Style",
    c: "Cascading Style Sheets",
    d: "Casecode Style Sheet",
    ans: "ans3",
  },
  {
    question: "Q4: In css What does h1 can be called as",
    a: "Selector",
    b: "Attribute",
    c: "Value",
    d: "Tag",
    ans: "ans1",
  },
  {
    question: "Which of the following is correct about HTML?",
    a: "HTML uses User Defined Tags.",
    b: "HTML uses tags defined within the language",
    c: "Both A and B.",
    d: "None of the above",
    ans: "ans2",
  },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText =  questionList.a;
    option2.innerText =  questionList.b;
    option3.innerText =  questionList.c;
    option4.innerText =  questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {

    let answer ;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const CheckedAnswer = getCheckAnswer();

    console.log(CheckedAnswer);

    if( CheckedAnswer === quizDB[questionCount].ans){
        score++;
    };

questionCount++;

deselectAll();

if(questionCount < quizDB.length){
    loadQuestion();
}else{
    showScore.innerHTML = `
    <h3> You scored ${score}/${quizDB.length} </h3>
    <button class="btn" onclick="location.reload()">play Again </button>
    `;

    showScore.classList.remove('scoreArea');
}

});

