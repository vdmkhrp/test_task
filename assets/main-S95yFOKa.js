document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".question"),c=document.querySelectorAll(".reviews__btn"),s=document.querySelector(".reviews__textarea"),a=document.querySelector(".reviews__comment-container");let t=0;n.forEach((e,i)=>{i!==t&&e.classList.add("hidden")});function o(){n[t].classList.add("hidden"),t++,t<n.length&&n[t].classList.remove("hidden")}document.querySelectorAll(".question__btn").forEach(e=>{e.addEventListener("click",o)}),c.forEach(e=>{e.addEventListener("click",()=>{r(s.value),s.value=""})});const r=e=>{a.insertAdjacentHTML("afterbegin",`<div class="comment">
        <div class="comment__top">
          <a href="#!" class="comment__ava">
            <img src="./src/img/user.png" alt="ava" />
          </a>
          <div class="comment__content">
            <a href="#!" class="comment__name">User <span>(not reg)</span></a>
            <p class="comment__text">${e}</p>
          </div>
        </div>
        <div class="comment__bottom">
          <a href="#!" class="comment__status">Curte·comente
            <img src="./src/img/like.png" alt="like" />
            <span></span>
          </a>
          <a href="#!" class="comment__time">1 minutos antes</a>
        </div>
      </div>`)}});
