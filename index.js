import{a as f,S,i as g}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function L(a,r=1){return f.defaults.baseURL="https://pixabay.com",(await f.get("/api/",{params:{key:"45653057-33cc59a572348b879eba9c5b0",q:`${a}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${r}`,per_page:15}})).data}function q(a,r){const s=a.map(({webformatURL:l,largeImageURL:e,tags:t,likes:o,views:i,comments:m,downloads:b})=>`<li class="gallery-list-item">
                    <a class="gallery-link" href="${e}">
                        <img class="img" src="${l}" 
                        alt="${t}" 
                        title="${t}" />
                    </a>
                    <ul class="data-list">
                        <li class="data-item">
                            <p class="data-item-name">Likes</p>
                            <p class="data-numbers">${o}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Views</p>
                            <p class="data-numbers">${i}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Comments</p>
                            <p class="data-numbers">${m}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Downloads</p>
                            <p class="data-numbers">${b}</p>
                        </li>
                    </ul> 
          </li>`).join("");r.insertAdjacentHTML("beforeend",s)}const w=document.querySelector("body"),x=`<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="search" />
		<button type="submit" class="btnEl">Search</button>
    </form>
    <span class="loader">Loading</span>
	  <ul class="galleryEl"></ul>
      <span class="loader-more">Loading</span>
      <button type="button" class="btnMorePostsEl">Load more</button>
</div>`;w.insertAdjacentHTML("afterbegin",x);const c=document.querySelector(".loader"),d=document.querySelector(".loader-more"),n=document.querySelector(".btnMorePostsEl");document.querySelector(".search-input");c.style.display="none";n.style.display="none";d.style.display="none";let z=new S(".galleryEl a",{caption:!0,captionDelay:250,captionsData:"alt"});const E=document.querySelector("form"),y=document.querySelector(".galleryEl");let u=1,p;async function h(a,r,s){const l=await L(a,r);try{if(l.hits.length===0){n.style.display="none",g.show({message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight",image:"./img/bi_x-octagon.svg",imageWidth:30});const e=document.querySelector(".iziToast");e.style.borderRadius="10px",e.style.overflow="hidden";const t=document.querySelector(".iziToast-cover");t.style.backgroundColor="transparent",t.style.left="10px"}else{(s==null?void 0:s.type)==="submit"?(y.innerHTML="",c.style.display="block"):d.style.display="block",q(l.hits,y);const e=y.querySelectorAll("li");if(l.totalHits<=e.length){g.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(37, 150, 190)",position:"topRight"});const i=document.querySelector(".iziToast");i.style.borderRadius="10px",i.style.overflow="hidden";const m=document.querySelector(".iziToast-wrapper");m.style.position="fixed",n.style.display="none",(s==null?void 0:s.type)==="submit"?c.style.display="none":d.style.display="none";return}z.refresh();const t=y.querySelectorAll("img");let o=0;t.forEach(i=>{i.complete?(o++,o===t.length&&((s==null?void 0:s.type)==="submit"?c.style.display="none":d.style.display="none")):i.addEventListener("load",()=>{o++,o===t.length&&((s==null?void 0:s.type)==="submit"?c.style.display="none":d.style.display="none")})})}}catch(e){g.show({message:`Sorry, ${e}. Please try again!`,messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight"});const t=document.querySelector(".iziToast");t.style.borderRadius="10px";const o=document.querySelector(".iziToast-wrapper");o.style.position="fixed",t.style.overflow="hidden"}}E.addEventListener("submit",a=>{if(a.preventDefault(),n.style.display="none",u=1,p=a.currentTarget.elements.search.value.toLowerCase().trim(),!p){n.style.display="none";return}h(p,u,a),u++,n.style.display="block"});n.addEventListener("click",a=>{if(u++,!p)return;h(p,u);const s=document.querySelector(".gallery-list-item").getBoundingClientRect().height*2;a.type==="click"&&window.scrollBy({top:s,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
