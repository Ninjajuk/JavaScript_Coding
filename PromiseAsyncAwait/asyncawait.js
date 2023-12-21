//Async and await makes easy to handle promise.

//Example 

async function getData(){
  const data=await fetch('https://dummyjson.com/products/1')
  const resp=await data.json()
  console.log(resp)
    return resp
  
}
getData()
