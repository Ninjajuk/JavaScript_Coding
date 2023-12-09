let userPermissions = ['read', 'write', 'delete'];
let actionToPerform = 'delete';

if (userPermissions.includes(actionToPerform)) {
    console.log('Permission granted! You can perform the ' + actionToPerform + ' action.');
} else {
    console.log('Permission denied. You do not have the necessary permissions for ' + actionToPerform + '.');
}

let preferredPaymentMethod = 'Credit Card';
let acceptedPaymentMethods = ['Credit Card', 'PayPal', 'Stripe'];

if (acceptedPaymentMethods.includes(preferredPaymentMethod)) {
    console.log('Great choice! Your payment with ' + preferredPaymentMethod + ' is accepted.');
    // Process payment logic here
} else {
    console.log('Sorry, the selected payment method is not accepted.');
    // Display an error message or prompt the user to choose a different payment method
}


let productWeight = 2.5; // in kilograms
let shippingRates = {
    'Standard': 5,
    'Express': 10,
    'Overnight': 20
};

let selectedShippingOption = 'Standard';

if (Object.keys(shippingRates).includes(selectedShippingOption)) {
    let shippingCost = shippingRates[selectedShippingOption] * productWeight;

    console.log('Thank you for choosing ' + selectedShippingOption + ' shipping!');
    console.log('Shipping cost for ' + productWeight + 'kg: $' + shippingCost.toFixed(2));
} else {
    console.log('Sorry, invalid shipping option selected.');
}

let selectedProductCategory = 'Electronics';
let isFreeShippingEligibleCategories = ['Clothing', 'Shoes', 'Books'];

if (isFreeShippingEligibleCategories.includes(selectedProductCategory)) {
    console.log('Congratulations! Your selected product qualifies for free shipping.');
} else {
    console.log('Sorry, free shipping is not available for the selected product category.');
}


let y = 8;

if ([5, 8, 10, 4].includes(y)) {
    console.log('Sam');
}

let selectedGenre = 'ko';

if (['Pop', 'Rock', 'Hip Hop', 'Country'].includes(selectedGenre)) {
    console.log('Great choice! Enjoy listening to ' + selectedGenre + ' music.');
} else {
    console.log('Sorry, we don\'t have recommendations for ' + selectedGenre + ' music.');
}


let userMembership = 'Gold';
let cartTotal = 100; // Example cart total amount

const discountRates = {
    'Bronze': 0.05,
    'Silver': 0.1,
    'Gold': 0.15,
    'Platinum': 0.2
};

if (Object.keys(discountRates).includes(userMembership)) {
    let discount = cartTotal * discountRates[userMembership];
    let discountedAmount = cartTotal - discount;

    console.log('Thank you for being a ' + userMembership + ' member!');
    console.log('Your discount: $' + discount.toFixed(2));
    console.log('Total amount after discount: $' + discountedAmount.toFixed(2));
} else {
    console.log('Sorry, invalid membership level.');
}

