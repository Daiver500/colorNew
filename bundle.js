(()=>{"use strict";(()=>{const e=document.querySelectorAll(".button"),t=document.querySelector(".modal"),s=document.querySelector(".page"),o=document.querySelector(".modal__close"),n=document.querySelector(".modal-success__close"),d=document.querySelector(".modal__form"),l=document.querySelector(".modal__phone"),c=document.querySelector(".modal__name"),i=document.querySelector(".modal-success"),r=e=>{"Escape"===e.code&&L()},u=e=>{e.target===t&&L()},a=()=>{t.classList.remove("hidden"),document.addEventListener("click",u),document.addEventListener("keydown",r),s.classList.add("no-scroll"),S(),c.addEventListener("input",b),c.addEventListener("focusin",m),c.addEventListener("focusout",v),l.addEventListener("input",w),l.addEventListener("focusin",m),l.addEventListener("focusout",v),d.addEventListener("submit",p)},m=()=>{document.removeEventListener("keydown",r)},v=()=>{document.addEventListener("click",u)},L=()=>{t.classList.add("hidden"),document.removeEventListener("click",u),document.removeEventListener("keypress",r),s.classList.remove("no-scroll"),c.removeEventListener("input",b),c.removeEventListener("focusin",m),c.removeEventListener("focusout",v),l.removeEventListener("focusin",m),l.removeEventListener("focusout",v),l.removeEventListener("input",w),d.removeEventListener("submit",p),l.value="",c.style.outline="",c.style.background=""};e.forEach((e=>{e.addEventListener("click",a)})),o&&o.addEventListener("click",L);const y=e=>{"Escape"===e.code&&k()},E=e=>{e.target===i&&k()},k=()=>{i.classList.add("hidden"),document.removeEventListener("click",E),document.removeEventListener("keypress",y),s.classList.remove("no-scroll")};n&&n.addEventListener("click",k);const p=e=>{e.preventDefault(),""===l.value?l.setCustomValidity("Заполните, пожалуйста, номер"):(l.setCustomValidity(""),L(),i.classList.remove("hidden"),document.addEventListener("click",E),document.addEventListener("keydown",y),s.classList.add("no-scroll")),l.reportValidity(),h()};IMask(l,{mask:"+{7}(000)000-00-00"});let g=!0,f="";try{f=localStorage.getItem("login")}catch(e){g=!1}const h=()=>{g&&localStorage.setItem("login",c.value)},S=()=>{f?(c.value=f,l.focus()):c.focus()},V=/^[A-zА-яЁё]+$/,_="Укажите, пожалуйста, имя",q="Заполните, пожалуйста, имя на кириллице или латинице",C="Слишком много букв",b=()=>{const e=c.value.toLowerCase().split(" ").every((e=>V.test(e)));c.setCustomValidity(""),e||(c.setCustomValidity(q),c.style.outline="2px solid red",c.style.background="pink"),c.value.length>10&&c.setCustomValidity(C),""===c.value&&c.setCustomValidity(_),c.reportValidity(),e||""===c.value||!c.value.length>10?(c.style.outline="",c.style.background=""):(c.style.outline="2px solid red",c.style.background="pink")},w=()=>{l.value.length<16&&l.value.length>1?l.setCustomValidity("Номер должен быть из 10 цифр"):l.setCustomValidity(""),l.reportValidity()}})()})();