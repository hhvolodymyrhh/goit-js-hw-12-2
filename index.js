import{a as h,S as L,i as g}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function w(a,r=1){return h.defaults.baseURL="https://pixabay.com",(await h.get("/api/",{params:{key:"45653057-33cc59a572348b879eba9c5b0",q:`${a}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${r}`,per_page:15}})).data}function q(a,r){const s=a.map(({webformatURL:l,largeImageURL:e,tags:t,likes:o,views:f,comments:n,downloads:i})=>`<li class="gallery-list-item">
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
                            <p class="data-numbers">${f}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Comments</p>
                            <p class="data-numbers">${n}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Downloads</p>
                            <p class="data-numbers">${i}</p>
                        </li>
                    </ul> 
          </li>`).join("");r.insertAdjacentHTML("beforeend",s)}const x=document.querySelector("body"),z=`<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="search" />
		<button type="submit" class="btnEl">Search</button>
    </form>
    <span class="loader">Loading</span>
	  <ul class="galleryEl"></ul>
      <span class="loader-more">Loading</span>
      <button type="button" class="btnMorePostsEl">Load more</button>
</div>`;x.insertAdjacentHTML("afterbegin",z);const c=document.querySelector(".loader"),d=document.querySelector(".loader-more"),y=document.querySelector(".btnMorePostsEl");document.querySelector(".search-input");c.style.display="none";y.style.display="none";d.style.display="none";let E=new L(".galleryEl a",{caption:!0,captionDelay:250,captionsData:"alt"});const T=document.querySelector("form"),m=document.querySelector(".galleryEl");let u=1,p;async function b(a,r,s){const l=await w(a,r);try{if(l.hits.length===0){g.show({message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight",image:"./img/bi_x-octagon.svg",imageWidth:30});const e=document.querySelector(".iziToast");e.style.borderRadius="10px",e.style.overflow="hidden";const t=document.querySelector(".iziToast-cover");t.style.backgroundColor="transparent",t.style.left="10px"}else{(s==null?void 0:s.type)==="submit"?(m.innerHTML="",c.style.display="block"):d.style.display="block",q(l.hits,m);const e=m.querySelectorAll("li");if(l.totalHits<=e.length){g.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(37, 150, 190)",position:"topRight"});const i=document.querySelector(".iziToast");i.style.borderRadius="10px",i.style.overflow="hidden";const S=document.querySelector(".iziToast-wrapper");S.style.position="fixed",y.style.display="none",(s==null?void 0:s.type)==="submit"?c.style.display="none":d.style.display="none";return}E.refresh();const t=m.querySelectorAll("img");let o=0;t.forEach(i=>{i.complete?(o++,o===t.length&&((s==null?void 0:s.type)==="submit"?c.style.display="none":d.style.display="none")):i.addEventListener("load",()=>{o++,o===t.length&&((s==null?void 0:s.type)==="submit"?c.style.display="none":d.style.display="none")})});const n=document.querySelector(".gallery-list-item").getBoundingClientRect().height*2;console.log(n),window.scrollBy({top:n,behavior:"smooth"}),window.scrollBy(0,n)}}catch(e){g.show({message:`Sorry, ${e}. Please try again!`,messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight"});const t=document.querySelector(".iziToast");t.style.borderRadius="10px";const o=document.querySelector(".iziToast-wrapper");o.style.position="fixed",t.style.overflow="hidden"}}T.addEventListener("submit",a=>{a.preventDefault(),y.style.display="none",u=1,p=a.currentTarget.elements.search.value.toLowerCase().trim(),p&&(b(p,u,a),u++,y.style.display="block")});y.addEventListener("click",a=>{u++,p&&b(p,u)});
//# sourceMappingURL=index.js.map
