const questions = [
  {
    question: "سخت ترین زبان برنامه نویسی کدام است؟",
    answer: [
      { text: "پایتون", correct: false },
      { text: "سی", correct: true },
      { text: "سی شارپ", correct: false },
      { text: "متلب", correct: false },
    ],
  },
  {
    question: "بهترین تیم تاریخ فوتبال ایران کدام است؟",
    answer: [
      { text: "استقلال", correct: true },
      { text: "پرسپولیس", correct: false },
      { text: "تراکتور", correct: false },
      { text: "سپاهان", correct: false },
    ],
  },
  {
    question: "واژه ی Womb به چه معناست؟",
    answer: [
      { text: "تخمدان", correct: false },
      { text: "اب دان", correct: false },
      { text: "رحم", correct: true },
      { text: "مثانه", correct: false },
    ],
  },
  {
    question: "بیت کوین کی اومد؟",
    answer: [
      { text: "2008", correct: true },
      { text: "2007", correct: false },
      { text: "2009", correct: false },
      { text: "2012", correct: false },
    ],
  },
];

const containerQuestion__Btns_Container = document.querySelector(
  ".container-question__btns-container"
);
const containerQuestion__nextBTN_next = document.querySelector(
  ".container-question__nextBTN-next"
);
const containerQuestion__title = document.querySelector(
  ".container-question__title"
);

const staticModal = document.querySelector("#static-modal");
const bash = document.querySelector(".bash");
const textScore = document.querySelector(".textScore");

let currntQuestionInedx = 0;
let score = 0;

const startQuiz = () => {
  currntQuestionInedx = 0;
  score = 0;
};

const showQuestion = () => {
  containerQuestion__nextBTN_next.disabled = true;
  containerQuestion__nextBTN_next.addEventListener("click", funcSelectQues);
  let currentQuestion = questions[currntQuestionInedx];
  containerQuestion__title.innerHTML = `${currentQuestion.question}`;
  console.log(currentQuestion.answer);
  containerQuestion__Btns_Container.innerHTML = "";
  currentQuestion.answer.forEach((item) => {
    containerQuestion__Btns_Container.insertAdjacentHTML(
      "beforeend",
      `
         <div class="container-question__btns-parent">
            <button class="container-question__btns-parent-btn" onclick="selectBTn(event.target)" ${
              item.correct ? `data-correct=${true}` : ""
            }>${item.text}</button>
         </div>
      `
    );
  });
};

const selectBTn = (tar) => {
  if (tar.dataset.correct) {
    tar.classList.add("container-question__btns-parent-btn--correct");
    score++;
  } else {
    tar.classList.add("container-question__btns-parent-btn--incorrect");
  }
  Array.from(containerQuestion__Btns_Container.children).forEach((item) => {
    console.log(item.lastElementChild);

    if (item.lastElementChild.dataset.correct) {
      tar.classList.add("container-question__btns-parent-btn--correct");
    }
    item.lastElementChild.disabled = true;
    containerQuestion__nextBTN_next.disabled = false;
  });
};

const funcSelectQues = () => {
  currntQuestionInedx++;
  if (currntQuestionInedx < questions.length) {
    showQuestion();
  } else {
    staticModal.classList.remove("hidden");
    textScore.innerHTML = score;
  }
};

bash.addEventListener("click", () => {
  location.href = location.href;
  staticModal.classList.add("hidden");
});

showQuestion();
