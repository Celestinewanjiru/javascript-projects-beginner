let a = parseFloat(prompt("Enter coefficient a: "));
let b = parseFloat(prompt("Enter coefficient a: "));
let c = parseFloat(prompt("Enter coefficient a: "));

// calc discriminant
let discriminant = b ** 2 - 4 * a * c;
 
// check roots
if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(root1);
    console.log(root2);

  }
} else if(discriminant === 0) {
  let root = -b / (2 * a);
  console.log(root);
}

else {
  console.log('Please enter numbers');

}

