// 2. Dodanie produktu do koszyka
// Napisz funkcję, która do listy zamawianych produktów doda nowy.

// Przykładowe wywołanie:

// addToBasket(basket, {name: 'Lolipop', value: 1.78})

const items = [
    {name: 'Candy', value: 1},
    {name: 'Rum', value: 2},
    {name: 'Apple', value: 3}
    ];

function addNew (items, nameProduct, valueProduct ) {
const newProduct = {name: nameProduct, value: valueProduct};
items.push(newProduct);
return items;
    
}

console.log(addNew(items, 'Bananas', 10));