//імпорт бібліотек НА ПОЧАТКУ!
//iziToast ДЛЯ виведення повідомлень сайт https://www.npmjs.com/package/izitoast https://marcelodolza.github.io/iziToast/
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
//simplelightbox ДЛЯ відтворення великих картинок https://www.npmjs.com/package/simplelightbox
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// підключення бібліотеки axios https://axios-http.com/docs/intro
import axios from 'axios';

//імпорт з сусідніх файлів дж ес
import { gettingData } from './js/pixabay-api.js';
import { renderData } from './js/render-functions.js';

// ключ що прриходить на https://pixabay.com

//1.створення форми для пошуку та результуючого ul картинок
const bodySelect = document.querySelector("body");
const firstHtml = 
`<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="search" />
		<button class="btnEl">Search</button>
    </form>
    <span class="loader">Loading</span>
	  <ul class="galleryEl"></ul>
</div>`;

bodySelect.insertAdjacentHTML("afterbegin", firstHtml)
//0 завантажувач
const loader = document.querySelector(".loader");
 //0 прибирання з виду завантажувача
loader.style.display = 'none';
// створення вигляду для бібліотеки що відкрива картинки                  
let gallery = new SimpleLightbox('.galleryEl a', {
                    caption: true,
                    captionDelay: 250,
                    captionsData: 'alt',
                    });

//2 функія для отримання фото
const gettingUserForm = document.querySelector("form");
const userList = document.querySelector(".galleryEl");

gettingUserForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const thisInputSearch = event.currentTarget.elements.search.value.toLowerCase().trim();
    
   /*
      if (!thisInputSearch) {
        return
    };
    */

    gettingData(thisInputSearch)
        .then((comingsImg) => {
            console.log(comingsImg.data)
                
           if (comingsImg.data.hits.length === 0) {
                //попередження .......IZITOST.......
                //alert("Sorry, there are no images matching your search query. Please try again!");
                 iziToast.show({
                message: "Sorry, there are no images matching <br> your search query. Please try again!",
                messageColor: "#000",
                messageSize: "18px",
                messageLineHeight: "20px",
                backgroundColor: "rgb(255,153,102)",
                position: "topRight", 
                image: './img/bi_x-octagon.svg',
                imageWidth: 30,
                 });
                 // добавити скруглення для iziToast
            const iziToastElStyle = document.querySelector(".iziToast");
            iziToastElStyle.style.borderRadius = '10px';
                iziToastElStyle.style.overflow = 'hidden';
                //добавить стилі на іконку в ізітост
                 const iziToastImgStyle = document.querySelector(".iziToast-cover");
            iziToastImgStyle.style.backgroundColor = 'transparent';
                iziToastImgStyle.style.left = "10px";
                 
            } else {


                //очистка попереднього вмісту карток та створення нових ".galleryEl"                
                userList.innerHTML = '';
                //0 завантажувач видимий
                    loader.style.display = 'block';
                renderData(comingsImg.hits, userList);
                 
                   //метод для оновлення бібліотеки
                gallery.refresh() 
                 //0 Перевірте завантаження всіх зображень
           const images = userList.querySelectorAll('img');
            let loadedImagesCount = 0;

            images.forEach(img => {
                if (img.complete) {
                    loadedImagesCount++;
                    if (loadedImagesCount === images.length) {
                        // Сховати індикатор завантаження після завантаження всіх картинок
                        loader.style.display = 'none';
                    } 
                } else {
                    img.addEventListener('load', () => {
                        loadedImagesCount++;
                        if (loadedImagesCount === images.length) {
                            // Сховати індикатор завантаження після завантаження всіх картинок
                            loader.style.display = 'none';
                        } 
                    });
                }
            });//0


             }
            

        })
        .catch((error) => {
            //попередження .......IZITOST.......
                //alert(`Sorry, ${error}. Please try again!`);
                 iziToast.show({
                message: `Sorry, ${error}. Please try again!`,
                messageColor: "#000",
                messageSize: "18px",
                messageLineHeight: "20px",
                backgroundColor: "rgb(255,153,102)",
                position: "topRight",              
                 });
                 // добавити скруглення для iziToast
            const iziToastElStyle = document.querySelector(".iziToast");
            iziToastElStyle.style.borderRadius = '10px';
                iziToastElStyle.style.overflow = 'hidden';
        }) 
});