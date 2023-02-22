const users = [
    {
        id: 1, name: 'abul', job: 'doctor'
    }
]

// console.log(users[0].name);


const data = {

    count: 5000,
    data: [

        {
            id: 1, name: 'abul', job: 'doctor',
        },
        {
            id: 2, name: 'dabul', job: 'leader',
        }
    ]
}

const firstJob = data.data[0].job
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'thomas alba edison',
    address: {
        street: {
            first: '32/A pabna ',

            second: 'third flor',
            third: 'fourth flor'
        }

    },
    postOfice: 'cantontement',
    city: 'dhakaa'
}

const userFloor = user.address.street?.second;
console.log(userFloor);