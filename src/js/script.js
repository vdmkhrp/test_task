import userImg from "../img/user.webp";
import likeImg from "../img/like.webp";

document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");
  const questionBtns = document.querySelectorAll(".question__btn");
  const btns = document.querySelectorAll(".reviews__btn");
  const textArea = document.querySelector(".reviews__textarea");
  const reviews = document.querySelector(".reviews__comment-container");
  const popover = document.querySelector(".popover");
  const submitBtn = document.querySelector(".submit-btn");
  const overlay = document.querySelector(".overlay");
  let currentIndex = 0;
  const answers = {
    first: "",
    second: "",
    third: "",
    fourth: "",
  };

  questions.forEach((question, index) => {
    const countEl = question.querySelector(".question__count");
    countEl.innerText = `${index + 1} / ${questions.length}`;
    if (index !== currentIndex) {
      question.classList.add("hidden");
    }
  });

  function handleAnswerClick(e) {
    questions[currentIndex].classList.add("hidden");
    answers[getAnswer(currentIndex)] = e.target.innerText;
    currentIndex = currentIndex + 1;
    if (currentIndex < questions.length) {
      questions[currentIndex].classList.remove("hidden");
    }
    if (currentIndex === questions.length) {
      popover.showPopover();
      overlay.classList.add("show");
      document.body.style.overflow = "hidden";
    }
  }

  submitBtn.addEventListener("click", () => {
    console.log(answers);
    popover.hidePopover();
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  });

  function getAnswer(number) {
    return Object.keys(answers)[number];
  }

  questionBtns.forEach((button) => {
    button.addEventListener("click", handleAnswerClick);
  });

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = textArea.value.trim();

      if (text === "") {
        return;
      }

      createComment(text);
      textArea.value = "";
    });
  });

  const createComment = (text) => {
    reviews.insertAdjacentHTML(
      "afterbegin",
      `<div class="comment">
        <div class="comment__top">
          <a href="#!" class="comment__ava">
            <img src="${userImg}" alt="ava" />
          </a>
          <div class="comment__content">
            <a href="#!" class="comment__name">User <span>(not reg)</span></a>
            <p class="comment__text">${text}</p>
          </div>
        </div>
        <div class="comment__bottom">
          <a href="#!" class="comment__status">Curte·comente
            <img src="${likeImg}" alt="like" />
            <span></span>
          </a>
          <a href="#!" class="comment__time">1 minutos antes</a>
        </div>
      </div>`
    );
  };
});
