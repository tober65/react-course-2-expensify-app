// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'San Diego',
//         temp: 88
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const {name: firstName = 'Anon', age} = person;

// console.log(`${firstName} is ${age}.`);


// const {city, temp: temper} = person.location;
// if(city && temper) {
//     console.log(`It's ${temper} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self Published'} = book.publisher;

// console.log(publisherName);

//Array Destructuring

// const address = ['1299 S Juniper St', 'San Diego', 'CA', '92123'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , medPrice] = item;

console.log(`A medium ${itemName} costs ${medPrice}`);