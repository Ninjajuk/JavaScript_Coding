//Async and await makes easy to handle promise.

//Example 01

async function getData(){
  const data=await fetch('https://dummyjson.com/products/1')
  const resp=await data.json()
  console.log(resp)
    return resp 
}
getData()

async function getUser(){
  const data=await fetch('https://dummyjson.com/users/')
  const resp=await data.json()
  console.log(resp)
    return resp 
}
getUser()
