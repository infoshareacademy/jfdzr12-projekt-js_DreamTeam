// Korzystając z formularza utworzonego w zadaniu Formularze i Storage API – Złożenie zamówienia, wyślij zamówienie do serwera po kliknięciu przycisku zakupu.

// W tym celu tworzona została pusta kolekcja orders w pliku db.json.

// Przykładowe zapytanie HTTP:

// POST http://localhost:3000/orders
// Content-Type: application/json

// {
//   "items": [{
//     "id": "10"
//   }, {
//     "id": "12",
//     "discount": 0.1
//   }]
// }



// do dokończenia



import { examplesPhotos } from "./dom-fetch-module.js";

function postPhotos (imgInfo) {
    fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(imgInfo)
    })
    .then(res => {
        if(res.ok) {
            return res.json();
        }

        throw new Error("Something went wrong");
    })
    .then(imgInfo => console.log(imgInfo))
    .catch(error => console.log(error))
}

function getPhotos () {
    fetch("http://localhost:3000/orders")
    .then(res => {
        if(res.ok) {
            return res.json();
        }

        throw new Error("Sometnig went wrong")
    })
    .then(photos => updateBasket(photos))
    .catch(error => console.log(error))
}

const photos = document.querySelectorAll(".examples__img");
const productCard = document.getElementById("examples__photo-card");
// const xBtn = document.querySelectorAll(".examples__photo-card__xBtn");
// const buyBtn = document.getElementById("examples__photo-card__buyBtn");
// const errorCard = document.getElementById("examples__photo-card__error");
const img = document.getElementById("examples__photo-card__img");
// const formText = document.getElementById("examples__photo-card__text").innerText;
// const title = document.getElementById("examples__photo-card__title");
const price = document.getElementById("examples__photo-card__price");
const tags = document.getElementById("examples__photo-card__tags");
// const loc = document.getElementById("examples__photo-card__location");
const basketBtn = document.getElementById("basket");
const imgBasket = document.getElementById("images-basket");
const basketBuyBtn = document.getElementById("images-basket__buyBtn");
// const discountWindow = document.getElementById("discount");
const basketProduct = document.createElement("div");
const basketValuePar = document.getElementById("images-basket__value");

getPhotos();
examplesPhotos();
// wyświetlanie okna z iformacjami o zdjęciu przy kliknięciu na każde zdjęcie i przygotowanie obiektu z informacjami o klikniętym zdjęciu

let clickedImageInfo;

function clickedImage () {

  photos.forEach(photo => photo.addEventListener("click", e => { 
  const clickedImg = e.target.src;
//   const clickedTitle = e.target.getAttribute("data-title");
  const clickedPrice = e.target.getAttribute("data-price");
  const clickedId = e.target.getAttribute("data-id");
//   const clickedLoc = e.target.getAttribute("data-location");

  productCard.style.display = "block";
  productCard.addEventListener("submit", e => {
    e.preventDefault()})

  img.setAttribute("src", clickedImg);
//   title.innerHTML = clickedTitle;
  price.innerHTML = clickedPrice;
  tags.innerHTML = clickedId;
//   loc.innerHTML = clickedLoc;

  clickedImageInfo = {
    // title: clickedTitle,
    price: clickedPrice,
    id: clickedId,
    // location: clickedLoc,
    source: clickedImg
    };
  }))
}

clickedImage();

// wysyłanie danych o klikniętym elemencie na serwer

postPhotos(clickedImageInfo)

// wyczyszczenie koszyka i local storage po dokonaniu zakupu

function handlerClearImgBasket() {
  basketProduct.innerHTML = "";
  imgBasket.style.display = "none";
  basketBtn.style.display = "none";
//   localStorage.clear();
}

basketBuyBtn.addEventListener("click", handlerClearImgBasket);
    
// wypełnianie koszyka produktami z local storage i podliczenie wartości

function updateBasket (photos) {

  imgBasket.style.display = "block";
  basketProduct.innerHTML = ""

  // utworzenie karty produktu dla każdego elementu w koszyku

    photos.forEach(product => {
    const basketImage = document.createElement("img");
    const basketId = document.createElement("p");
    const basketPrice = document.createElement("p");
      basketProduct.appendChild(basketImage);
      basketProduct.appendChild(basketId);
      basketProduct.appendChild(basketPrice);
      basketProduct.setAttribute("id", "basket-product")
      basketImage.setAttribute("src", product.url)
      basketImage.setAttribute("id", "basket-img");
      basketId.setAttribute("id", "basket-id");
      basketPrice.setAttribute("id", "basket-price");
      basketId.innerHTML = product.id;
      basketPrice.innerHTML = product.price;
      imgBasket.prepend(basketProduct);
    })

    // wyliczenie i wyświetlenie wartości koszyka

    function basketValue(products, discount = 0) {
      let prices = products.map(product => Number(product.price));
      let sum = prices.reduce((acc, curr) => {return acc + curr})
      let toPay = (sum - (sum * discount)).toFixed(2);
      basketValuePar.innerHTML = `To pay: ${toPay} $`;
      }
    
    // pobieranie rabatu z session storage

    let discountValue;

    function getDiscountFromSessionStorage () {
      discountValue = JSON.parse(sessionStorage.getItem("discount")) || 0;
    }

    getDiscountFromSessionStorage()
    console.log(discountValue)
      
    basketValue(photos, discountValue);

  }

basketBtn.addEventListener("click", updateBasket); 

export {postPhotos, clickedImage, handlerClearImgBasket, updateBasket}