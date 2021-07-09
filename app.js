let $ = document;

let numbers = [];
let inputnum = $.getElementById("inputNum");
let sumBtn = $.getElementById("sumAvr");
let renderP = $.getElementById("renderSum");

inputnum.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    numbers.push(parseInt(inputnum.value));
    inputnum.value = "";
  }
});

sumBtn.addEventListener("click", function () {
  let sum = 0;
  let adad = [...numbers];
  for (let arg of adad) {
    sum += arg;
  }
  renderP.innerText = sum / numbers.length;
});

// function add(...numbers) {
//     let sum = 0;
//     for (let arg of numbers) {
//       sum += arg;
//     }
//     return sum / numbers.length;
//   }

// ---------------------

function addtoCounter() {
  let counter = 0;
  return function adding() {
    counter++;
    return counter;
  };
}
let run = addtoCounter();

run();
run();
