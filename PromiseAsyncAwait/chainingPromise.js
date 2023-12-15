const mypromise = new Promise((res, rej) => {
    let x = true;
    let num = [1, 2, 3, 4, 5];

    if (x) {
        res(num.map(item => item * 10));
    } else {
        rej(num);
    }
});

mypromise
    .then(val => {
        // Filter values greater than 40
        const filteredValues = val.filter(item => item > 40);
        console.log(filteredValues);

        // Perform additional action on the filtered values
        return filteredValues.map(item => item + 5);
    })
    .then(modifiedValues => {
        // Log the modified values
        console.log(modifiedValues);

        // Perform another action on the modified values
        return modifiedValues.reduce((sum, item) => sum + item, 0);
    })
    .then(sum => {
        // Log the sum of modified values
        console.log('Sum:', sum);
    })
    .catch(val => console.log(val.filter(item => item > 4)));


    //02 Example Fetching Data from an API:
    fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle errors in the fetch or JSON parsing
    console.error('Error:', error);
  });


  //03 Example Sequential API Calls:
  function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }
  
  fetchData('https://api.example.com/data1')
    .then(data1 => {
      // Process data1
      console.log(data1);
      return fetchData('https://api.example.com/data2');
    })
    .then(data2 => {
      // Process data2
      console.log(data2);
    })
    .catch(error => {
      // Handle errors in the fetch or JSON parsing
      console.error('Error:', error);
    });


    //04 User Authentication:
    function loginUser(username, password) {
        return authenticateUser(username, password)
          .then(user => {
            // Process user data
            console.log(user);
            return fetchUserDetails(user.id);
          })
          .then(userDetails => {
            // Process user details
            console.log(userDetails);
          })
          .catch(error => {
            // Handle authentication or data fetching errors
            console.error('Error:', error);
          });
      }
      
      loginUser('john_doe', 'password123');
      

    //05 example User Registration and Profile Creation: example 
    function registerUser(username, email, password) {
        const registrationData = {
          username: username,
          email: email,
          password: password
        };
      
        return fetch('https://api.example.com/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(registrationData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to register user');
          }
          return response.json();
        });
      }
      
      function createProfile(userId, fullName, bio) {
        const profileData = {
          userId: userId,
          fullName: fullName,
          bio: bio
        };
      
        return fetch('https://api.example.com/createProfile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(profileData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to create user profile');
          }
          return response.json();
        });
      }
      
      // Usage:
      registerUser('john_doe', 'john@example.com', 'password123')
        .then(userData => {
          console.log('User registered successfully:', userData);
          return createProfile(userData.userId, 'John Doe', 'A passionate developer');
        })
        .then(profileData => {
          console.log('User profile created successfully:', profileData);
        })
        .catch(error => {
          console.error('Error:', error.message);
        });
      

  // Order Processing in E-Commerce: example

        function createOrder(product, quantity) {
            const orderData = {
              product: product,
              quantity: quantity
            };
          
            return fetch('https://api.example.com/createOrder', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(orderData)
            })
            .then(response => {
              if (!response.ok) {
                throw new Error('Failed to create order');
              }
              return response.json();
            });
          }
          
          function chargeCustomer(orderId, amount) {
            const chargeData = {
              orderId: orderId,
              amount: amount
            };
          
            return fetch('https://api.example.com/chargeCustomer', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(chargeData)
            })
            .then(response => {
              if (!response.ok) {
                throw new Error('Failed to charge customer');
              }
              return response.json();
            });
          }
          
          function updateInventory(product, quantity) {
            const inventoryData = {
              product: product,
              quantity: quantity
            };
          
            return fetch('https://api.example.com/updateInventory', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(inventoryData)
            })
            .then(response => {
              if (!response.ok) {
                throw new Error('Failed to update inventory');
              }
              return response.json();
            });
          }
          
          // Usage:
          createOrder('Laptop', 2)
            .then(orderData => {
              console.log('Order created successfully:', orderData);
              return chargeCustomer(orderData.orderId, 2000); // assuming the amount is $2000
            })
            .then(paymentData => {
              console.log('Customer charged successfully:', paymentData);
              return updateInventory('Laptop', 2);
            })
            .then(inventoryData => {
              console.log('Inventory updated successfully:', inventoryData);
            })
            .catch(error => {
              console.error('Error:', error.message);
            });
          