// if (boxes.length > 4) {
//   console.log("We have more than 4 boxes");
// } else {
//   console.log("We have no more than 4 boxes");
// }

// switch (boxes.length) {
//   case 1:
//     console.log("We have 1 box.")
//     break;

//   case 2:
//     console.log("We have 2 boxes.")
//     break;
  
//   default:
//     console.log("This is default. We have more than 2 boxes.")
//     break; 
// }

// var name = "Chieko Tazuke";

// console.log(name.length);

// var fruits = [
//   "orange",
//   "durian",
//   "banana",
//   "pinapple",
//   "pomegranate"
// ];

// console.log(fruits.length);
// console.log(fruits[2]);
// console.log(fruits[2].length);

// var daysInYear = 365.25;

// console.log(daysInYear);

// if (fruits[2] === "banana") {
//   document.body.style.backgroundColor = "yellow"
// }

function boxClicked() {
  console.log("Box clicked");
}

var boxes = document.querySelectorAll(".box");
console.log(boxes.length);

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", boxClicked);
}
