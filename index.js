const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function (total, batches){
    return total + batches
})

// reducer
// batteries
//   ✓ should have a `totalBatteries` variable
//   ✓ should have a number as a result
//   ✓ should have made the sum of all the assembled batteries