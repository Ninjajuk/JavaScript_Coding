let products = [
    { id: 1, item: 'apple', price: 1.0 },
    { id: 2, item: 'banana', price: 0.5 },
    { id: 3, item: 'cherry', price: 2.0 },
    { id: 4, item: 'date', price: 1.5 },
    { id: 5, item: 'elderberry', price: 3.0 },
    { id: 6, item: 'fig', price: 2.5 },
    { id: 7, item: 'grape', price: 2.2 },
    { id: 8, item: 'honeydew', price: 3.1 },
    { id: 9, item: 'kiwi', price: 1.8 },
    { id: 10, item: 'lemon', price: 0.8 }
];

// Assume we want to update the prices of products with ids 2, 5, 7, and 9
let updatedProducts = products.map(product => {
    if ([2, 5, 7, 9].includes(product.id)) {
        return {
            ...product,  // Spread the existing properties
            price: product.price * 1.10  // Update the price
        };
    }
    return product;
});

// Filter to get only the updated products
let onlyUpdatedProducts = updatedProducts.filter((product, index) => product.price !== products[index].price);

console.log(onlyUpdatedProducts);
