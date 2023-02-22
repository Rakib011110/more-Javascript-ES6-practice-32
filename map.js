const numbers = [2, 43, 4, 43, 4]

// console.log(output); 


function getDouble(numbers) {
    const output = [];

    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled)

    }
    return output
}


// function doubleItold(numbers) {
//     return numbers * 2;
// }



const doubleIt = num => num * 2


const makeDouble = numbers.map(doubleIt)
const makeDoubleDirect = numbers.map(num => num * 2)
const makeDouble2 = numbers.map(x => x * 2)
// console.log(makeDoubleDirect); 

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5)
console.log(fiveTimes);
/* 


purpose : 

1. get an array 
2. For every element of the array do somthing 
3. store the result in an array 
4. return the result array  

*/


const result = getDouble(numbers)
console.log(result);