//Async and await makes easy to handle promise.

//Example 01

async function getData(){
  const data=await fetch('https://dummyjson.com/products/1')
  const resp=await data.json()
  console.log(resp)
    return resp 
}
getData()

// async function getUser(){
//   const data=await fetch('https://dummyjson.com/users/')
//   const resp=await data.json()
//   console.log(resp)
//     return resp 
// }
// getUser()


function getUser(userId) {
  return new Promise((resolve, reject) => {
      console.log('Get user from the database.');
      setTimeout(() => {
          resolve({
              userId: userId,
              username: 'john'
          });
      }, 1000);
  })
}

function getServices(user) {
  return new Promise((resolve, reject) => {
      console.log(`Get services of  ${user.username} from the API.`);
      setTimeout(() => {
          resolve(['Email', 'VPN', 'CDN']);
      }, 2 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
      console.log(`Calculate service costs of ${services}.`);
      setTimeout(() => {
          resolve(services.length * 100);
      }, 3 * 1000);
  });
}
getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log);
async function getUser(userId) {
  try {
     const user = await Promise.reject(new Error('Invalid User Id'));
  } catch(error) {
     console.log(error);
  }
}

async function showServiceCost() {
  let user = await getUser(100);
  let services = await getServices(user);
  let cost = await getServiceCost(services);
  console.log(`The service cost is ${cost}`);
}

showServiceCost();
async function showServiceCost() {
  try {
     let user = await getUser(100);
     let services = await getServices(user);
     let cost = await getServiceCost(services);
     console.log(`The service cost is ${cost}`);
  } catch(error) {
     console.log(error);
  }
}
