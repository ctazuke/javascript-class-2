var boxes = document.querySelectorAll(".box");
console.log(boxes);

// if (boxes.length > 4) {
//   console.log("We have more than 4 boxes");
// } else {
//   console.log("We have no more than 4 boxes");
// }

switch (boxes.length) {
  case 1:
    console.log("We have 1 box.")
    break;

  case 2:
    console.log("We have 2 boxes.")
    break;
  
  default:
    console.log("This is default. We have more than 2 boxes.")
    break;
 
}

