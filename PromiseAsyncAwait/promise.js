
//Callback ex starts here
// const firstFunction=(a,b,callback)=>{
//     const result=a+b
//     console.log("First function:-",result)
//     callback(result)

// }

// const secondFunction=(prevresult,c,d,callback)=>{
//     const result=prevresult+ c-d
//     console.log("second function:-",result)
//     callback(result)

// }
// const thirdFunction=(prevresult,e,callback)=>{
//     const result=prevresult*e
//     console.log("Third function:-",result)
//     callback(result)

// }

// const finalResult=(result)=>{
//     console.log("Final Result:-",result)
 

// }

// firstFunction(10,20,prevresult=>{
//     secondFunction(prevresult,50,40,prevresult=>{
//         thirdFunction(prevresult,10,finalResult)

//     })

// })
//Callback ex ends here



//Promise ex starts here

//Example 1

const myPromise=new Promise((res,rej)=>{
    const result=false
    if(result){
        res("Promise Resolves")
    }else{
        rej('Promise rejected')
    }

})

myPromise
.then((val)=>console.log('Hi there',val))
.catch((error)=>console.log("Promised rejected and error",error))

//Example 1 Promise


//Example 2 Promise
const firstFunction=(a,b)=>{
    return new Promise((res,rej)=>{
        const result=a+b
        console.log("First function:-",result)
        res(result)

    })
}

const secondFunction=(prevresult,c,d)=>{
    return new Promise((res,rej)=>{
        const result=prevresult + c-d
        console.log("Second function:-",result)
        res(result)

    })
}
const thirdFunction=(prevresult,e)=>{
    return new Promise((res,rej)=>{
        const result=prevresult*e
        console.log("Third function:-",result)
        res(result)

    })
}
firstFunction(10,20)
.then((prevresult)=>secondFunction(prevresult,50,40))
.then((prevresult)=>thirdFunction(prevresult,5))
.catch((error)=>console.log("Error Occured"))




//Async and await 
// const finalFunction=async()=>{
//     try {
//         const r1=await firstFunction(10,20)
//         const r2=await secondFunction(r1,50,40)
//         const r3=await thirdFunction(r2,5)
//         console.log(r3)
//     } catch (error) {
//         console.log('error',error)
        
//     }
// }
// finalFunction()
//Async and await 

//Example 2 Promise

//fetch products
async function fetchProducts() {
    try {
        const response = await fetch('https://api.example.com/products');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

// Later in your code
try {
    const products = await fetchProducts();
    // Use the product data to update the UI
} catch (error) {
    // Handle errors
}
//fetch products



//process Payment
async function processPayment(order) {
    try {
        const paymentResult = await paymentGateway.process(order);
        // Update order status or UI based on payment result
        return paymentResult;
    } catch (error) {
        console.error('Payment processing error:', error);
        throw error;
    }
}

// When the user clicks "Place Order"
try {
    const paymentResult = await processPayment(order);
    // Display order confirmation or handle payment failure
} catch (error) {
    // Handle errors
}
//process Payment


//update cart
async function updateCart(item, quantity) {
    try {
        // Perform asynchronous operation to update the cart on the server
        const updatedCart = await cartService.update(item, quantity);
        // Update the UI with the new cart information
        return updatedCart;
    } catch (error) {
        console.error('Error updating cart:', error);
        throw error;
    }
}

// When the user adds/removes items from the cart
try {
    const updatedCart = await updateCart(item, quantity);
    // Update the UI to reflect the changes in the cart
} catch (error) {
    // Handle errors
}

//update cart


// Full code ecom
class ShoppingCartService {
    async fetchProducts() {
        try {
            const response = await fetch('https://api.example.com/products');
            const products = await response.json();
            return products;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    async processPayment(order) {
        try {
            // Simulating a payment gateway process
            const paymentResult = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ success: true, message: 'Payment successful' });
                }, 2000);
            });

            return paymentResult;
        } catch (error) {
            console.error('Payment processing error:', error);
            throw error;
        }
    }

    async updateCart(item, quantity) {
        try {
            // Simulating updating the cart on the server
            const updatedCart = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ items: [], total: 0 });
                }, 1000);
            });

            return updatedCart;
        } catch (error) {
            console.error('Error updating cart:', error);
            throw error;
        }
    }
}

// Usage in a shopping app
const shoppingCartService = new ShoppingCartService();

async function shoppingWorkflow() {
    try {
        // 1. Fetch Products
        const products = await shoppingCartService.fetchProducts();
        console.log('Fetched Products:', products);

        // 2. Add an item to the cart
        const itemToAdd = products[0];
        const quantityToAdd = 2;
        const updatedCart = await shoppingCartService.updateCart(itemToAdd, quantityToAdd);
        console.log('Updated Cart:', updatedCart);

        // 3. Process Payment
        const order = { items: updatedCart.items, total: updatedCart.total };
        const paymentResult = await shoppingCartService.processPayment(order);
        console.log('Payment Result:', paymentResult);

        // 4. Display Order Confirmation or Handle Payment Failure
        if (paymentResult.success) {
            console.log('Order Placed Successfully!');
        } else {
            console.log('Payment Failed. Please try again.');
        }
    } catch (error) {
        console.error('Shopping Workflow Error:', error);
    }
}

// Run the shopping workflow
shoppingWorkflow();

