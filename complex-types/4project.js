// 4. Kalkulator wartości zamówienia
// Napisz funkcję, która dla listy zamawianych produktów zwróci całkowitą wartość zamówienia (kwotę do zapłaty).
//  Funkcja powinna pozwolić na uwzględnienie rabatu.
// Przykładowy produkt:

// const item = {
//   name: 'Candy',
//   value: {
//     net: 1,
//     gross: 1.23,
//   }
// }

// const item2 = {
//     name: 'Banana',
//     value: {
//       net: 1,
//       gross: 1.23,
//     }
//   }

// function calc(brutto1, brutto2, discount) {

//     const add = item.value.gross + item2.value.gross
//     const Disc = (brutto1.value.gross + brutto2.value.gross)*discount
//     // const addWithDisc = add - Disc
//     return add - Disc;
// }

// console.log(calc(item, item2, 0.2));

const items = [
    {name: 'Candy',
      value: {
        net: 1,
        gross: 1.23,
      }},
    {name: 'Rum', 
     value: {
        net: 1,
        gross: 1.23,
      }},
    ];

// const items = [
//     {name: 'Candy', value: 1},
//     {name: 'Rum', value: 2},
//     {name: 'Apple', value: 3}
//     ];

function calc(basket) {
    let sum = 0;
    for (let i=0; i<basket.length; i++) {
        sum = sum + basket[i].value.gross;
    }
    // const add = item.value.gross + item2.value.gross
    // const Disc = (brutto1.value.gross + brutto2.value.gross)*discount
    // return add - Disc;
    return sum;
}
        
// console.log(calc(item, item2, 0.2));
console.log(calc(items));