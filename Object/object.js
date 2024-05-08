const user={
    name:'SAMSUDDIN ANSRI',
    userName:'samsu',
    password:'123456',
    phone:'7542067763',
    email:['biosamsuddin@gmail.com','samsuddinansari360@gmail.com'],
    role:'admin',
    cars: [
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
      ]
}
console.log(user)

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
