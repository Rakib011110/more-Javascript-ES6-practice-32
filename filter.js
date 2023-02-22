const numbers = [12, 23, 23, 4, 54, 556, 767, 34, 14]
const bigName = numbers.filter(num => num > 20)

const tiny = numbers.filter(n => n < 10)


const event = numbers.filter(num => num % 2 === 0)
console.log(tiny);


const products = [

    { id: 1, name: 'laptoon', price: 4000 },
    { id: 2, name: 'mobile', price: 2000 },
    { id: 3, name: 'phone', price: 3000 },
    { id: 4, name: 'keybord', price: 5000 },

]

const expensive = products.filter(p => p.price > 4000)
const expensive2 = products.filter(p => p.price < 4000)
console.log(expensive2);