
const fetchPhotos = () => {
    toggleLoader(true);

    fetch("http://localhost:3000/photos")
      .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Something went wrong');
      })
      .then((photos) => {
        listPhotos(photos);
      })
      .catch((e) => {
          toast(e);
      }).finally(() => {
        toggleLoader(false);
      })
};

export { fetchPhotos }

const listPhotos = (photos) => {
    photoList.innerHTML = "";
    photos
      .filter((photo) => {
        return photo.url;
      })
      .forEach((photo) => {
        const photoElement = document.createElement("li");
        photoElement.innerHTML = `${photo.url} <button onclick="removeCustomer(${customer.id})">Usuń</button><button onclick="updateCustomer(${customer.id})">Aktualizuj</button>`;
        photoList.appendChild(photoElement);
      });
  };