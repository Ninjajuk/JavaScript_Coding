//Example 01
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


//Example 02
const chooseStyle = (status) => {
  switch (status) {
    case 'pending':
      return {
        colorClass: 'bg-purple-200 text-purple-600',
        icon: <FaHourglassHalf/> 
      };
    case 'dispatched':
      return {
        colorClass: 'bg-yellow-200 text-yellow-600',
        icon: <FaTruck/>
      };
    case 'delivered':
      return {
        colorClass: 'bg-green-200 text-green-600',
        iconClass: <FaBoxOpen />
      };
    case 'received':
      return {
        colorClass: 'bg-green-200 text-green-600',
        iconClass: <FaCheckCircle /> 
      };
    case 'cancelled':
      return {
        colorClass: 'bg-red-200 text-red-600',
        icon: <FaTimesCircle/> 
      };
    default:
      return {
        colorClass: 'bg-purple-200 text-purple-600',
        icon: <FaQuestion/>
      };
  }
};