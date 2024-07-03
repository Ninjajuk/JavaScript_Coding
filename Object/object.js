const user={
    name:'SAMSUDDIN ANSARI',
    userName:'samsu',
    password:'123456',
    phone:'7542067763',
    email:['biosamsuddin@gmail.com','samsuddinansari360@gmail.com'],
    role:'admin',
    cars: [
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
      ],
    address:{delhi:"Askhok Nagar",patna:'Rajendra Nagar'}  
}
// console.log(user.cars)
for(let x in user){
    console.log(x)  //will give all the key 
    console.log(user[x])   //will give all the values pf property
}

//#1-Using For loop
// Accessing emails
console.log("Emails:");
for (let i = 0; i < user.email.length; i++) {
    console.log(user.email[i]);
}

// Accessing cars along with models
console.log("\nCars:");
for (let i = 0; i < user.cars.length; i++) {
    console.log(`${user.cars[i].name}:`);
    for (let j = 0; j < user.cars[i].models.length; j++) {
        console.log(` - ${user.cars[i].models[j]}`);
    }
}

for (const city in user.address) {
    console.log(`${city}: ${user.address[city]}`);
}
//#2 Loop Using forEach
// Accessing emails
// user.email.forEach(email => {
//     console.log(email);
// });

// // Accessing cars along with models
// user.cars.forEach(car => {
//     console.log(`${car.name}:`);
//     car.models.forEach(model => {
//         console.log(` - ${model}`);
//     });
// });



//#03 Destructuring the user object
const { email, cars } = user;
console.log(email)

// Accessing emails
console.log("Emails:");
for (const mail of email) {
    console.log(mail);
}

// Accessing cars along with models
console.log("\nCars:");
for (const { name, models } of cars) {
    console.log(`${name}:`);
    for (const model of models) {
        console.log(` - ${model}`);
    }
}
//Using forEach Method
cars.forEach(({ name, models }) => {
    console.log(`Car id:-${name}`);
    models.forEach(model => {
        console.log(` - ${model}`);
    });
});



const datasets = {
    dataset1: { id: 1, name: "Dataset One", value: 100 },
    dataset2: { id: 2, name: "Dataset Two", value: 200 },
    dataset3: { id: 3, name: "Dataset Three", value: 300 },
    dataset4: { id: 4, name: "Dataset Four", value: 400 },
    dataset5: { id: 5, name: "Dataset Five", value: 500 }
};

const matchingIds = [2];

const matchingDatasets = Object.values(datasets).filter(dataset => matchingIds.includes(dataset.id));

matchingDatasets.forEach(dataset => {
    console.log(`ID: ${dataset.id}`);
    console.log(`Name: ${dataset.name}`);
    console.log(`Value: ${dataset.value}`);
    console.log('---');
});