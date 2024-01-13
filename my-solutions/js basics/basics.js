// wypisz ze zdania słowa rozpoczynające się hashtagami

let sentence = "Moje zdanie z #różnymi #moimi z #hashtagami bla #lalala";

function getHashtagWords(sentence) {
    const sentenceArray = sentence.split(" ");
    const hashtag = "#";
    return sentenceArray.filter(words => {return words.includes(hashtag)})
}

const hashtagWords = getHashtagWords(sentence);
console.log(hashtagWords)



// wypisz w postaci PascalCase napisy w formacie `camelCase`, `PascalCase`, `snake_case` lub `kebab-case`

let format = "monika-Pławska-Wilk"

function getPascalCase(format) {
    const array = format.split("").filter(letter => {return letter !== "-" && letter !== "_"});
    array[0] = array[0].toUpperCase();
    return array.join("")
}

const pascalCase = getPascalCase(format);
console.log(pascalCase)



// stwórz generator silnego hasła, zawierającego co najmniej po 1:
// małej literze
// wielkiej literze
// cyfrze
// znaku specjalnym
// o długości 12 znaków
// generator powinien umożliwiać zmodyfikowanie w 1 linii:
// minimalnej liczby znaków z wybranych grup
// długości hasła

// createPassword({minLowerCase: 2, minNumbers: 3, minLength: 16, exclude: ['specials']})
// ```
// Funkcja powinna każdorazowo zwracać inne hasło.
// {minLowerCase: 2, minNumbers: 3, minLength: 16, exclude: ['specials']}

const lowerCases = 'abcdefghijklmnopqrstuvwxyz';
const upperCases =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?/';

const parameters = 
  {minUpperCases: 2,
  minLowerCases: 4,
  minNumbers: 2,
  minSpecialChars: 2,
  minLength: 12,
  }


function createPassword() {

}

// do dokończenia



// Napisz funkcję, która dla listy produktów zwróci nową tablicę produktów z wyliczoną wartością brutto dla każdego z nich.
// Wejściowa lista nie powinna zostać zmieniona.
// Przykład dla 1 produktu

// const item = {
//   name: 'Candy',
//   value: 2,
// }
// enrichWithGrossValue(item, 0.23) // { name: 'Candy', value: { net: 2, gross: 2.46 } }

const items = [
  {
    name: 'Candy',
    value: 2,
  },
  {
    name: 'Fruits',
    value: 3,
  }
]

function enrichWithGrossValue(products, gross) {
  const newValue = products.map(({name, value}) => ({name, value: {netto: value, brutto: value*gross}}));
  return newValue
}

const itemsWithNewValue = enrichWithGrossValue(items, 1.23);
console.log(itemsWithNewValue);




// Napisz funkcję, która do listy zamawianych produktów doda nowy.

// addToBasket(basket, {name: 'Lolipop', value: 1.78})

function addToBasket(basket, newProduct) {
  let newBasket = [...basket, newProduct]
  return newBasket
}

const newItem =
{name: 'Lolipop', value: 1.78}

const newItems = addToBasket(items, newItem);
console.log(newItems);



// Napisz funkcję, która doda do koszyka produkty z poprzedniego zamówienia; nie powinno ono zostać zmienione.
// addToBasket(basket, recentOrder)

const recentOrder = {
  date: '2023-11-05',
  products: [{
    name: 'Candy',
    value: 2,
  },
  {
    name: 'Vegetables',
    value: 4,
  }]
}

const basket = [{
  name: 'Lolipop',
  value: 1.78,
}]

function newOrder(basket, recentOrder) {
  const newBasket = [...basket];
  const recentProducts = recentOrder.products;
  recentProducts.forEach(product => newBasket.push(product));
  return newBasket
  }

const newBasket = newOrder(basket, recentOrder);
console.log(newBasket)



// Napisz funkcję, która dla listy zamawianych produktów zwróci całkowitą wartość zamówienia (kwotę do zapłaty).
// Funkcja powinna pozwolić na uwzględnienie rabatu.
// Przykładowy produkt:

const item = [
{
  name: 'Candy',
  value: {
    net: 1,
    gross: 1.23,
  }
},
{
  name: 'Candy',
  value: {
    net: 1,
    gross: 1.23,
  }
},
{
  name: 'Papers',
  value: {
    net: 5,
    gross: 1.23,
  }
}

]

function totalPrice(basket, discount = 0) {
  const values = basket.map(product => product.value)
  const numbers = values.map(({net, gross}) => Object.values({net}) * Object.values({gross}))
  const sum = ((numbers.reduce((acc, curr) => {return acc + curr})))
  const price = (sum - (sum * discount)).toFixed(2)
  return price;
}

const toPay = totalPrice(item, 0.25);
console.log(toPay)