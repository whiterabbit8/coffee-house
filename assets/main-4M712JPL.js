import{m as x,t as _,n as b,c as q}from"./burgerMenu-Ni4sExbd.js";const X=document.querySelector(".prev-btn"),k=document.querySelector(".next-btn"),n=document.querySelector(".slider__current"),s=document.querySelector(".slider__content"),p=document.querySelectorAll(".slider__timer"),v=document.querySelectorAll(".slider__control"),i=550,f=5e3;let t=0,a,L,d,u;const E=()=>{v.forEach(e=>{e.classList.remove("active")}),v[t].classList.add("active")},c=()=>{if(t===2)n.style.left="0",t=0;else{let e=Number(n.style.left.replace("px",""));n.style.left=`${e-=i}px`,t+=1}E(),w()},h=()=>{if(t===0)n.style.left=`-${i*2}px`,t=2;else{let e=Number(n.style.left.replace("px",""));n.style.left=`${e+=i}px`,t-=1}E(),w()},y=(e,D)=>{const r=e-D;Math.abs(r)>100&&r>0?c():Math.abs(r)>100&&r<0&&h()},m=()=>{d=Date.now(),u=f,a=setInterval(c,f)},S=()=>{p[t].classList.add("paused"),clearInterval(a),clearTimeout(L),u-=Date.now()-d},T=()=>{p[t].classList.remove("paused"),L=setTimeout(()=>{d=Date.now(),c()},u),m()},w=()=>{clearInterval(a),m()};let o,l;window.onload=()=>m();s.addEventListener("mouseover",S);s.addEventListener("mouseleave",T);s.addEventListener("touchstart",e=>{e.preventDefault(),S()});s.addEventListener("touchend",T);x.addEventListener("click",_);b.addEventListener("click",q);k.addEventListener("click",c);X.addEventListener("click",h);s.addEventListener("mousedown",e=>{e.preventDefault(),o=e.clientX});s.addEventListener("mouseup",e=>{l=e.clientX,y(o,l)});s.addEventListener("touchstart",e=>{o=e.touches[0].clientX});s.addEventListener("touchend",e=>{l=e.changedTouches[0].clientX,y(o,l)});
