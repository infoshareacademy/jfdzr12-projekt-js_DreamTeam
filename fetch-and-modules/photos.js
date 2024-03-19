
export const fetchPhotos = () => {
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
          console.error(e);
      })
};
// window.fetchPhotos = fetchPhotos;

const listPhotos = (photos) => {
    const examples = document.getElementsByClassName("examples__galery")
    console.log("examples", examples)
    examples.innerHTML = "";
    photos
      .filter((photo) => {
        return photo.url;
      })
      .forEach((photo) => {
        const photoElement = document.createElement("li");
        photoElement.innerHTML = `${photo.url}`;
        examples.appendChild(photoElement);
      });
  };