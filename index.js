//First function
function firstFunction(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName} to the voting program`);
}

// Second Function
function secondFunction(value) {
  // Example: Convert Celsius to Fahrenheit
  return console.log(`today the weather is : ${(value * 9/5) + 32} fahrenheit`)
}

// Third Function
function thirdFunction(num) {
  // random math function
  return console.log((num + 10) * (num - 5) / 2);
}

//Fourth Function 
function fourthFunction(age) {
  if (age < 18) {
    console.log("Not eligible to vote, you must be older than 18");
  } else {
  console.log("You can vote!")
  }
}

module.exports={
  firstFunction,
  secondFunction,
  thirdFunction,
  fourthFunction
};