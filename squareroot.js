let inputNumber = parseFloat("Enter non-negative number: ")
if (!isNaN(inputNumber) && inputNumber >= 0)
{
  let squareRoot = Math.sqrt(inputNumber);
  console.log('The square root of ${inputNumber} is ${squareRoot}');
}

else {
  console.log("Please enter a number")
}