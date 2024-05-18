// const jsonparse=`[
//     {
//         "_id": "6637118e897a26cf8da0817c",
//         "quantity": 3,
//         "product": {
//             "_id": "662a2cadac95b75bcb99b32e",
//             "title": "onion fresh",
//             "description": "Delicious Onion",
//             "price": 97,
//             "cuttedprice": 35,
//             "discount": 10,
//             "rating": 2,
//             "stock": 5,
//             "brand": "veg",
//             "category": "vegetables",
//             "unit": "kg",
//             "thumbnail": "http://res.cloudinary.com/dcfn1vu0x/image/upload/v1714039953/yingkiong/rn7dxhqzhot3ty12weve.webp",
//             "deleted": false,
//             "createdAt": "2024-04-25T10:13:01.841Z",
//             "updatedAt": "2024-04-26T16:05:32.719Z",
//             "__v": 0
//         },
//         "user": "66338f548de2aa4bea62477d",
//         "__v": 0
//     },
//     {
//         "_id": "664781595df1980ca368d6a1",
//         "quantity": 1,
//         "product": {
//             "_id": "662a3b9281992ebdb3ca69ba",
//             "title": "Brinjal",
//             "description": "fresho brinjsl",
//             "price": 40,
//             "rating": 2,
//             "stock": 10,
//             "brand": "veg",
//             "category": "vegetables",
//             "thumbnail": "http://res.cloudinary.com/dmzxftogo/image/upload/v1714043774/yingkiong/lwxxrlv3gzf3b2bjzupk.webp",
//             "colors": [],
//             "sizes": [],
//             "highlights": [],
//             "deleted": false,
//             "__v": 0
//         },
//         "user": "66338f548de2aa4bea62477d",
//         "__v": 0
//     },
//     {
//         "_id": "664781dd5df1980ca368d6a8",
//         "quantity": 1,
//         "product": {
//             "_id": "662a2deaac95b75bcb99b330",
//             "title": "DrumStick",
//             "description": "healthy drumsticks",
//             "price": 54,
//             "cuttedprice": 48,
//             "discount": 6,
//             "rating": 5,
//             "stock": 10,
//             "brand": "veg",
//             "category": "vegetables",
//             "unit": "kg",
//             "thumbnail": "http://res.cloudinary.com/dmzxftogo/image/upload/v1714040260/yingkiong/x6hzjqwwnaldhsbxleaw.webp",
//             "deleted": false,
//             "createdAt": "2024-04-25T10:18:18.422Z",
//             "updatedAt": "2024-04-25T10:18:18.422Z",
//             "__v": 0
//         },
//         "user": "66338f548de2aa4bea62477d",
//         "__v": 0
//     },
//     {
//         "_id": "66478c3f036db26e2c84b4f2",
//         "quantity": 1,
//         "product": {
//             "_id": "662a2deaac95b75bcb99b330",
//             "title": "DrumStick",
//             "description": "healthy drumsticks",
//             "price": 54,
//             "cuttedprice": 48,
//             "discount": 6,
//             "rating": 5,
//             "stock": 10,
//             "brand": "veg",
//             "category": "vegetables",
//             "unit": "kg",
//             "thumbnail": "http://res.cloudinary.com/dmzxftogo/image/upload/v1714040260/yingkiong/x6hzjqwwnaldhsbxleaw.webp",
//             "deleted": false,
//             "createdAt": "2024-04-25T10:18:18.422Z",
//             "updatedAt": "2024-04-25T10:18:18.422Z",
//             "__v": 0
//         },
//         "user": "66338f548de2aa4bea62477d",
//         "__v": 0
//     },
//     {
//         "_id": "66478c9a036db26e2c84b4f7",
//         "quantity": 1,
//         "product": {
//             "_id": "662a3b9281992ebdb3ca69ba",
//             "title": "Brinjal",
//             "description": "fresho brinjsl",
//             "price": 40,
//             "rating": 2,
//             "stock": 10,
//             "brand": "veg",
//             "category": "vegetables",
//             "thumbnail": "http://res.cloudinary.com/dmzxftogo/image/upload/v1714043774/yingkiong/lwxxrlv3gzf3b2bjzupk.webp",
//             "colors": [],
//             "sizes": [],
//             "highlights": [],
//             "deleted": false,
//             "__v": 0
//         },
//         "user": "66338f548de2aa4bea62477d",
//         "__v": 0
//     }
// ]`
// Parse the JSON string into a JavaScript object
// const cartItems = JSON.parse(jsonparse);

// const productsArray = cartItems.map(item => {
//     const product = item.product;
//     const quantity = item.quantity;
//     return { ...product, quantity: quantity }; // Add quantity property to each product
// });

// Now 'productsArray' contains an array of product details with a 'quantity' property
// console.log(productsArray);



//Example 02 if its an object

const jsonparse = `{
    "item1": {
        "_id": "6637118e897a26cf8da0817c",
        "quantity": 3,
        "product": {
            "_id": "662a2cadac95b75bcb99b32e",
            "title": "onion fresh",
            "description": "Delicious Onion",
            "price": 97,
            "cuttedprice": 35,
            "discount": 10,
            "rating": 2,
            "stock": 5,
            "brand": "veg",
            "category": "vegetables",
            "unit": "kg",
            "thumbnail": "http://res.cloudinary.com/dcfn1vu0x/image/upload/v1714039953/yingkiong/rn7dxhqzhot3ty12weve.webp",
            "deleted": false,
            "createdAt": "2024-04-25T10:13:01.841Z",
            "updatedAt": "2024-04-26T16:05:32.719Z",
            "__v": 0
        },
        "user": "66338f548de2aa4bea62477d",
        "__v": 0
    },
    "item2": {
        "_id": "664781595df1980ca368d6a1",
        "quantity": 1,
        "product": {
            "_id": "662a3b9281992ebdb3ca69ba",
            "title": "Brinjal",
            "description": "fresho brinjsl",
            "price": 40,
            "rating": 2,
            "stock": 10,
            "brand": "veg",
            "category": "vegetables",
            "thumbnail": "http://res.cloudinary.com/dmzxftogo/image/upload/v1714043774/yingkiong/lwxxrlv3gzf3b2bjzupk.webp",
            "colors": [],
            "sizes": [],
            "highlights": [],
            "deleted": false,
            "__v": 0
        },
        "user": "66338f548de2aa4bea62477d",
        "__v": 0
    }
}`;

// Parse the JSON string into a JavaScript object
const jobject = JSON.parse(jsonparse);
console.log(jobject)

// Loop through the properties of the object
for (const key in jobject) {
    if (Object.hasOwnProperty.call(jobject, key)) {
        const item = jobject[key];
        console.log(`Product: ${item.product.title}, Quantity: ${item.quantity}`);
    }
}


