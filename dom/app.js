const image = document.querySelectorAll(".examples__img");
const magicBox = document.getElementById("magicBox");

image.forEach((image) => {
  image.addEventListener("click", (e) => {
    const title = "przykładowy tytuł";
    const tags = "przykładowe tagi: tag 1, tag 2";
    const location = "przykładowa lokalizacja";
    const productCard = document.createElement("div");
    const infoWindow = document.createElement("div");
    productCard.classList.add("product_card");
    productCard.innerHTML = `
        <h2>${title}</h2>
        <p>${tags}</p>
        <p>${location}</p>
        <button class="closeBtn">x</button>
        <button class="buyBtn">Buy for $10</button>`;
    magicBox.appendChild(productCard);

    const buyBtn = document.querySelector(".buyBtn");
    buyBtn.addEventListener("click", () => {
      magicBox.removeChild(productCard);
      infoWindow.innerHTML = `
    <p>Could not proceed your order. Please try again later</p>
    <button class="closeBtn">x</button>`;
      magicBox.appendChild(infoWindow);
      const infoCloseBtn = infoWindow.querySelector(".closeBtn");
      infoCloseBtn.addEventListener("click", () => {
        magicBox.removeChild(infoWindow);
      });
    });

    const closeBtn = document.querySelector(".closeBtn");
    closeBtn.addEventListener("click", () => {
      magicBox.removeChild(productCard);
    });
  });
});
