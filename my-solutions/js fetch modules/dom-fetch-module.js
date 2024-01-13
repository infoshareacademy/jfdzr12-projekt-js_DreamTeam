// Widok portfolio powinien zawierać dynamiczne zdjęcia, których listę otrzymujemy w odpowiedzi serwera.

// Do wykonania zadania niezbędne będzie zainstalowanie json-server i uruchomienie go z bazą danych w pliku db.json zawierającym przykładowy zestaw zdjęć.

// Przykładowe uruchomienie serwera:

// json-server db.json

// Przykładowe zapytanie HTTP:

// GET http://localhost:3000/photos

// działa (Live server)

function getPhotos () {
    fetch("http://localhost:3000/photos")
    .then(res => {
        if(res.ok) {
            return res.json();
        }

        throw new Error("Sometnig went wrong")
    })
    .then(photos => examplesPhotos(photos))
    .catch(error => console.log(error))
}

function examplesPhotos(photos) {
   
    const photosExamples = document.getElementById("examples__galery");
    photosExamples.innerHTML = "";
    photos.forEach(element => {
        const example = document.createElement("img");
        example.setAttribute("class", "examples__img");
        example.setAttribute("src", element.url);
        example.setAttribute("id", element.id);
        example.setAttribute("data-price", element.price)
        photosExamples.appendChild(example);
    }); 
}

export {getPhotos, examplesPhotos}