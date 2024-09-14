document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");
  const btns = document.querySelectorAll(".reviews__btn");
  const textArea = document.querySelector(".reviews__textarea");
  const reviews = document.querySelector(".reviews__comment-container");
  let currentIndex = 0;

  questions.forEach((question, index) => {
    if (index !== currentIndex) {
      question.classList.add("hidden");
    }
  });

  function handleAnswerClick() {
    questions[currentIndex].classList.add("hidden");

    currentIndex++;

    if (currentIndex < questions.length) {
      questions[currentIndex].classList.remove("hidden");
    }
  }

  document.querySelectorAll(".question__btn").forEach((button) => {
    button.addEventListener("click", handleAnswerClick);
  });

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      createComment(textArea.value);
      textArea.value = "";
    });
  });

  const createComment = (text) => {
    reviews.insertAdjacentHTML(
      "afterbegin",
      `<div class="comment">
        <div class="comment__top">
          <a href="#!" class="comment__ava">
            <img src="./src/img/user.png" alt="ava" />
          </a>
          <div class="comment__content">
            <a href="#!" class="comment__name">User <span>(not reg)</span></a>
            <p class="comment__text">${text}</p>
          </div>
        </div>
        <div class="comment__bottom">
          <a href="#!" class="comment__status">Curte·comente
            <img src="./src/img/like.png" alt="like" />
            <span></span>
          </a>
          <a href="#!" class="comment__time">1 minutos antes</a>
        </div>
      </div>`
    );
  };
});
