import{a as n,S as g,i as d}from"./assets/vendor-CRCB-GUD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function y(r){return n.defaults.baseURL="https://pixabay.com",console.log(n.defaults.headers),n.get("/api/",{params:{key:"25786434-348adb767e319176b4ad356ea",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function f(r,o){const a=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:l,views:u,comments:m,downloads:p})=>`<li class="gallery-list-item">
                    <a class="gallery-link" href="${e}">
                        <img class="img" src="${s}" 
                        alt="${t}" 
                        title="${t}" />
                    </a>
                    <ul class="data-list">
                        <li class="data-item">
                            <p class="data-item-name">Likes</p>
                            <p class="data-numbers">${l}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Views</p>
                            <p class="data-numbers">${u}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Comments</p>
                            <p class="data-numbers">${m}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Downloads</p>
                            <p class="data-numbers">${p}</p>
                        </li>
                    </ul> 
          </li>`).join("");o.insertAdjacentHTML("beforeend",a)}const h=document.querySelector("body"),b=`<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="search" />
		<button class="btnEl">Search</button>
    </form>
    <span class="loader">Loading</span>
	  <ul class="galleryEl"></ul>
</div>`;h.insertAdjacentHTML("afterbegin",b);const i=document.querySelector(".loader");i.style.display="none";let S=new g(".galleryEl a",{caption:!0,captionDelay:250,captionsData:"alt"});const L=document.querySelector("form"),c=document.querySelector(".galleryEl");L.addEventListener("submit",r=>{r.preventDefault();const o=r.currentTarget.elements.search.value.toLowerCase().trim();y(o).then(a=>{if(console.log(a.data),a.data.hits.length===0){d.show({message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight",image:"./img/bi_x-octagon.svg",imageWidth:30});const s=document.querySelector(".iziToast");s.style.borderRadius="10px",s.style.overflow="hidden";const e=document.querySelector(".iziToast-cover");e.style.backgroundColor="transparent",e.style.left="10px"}else{c.innerHTML="",i.style.display="block",f(a.hits,c),S.refresh();const s=c.querySelectorAll("img");let e=0;s.forEach(t=>{t.complete?(e++,e===s.length&&(i.style.display="none")):t.addEventListener("load",()=>{e++,e===s.length&&(i.style.display="none")})})}}).catch(a=>{d.show({message:`Sorry, ${a}. Please try again!`,messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight"});const s=document.querySelector(".iziToast");s.style.borderRadius="10px",s.style.overflow="hidden"})});
//# sourceMappingURL=index.js.map
