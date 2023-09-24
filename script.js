function decimalToBinary(num) {
  // Check if the input is not a valid positive integer
  if (!Number.isInteger(num) || num < 0) {
    return "Invalid input. Please enter a positive integer.";
  }

  // Handle the special case when num is 0
  if (num === 0) {
    return "0";
  }

  let binary = "";
  
  while (num > 0) {
    // Get the remainder when dividing by 2 (0 or 1)
    const remainder = num % 2;
    // Add the remainder to the beginning of the binary representation
    binary = remainder + binary;
    // Divide the number by 2, rounding down
    num = Math.floor(num / 2);
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;
