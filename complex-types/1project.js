//1. Dodanie wartości brutto produktu
// Napisz funkcję, która dla listy produktów zwróci nową tablicę produktów z wyliczoną wartością brutto 
// dla każdego z nich. Wejściowa lista nie powinna zostać zmieniona.

// Przykład działania dla pojedynczego produktu

const item = {
  name: 'Candy',
  value: 2,
}

const item2 = {
    name: 'Bananas',
    value: 5,
  }

function enrichWithGrossValue (item, vat) {
    const priceBrutto = item.value * vat + item.value;
        
    
        
    return { name: item.name, value: { net: item.value, gross: priceBrutto } };
    }

console.log(enrichWithGrossValue(item2, 0.23));

// enrichWithGrossValue(item, 0.23) // { name: 'Candy', value: { net: 2, gross: 2.46 } }
















// function enrichWithGrossValue (array) {
//     const priceBrutto = [];

//     for

//     return priceBrutto;
// }

// const priceBrutto = enrichWithGrossValue(item);
// console.log(priceBrutto)

// const items = [
//     {name: 'Candy', value: 1},
//     {name: 'Rum', value: 2},
//     {name: 'Apple', value: 3}
//     ];

// function enrichWithGrossValue () {
//     const priceBrutto = [];
        
    
        
//     return priceBrutto;
//     }