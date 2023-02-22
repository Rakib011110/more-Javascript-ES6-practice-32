


const numbers = [12, 21, 43, 32, 21, 12]

const half = numbers.map(x => x / 2)
const third = numbers.map(n => n / 3)
console.log(half);

const friends = ['Tom hanks', 'Tom cruise', 'Tom brady', 'Tom Solaiman'];

const firsLatter = friends.map(freind => freind[0])
// console.log(firsLatter); 
const nameLength = friends.map(friend => friend.length)
// console.log(nameLength); 

const products = [

    { id: 1, name: 'laptoon', price: 4000 },
    { id: 2, name: 'mobile', price: 4000 },
    { id: 3, name: 'phone', price: 4000 },
    { id: 4, name: 'keybord', price: 4000 },

]

// const items = products.map(product => console.log(product.name))
const items = products.map(product => product.name)
console.log(items);