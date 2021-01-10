const FAQ = [
  {
    question: "How many team members can I invite ?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size ?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password ?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you",
  },
  {
    question: "Can I cancel my subscription ?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support ?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const mainContinerEl = document.getElementById("mainContiner");

function FAQuestions() {
  return FAQ.forEach((item) => {
    return createHTMLElements(item.question, item.answer);
  });
}

function createHTMLElements(question, answer) {
  const card = document.createElement("div");
  card.classList.add("card");
  const questionCont = document.createElement("div");
  questionCont.classList.add("question");
  card.appendChild(questionCont);
  const questionPara = document.createElement("div");
  questionPara.classList.add("questionpara");
  const questionEl = document.createElement("p");
  questionCont.appendChild(questionPara);
  questionPara.appendChild(questionEl);
  questionEl.innerHTML = question;
  const arrowCont = document.createElement("div");
  const arrowImg = document.createElement("img");
  arrowImg.src = "./images/icon-arrow-down.svg";
  arrowCont.classList.add("arrowCont");
  arrowCont.appendChild(arrowImg);
  questionCont.appendChild(arrowCont);

  // Answer Element
  const answerCont = document.createElement("div");
  answerCont.classList.add("answer");
  const answerPara = document.createElement("div");
  answerPara.classList.add("answerPara");
  answerCont.appendChild(answerPara);
  const answerEl = document.createElement("p");
  answerEl.innerHTML = answer;
  answerPara.appendChild(answerEl);
  card.appendChild(answerCont);
  mainContinerEl.appendChild(card);

  // All Cont
}

FAQuestions();

const allCont = mainContinerEl.querySelectorAll(".card");

allCont.forEach((e) => {
  const btn = e.querySelector(".question");

  btn.addEventListener("click", (pos) => {
    allCont.forEach((item) => {
      if (item !== e) {
        item.classList.remove("active");
      }
    });
    e.classList.toggle("active");
  });
});
