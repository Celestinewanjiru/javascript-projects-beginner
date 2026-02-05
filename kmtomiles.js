let km = parseFloat(prompt("Enter distance in kilometers: "));

const kilometersToMilesConversionFactor = 0.621371;

// check if input is a number
if (!isNaN(km)) {
  // convert to miles
  let miles = km * kilometersToMilesConversionFactor;
    console.log(miles);
}
else {
  console.log("Enter valid number");
}