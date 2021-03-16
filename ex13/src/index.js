function randomRangeNumber(max,min)  {

    // Only change code below this line.
  
    return Math.floor(Math.random() *(max-min+1)+min);
  }
  
  console.log(randomRangeNumber(15,20));
  module.exports = randomRangeNumber