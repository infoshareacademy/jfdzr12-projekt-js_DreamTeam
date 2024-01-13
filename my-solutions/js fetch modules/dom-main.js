// do dokończenia (fetch działa, order jeszcze nie)

import { getPhotos, examplesPhotos } from "./dom-fetch-module.js";
import {postPhotos, clickedImage, handlerClearImgBasket, updateBasket} from "./dom-order-module.js";

const photos = document.querySelectorAll(".examples__img");
const productCard = document.getElementById("examples__photo-card");
const xBtn = document.querySelectorAll(".examples__photo-card__xBtn");
const buyBtn = document.getElementById("examples__photo-card__buyBtn");
const errorCard = document.getElementById("examples__photo-card__error");
const img = document.getElementById("examples__photo-card__img");
const formText = document.getElementById("examples__photo-card__text").innerText;
const title = document.getElementById("examples__photo-card__title");
const price = document.getElementById("examples__photo-card__price");
const tags = document.getElementById("examples__photo-card__tags");
const loc = document.getElementById("examples__photo-card__location");
const basketBtn = document.getElementById("basket");
const imgBasket = document.getElementById("images-basket");
const basketBuyBtn = document.getElementById("images-basket__buyBtn");
const discountWindow = document.getElementById("discount");
const basketProduct = document.createElement("div");
const basketValuePar = document.getElementById("images-basket__value");

getPhotos();
examplesPhotos();
postPhotos();
clickedImage();
handlerClearImgBasket();
updateBasket();

// wyświetlanie okna z iformacjami o zdjęciu przy kliknięciu na każde zdjęcie i przygotowanie obiektu z informacjami o klikniętym zdjęciu

// let clickedImageInfo;

// function clickedImage () {

//   photos.forEach(photo => photo.addEventListener("click", e => { 
//   const clickedImg = e.target.src;
//   const clickedTitle = e.target.getAttribute("data-title");
//   const clickedPrice = e.target.getAttribute("data-price");
//   const clickedTags = e.target.getAttribute("data-tags");
//   const clickedLoc = e.target.getAttribute("data-location");

//   productCard.style.display = "block";
//   productCard.addEventListener("submit", e => {
//     e.preventDefault()})

//   img.setAttribute("src", clickedImg);
//   title.innerHTML = clickedTitle;
//   price.innerHTML = clickedPrice;
//   tags.innerHTML = clickedTags;
//   loc.innerHTML = clickedLoc;

//   clickedImageInfo = {
//     title: clickedTitle,
//     price: clickedPrice,
//     tags: clickedTags,
//     location: clickedLoc,
//     source: clickedImg
//     };
//   }))
// }

// clickedImage();

// funckja aktualizująca local storage

function updateLocalStorage (imgInfo) {
  const photosToBuy = JSON.parse(localStorage.getItem("products")) || [];
  photosToBuy.push(imgInfo);
  localStorage.setItem("products", JSON.stringify(photosToBuy))
}

// klikanie w przycisk "kup" na karcie produktu

function handlerClickBuyBtn () {
  updateLocalStorage(clickedImageInfo);
  basketBtn.style.display = "block";
  productCard.style.display = "none";
}

buyBtn.addEventListener("click", handlerClickBuyBtn);

// wyłączanie okienek za pomocą klawisza escape

function handlerEscapeKeydown (e) {
  if (e.key === "Escape") {
    productCard.style.display = "none";
    errorCard.style.display = "none";
    imgBasket.style.display = "none";
    discountWindow.style.display = "none";
  }
}

document.addEventListener("keydown", handlerEscapeKeydown);

// wyłączanie okienek za pomocą guzika x

function handlerXbtnClick (e) {
  e.target.parentElement.style.display = "none";
}

xBtn.forEach(btn => btn.addEventListener("click", handlerXbtnClick));

// pobranie informacji z local storage

let productsFromLocalStorage;

function getProductsFromLocalStorage () {
  productsFromLocalStorage = JSON.parse(localStorage.getItem("products")) || [];
}

// wyczyszczenie koszyka i local storage po dokonaniu zakupu

// function handlerClearImgBasket() {
//   basketProduct.innerHTML = "";
//   imgBasket.style.display = "none";
//   basketBtn.style.display = "none";
//   localStorage.clear();
// }

// basketBuyBtn.addEventListener("click", handlerClearImgBasket);
    
// wypełnianie koszyka produktami z local storage i podliczenie wartości

// function updateBasket () {

//   imgBasket.style.display = "block";
//   basketProduct.innerHTML = ""

//   if(localStorage.length != 0) {
//     getProductsFromLocalStorage()

//   // utworzenie karty produktu dla każdego elementu w koszyku

//     productsFromLocalStorage.forEach(product => {
//     const basketImage = document.createElement("img");
//     const basketTitle = document.createElement("p");
//     const basketPrice = document.createElement("p");
//       basketProduct.appendChild(basketImage);
//       basketProduct.appendChild(basketTitle);
//       basketProduct.appendChild(basketPrice);
//       basketProduct.setAttribute("id", "basket-product")
//       basketImage.setAttribute("src", product.source)
//       basketImage.setAttribute("id", "basket-img");
//       basketTitle.setAttribute("id", "basket-title");
//       basketPrice.setAttribute("id", "basket-price");
//       basketTitle.innerHTML = product.title;
//       basketPrice.innerHTML = product.price;
//       imgBasket.prepend(basketProduct);
//     })

//     // wyliczenie i wyświetlenie wartości koszyka

//     function basketValue(products, discount = 0) {
//       let prices = products.map(product => Number(product.price));
//       let sum = prices.reduce((acc, curr) => {return acc + curr})
//       let toPay = (sum - (sum * discount)).toFixed(2);
//       basketValuePar.innerHTML = `To pay: ${toPay} $`;
//       }
    
      
//     // pobieranie rabatu z session storage

//     let discountValue;

//     function getDiscountFromSessionStorage () {
//       discountValue = JSON.parse(sessionStorage.getItem("discount")) || 0;
//     }

//     getDiscountFromSessionStorage()
//     console.log(discountValue)
      
//     basketValue(productsFromLocalStorage, discountValue);

//   }
// }

// basketBtn.addEventListener("click", updateBasket);

// dodanie okna z informacją i zegarem przed opuszczeniem strony przez użytkownika

function timer () {
  discountWindow.style.display = "block";
  const timer = document.getElementById("clock");

  let minutes = 0;
  let seconds = 0;

    function updateClock() {
      seconds++;
      if(seconds === 60) {
        seconds = 0;
        minutes++
        if(minutes === 60) {
          minutes = 0;
        }
      }
    const formatMinutes = String(minutes).padStart(2, "0");
    const formatSeconds = String(seconds).padStart(2, "0");
    const formatTime = `${formatMinutes}:${formatSeconds}`

    timer.textContent = formatTime;
    };

  const intervalId = setInterval(updateClock, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    discountWindow.style.display = "none";
  }, 10000)
}

const timerWindow = setTimeout(() => {
  timer();
  setDiscountToSessionStorage(discountValue);
}, 10000);

// wysłanie rabatu czasowego do session storage

const discountValue = 0.10;

function setDiscountToSessionStorage (discountValue) {
  sessionStorage.setItem("discount", discountValue);
  setTimeout(() => {
    sessionStorage.removeItem("discount");
  }, 60000);
  }
  




