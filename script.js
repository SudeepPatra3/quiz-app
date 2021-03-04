const quiz = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello world",
    b: "No idea",
    c: "Hypertext Markup Language",
    d: "Hypertext Makekup Language",
    ans: "ans3",
  },
  {
    question: "Q2: What is the full form of HTML?",
    a: "Hypertext Makekup Language",
    b: "Hypertext Markup Language",
    c: "No idea",
    d: "Hi",
    ans: "ans2",
  },
  {
    question: "Q3: What is the full form of HTML?",
    a: "Hypertext Markup Language",
    b: "No idea",
    c: "Hello world",
    d: "Hypertext Makekup Language",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#opt1");
const option2 = document.querySelector("#opt2");
const option3 = document.querySelector("#opt3");
const option4 = document.querySelector("#opt4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showscore = document.querySelector("#showscore");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionlist = quiz[questionCount];
  question.innerHTML = questionlist.question;
  option1.innerText = questionlist.a;
  option2.innerText = questionlist.b;
  option3.innerText = questionlist.c;
  option4.innerText = questionlist.d;
};
loadQuestion();

let getcheckedanswer = () => {
  let answer;
  answers.forEach((curranswer) => {
    if (curranswer.checked) {
      answer = curranswer.id;
    }
  });
  return answer;
};

const deselectall = () => {
  answers.forEach((curranswer) => (curranswer.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getcheckedanswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quiz[questionCount].ans) {
    score++;
  }

  questionCount++;
  deselectall();
  if (questionCount < quiz.length) {
    loadQuestion();
  } else {
    showscore.innerHTML = `<hr>
    <h3>Your Scored ${score} / ${quiz.length} 👲</h3>
    <button class="btn" onclick="location.reload()">Play Again</button>`;
    showscore.classList.remove("scorearea");
  }
  
});
