// підключення бібліотеки axios https://axios-http.com/docs/intro
import axios from 'axios';

//3 функція вилучення  https://pixabay.com/ru/users/45653057/
export function gettingData(inputSearch) {
 
    // базова адреса для звернень
    axios.defaults.baseURL = "https://pixabay.com";
   
   /* const myApiKey = "25786434-348adb767e319176b4ad356ea";
    //заголовок що однаковий для всіх запитів
    axios.defaults.headers.common["key"] = myApiKey;*/

    console.log(axios.defaults.headers)
     return axios.get(
        "/api/", {
            params: {
    key:"25786434-348adb767e319176b4ad356ea",
    q: `${inputSearch}`,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
        }
    });
}