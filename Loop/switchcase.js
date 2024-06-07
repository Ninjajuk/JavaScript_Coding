function getProductQuantities(unit) {
    let quantities;
  
    switch (unit) {
      case 'kg':
        quantities = ['1 kg', '2 kg', '5 kg', '10 kg'];
        break;
      case 'gm':
        quantities = ['250 gm', '500 gm', '1 kg'];
        break;
      case 'ltr':
        quantities = ['1 ltr', '2 ltr', '5 ltr'];
        break;
      case 'item':
        quantities = ['1 item', '2 items', '3 items', '5 items'];
        break;
      default:
        quantities = ['Unknown unit'];
    }
  
    return quantities;
  }
  
  // Example usage:01
  const productUnit = 'gm';
  const availableQuantities = getProductQuantities(productUnit);
  
  console.log(`Available quantities for unit (${productUnit}):`, availableQuantities);
  // Output: Available quantities for unit (gm): [ '250 gm', '500 gm', '1 kg' ]
  