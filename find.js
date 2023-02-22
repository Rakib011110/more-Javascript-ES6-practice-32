
const numbers = [32, 434, 34, 54, 54, 23, 21, 5, 1]
const fives = numbers.find(num => num % 5 === 0)
console.log(fives);

const fiveAll = numbers.filter(num => num % 5 === 0)
console.log(fiveAll);

const products = [

    { id: 1, name: 'laptoon', price: 4000 },
    { id: 2, name: 'mobile', price: 2000 },
    { id: 3, name: 'phone', price: 3000 },
    { id: 4, name: 'keybord', price: 5000 },

]
const cheap = products.find(product => product.price < 4000)
console.log(cheap);