const g=""+new URL("user-DE5Y2xDz.webp",import.meta.url).href,h="data:image/webp;base64,UklGRjoBAABXRUJQVlA4WAoAAAAQAAAADgAADQAAQUxQSHgAAAABcBpt/5t8Lj6XbXLIZJA4LKqDYoDe+wQdJB40mgl6h9/d76PDCBExAfi363zncmt+NeTU+Man7ODVsEwL6JBzv2cB3m6xS6ZIIZkCgnyr5Jk1IMCLqJBUYfENVfSrm5IicmYLCJJczrYkqWHAaWfbLuzOuDdJ4I9WUDggnAAAADACAJ0BKg8ADgACQDglsAJ0APoOto5f512AAPnkq6rgdjzsXF9Ngv+1b34yshbjmTE/V94Df86fvT7zT04E4CzoYvfgm3Jeqaegre8cu41R4mdgaK+HOtpAVK39kfFUCdhcMveqCisUNs62FkJDC/dxuUq59q3PpXkH5qbOEC6B0muhlqP+S1MeVpFvigv360tr2QJFNkz8moAAAA==";document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".question"),i=document.querySelectorAll(".question__btn"),m=document.querySelectorAll(".reviews__btn"),c=document.querySelector(".reviews__textarea"),l=document.querySelector(".reviews__comment-container"),r=document.querySelector(".popover"),d=document.querySelector(".submit-btn"),a=document.querySelector(".overlay");let t=0;const s={first:"",second:"",third:"",fourth:""};n.forEach((e,o)=>{const f=e.querySelector(".question__count");f.innerText=`${o+1} / ${n.length}`,o!==t&&e.classList.add("hidden")});function u(e){n[t].classList.add("hidden"),s[A(t)]=e.target.innerText,t=t+1,t<n.length&&n[t].classList.remove("hidden"),t===n.length&&(r.showPopover(),a.classList.add("show"),document.body.style.overflow="hidden")}d.addEventListener("click",()=>{console.log(s),r.hidePopover(),a.classList.remove("show"),document.body.style.overflow=""});function A(e){return Object.keys(s)[e]}i.forEach(e=>{e.addEventListener("click",u)}),m.forEach(e=>{e.addEventListener("click",()=>{const o=c.value.trim();o!==""&&(v(o),c.value="")})});const v=e=>{l.insertAdjacentHTML("afterbegin",`<div class="comment">
        <div class="comment__top">
          <a href="#!" class="comment__ava">
            <img src="${g}" alt="ava" />
          </a>
          <div class="comment__content">
            <a href="#!" class="comment__name">User <span>(not reg)</span></a>
            <p class="comment__text">${e}</p>
          </div>
        </div>
        <div class="comment__bottom">
          <a href="#!" class="comment__status">Curte·comente
            <img src="${h}" alt="like" />
            <span></span>
          </a>
          <a href="#!" class="comment__time">1 minutos antes</a>
        </div>
      </div>`)}});
