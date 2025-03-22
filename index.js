const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // The initial accumulator value is set to 0

console.log(totalBatteries); // Should print the sum of all batteries
