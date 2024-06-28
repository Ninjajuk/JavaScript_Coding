// Generate id,fare, seat and gap function
const generateInitialSeats = (rows, cols, gapColumnIndex) => {
    const layout = [];
    let seatId = 1;
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        if (j === gapColumnIndex) {
          row.push({ id: null, status: -1, price: null }); // Gap
        } else {
          row.push({ id: seatId++, status: 0, price: Math.floor(Math.random() * 50) + 50 }); // Available seat with random price
        }
      }
      layout.push(row);
    }
    return layout;
  };
  
  console.log(generateInitialSeats(7,5,2))
  