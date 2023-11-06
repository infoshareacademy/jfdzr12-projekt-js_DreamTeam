// 3. Łączenie zamówień
// Napisz funkcję, która doda do koszyka produkty z poprzedniego zamówienia. 
// Poprzednie zamówienie nie powinno zostać zmienione.

// Przykładowe wywołanie:

const recentOrder = {
  date: '2023-11-05',
  products: [{
    name: 'Candy',
    value: 2,
  }]
}

const basket = [{
  name: 'Lolipop',
  value: 1.78,
}]

// addToBasket(basket, recentOrder)

function addToBasket (recentBasket, newBasket) {
const basket = [...recentBasket.products, ...newBasket];
return basket;
}
const new1 = addToBasket(recentOrder, basket)
recentOrder.products[0].name = 'banana'
console.log(new1);
// console.log(recentOrder);