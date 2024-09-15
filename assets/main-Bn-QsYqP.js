const p=""+new URL("user-C74RHy00.png",import.meta.url).href,f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAMAAADHVLbdAAAAsVBMVEUAAAD////+/v9cbaA7SIMAAGkAAEfQ0dvFx9L///9UYpWrr719gp09S4WOkap1eps8SYVGUoU1RH8AAAAnJzrU1d0AOIYhQot6fpxda52OkqmeobKprLuOkqiRlaqYm7KOkaiCh6R/g56RlKw+TIYAJndeZI9UXIoiNXwAADYAAFb////6+vv39/nx8vfx8vPt7vBWaaVRZJ5FXJvk5evW1+OxtMVjda5rfKxOYZwaQIkwPe6+AAAAK3RSTlMA+/74ckYU/v738vGwopiReGJFEgf++/rt39XLyr+3tbKwoZ2UhX96aT07316N3wAAAIVJREFUCNd1z8cOgzAQBFAvBNNDKOm9lzEtpP//h8UoF0eCPe0baQ7D2s6I/nl3Y9VLzBKF5z6835fwmDO2hpicQi4dOmNnH9xAWZoF0r3nq3oAGmBjK9156wOThEwI3dpX/WORpnpoISUiW2zqfllWo6lb5EVuHqUjf+cb7OItVvNDw4wvNOoLywc/rb4AAAAASUVORK5CYII=";document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".question"),i=document.querySelectorAll(".question__btn"),l=document.querySelectorAll(".reviews__btn"),c=document.querySelector(".reviews__textarea"),A=document.querySelector(".reviews__comment-container"),r=document.querySelector(".popover"),d=document.querySelector(".submit-btn"),a=document.querySelector(".overlay");let t=0;const s={first:"",second:"",third:"",fourth:""};n.forEach((e,o)=>{const h=e.querySelector(".question__count");h.innerText=`${o+1} / ${n.length}`,o!==t&&e.classList.add("hidden")});function m(e){n[t].classList.add("hidden"),s[u(t)]=e.target.innerText,t=t+1,t<n.length&&n[t].classList.remove("hidden"),t===n.length&&(r.showPopover(),a.classList.add("show"),document.body.style.overflow="hidden")}d.addEventListener("click",()=>{console.log(s),r.hidePopover(),a.classList.remove("show"),document.body.style.overflow=""});function u(e){return Object.keys(s)[e]}i.forEach(e=>{e.addEventListener("click",m)}),l.forEach(e=>{e.addEventListener("click",()=>{const o=c.value.trim();o!==""&&(v(o),c.value="")})});const v=e=>{A.insertAdjacentHTML("afterbegin",`<div class="comment">
        <div class="comment__top">
          <a href="#!" class="comment__ava">
            <img src="${p}" alt="ava" />
          </a>
          <div class="comment__content">
            <a href="#!" class="comment__name">User <span>(not reg)</span></a>
            <p class="comment__text">${e}</p>
          </div>
        </div>
        <div class="comment__bottom">
          <a href="#!" class="comment__status">Curte·comente
            <img src="${f}" alt="like" />
            <span></span>
          </a>
          <a href="#!" class="comment__time">1 minutos antes</a>
        </div>
      </div>`)}});
