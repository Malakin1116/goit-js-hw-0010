import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as l,i as a}from"./assets/vendor-77e16229.js";const s=document.querySelector("[data-days]"),r=document.querySelector("[data-hours]"),c=document.querySelector("[data-minutes]"),i=document.querySelector("[data-seconds]"),d=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]");n.disabled=!0;const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=new Date?(a.error({title:"Ошибка",message:"Оберіть дату у майбутньому"}),n.disabled=!0):(n.disabled=!1,a.success({title:"Готово",message:"Готово, натискайте START"}))}};l(d,m);n.addEventListener("click",f);function f(){n.disabled=!0;const t=new Date(d.value),u=setInterval(()=>{let e=t-new Date;if(e<=0){clearInterval(u),a.success({title:"Время вышло",message:"Час вийшов"}),s.textContent="0",r.textContent="0",c.textContent="0",i.textContent="0";return}s.textContent=o(Math.floor(e/1e3/60/60/24)),r.textContent=o(Math.floor(e/1e3/60/60%24)),c.textContent=o(Math.floor(e/1e3/60%60)),i.textContent=o(Math.floor(e/1e3%60))},1e3)}const o=t=>t<10?`0${t}`:`${t}`;
//# sourceMappingURL=commonHelpers.js.map
