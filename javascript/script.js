const btn = document.querySelector(".btn1");
const inputEl = document.getElementById("data");
const resultEl = document.querySelector(".alert1");
let msg;

// ESERCIZIO PALINDROMO
// Decommentando il commentato // // si ha la soluzione senza usare il for inverso

btn.addEventListener("click", function () {
  // //    const firstArray = [];
  let userString = inputEl.value;
  let newString = "";
  console.log(userString);
  for (let i = userString.length - 1; i >= 0; i--) {
    console.log(userString[i]);
    newString += userString[i];
  }
  console.log(newString);
  msg = userString === newString ? "E' palindromo" : "Non e' palindromo";
  console.log(msg);
  // //   console.log(firstArray);
  // //   console.log(firstArray.join(""), firstArray.reverse().join(""));
  // //   msg =
  // //     firstArray.join("") === firstArray.reverse().join("")
  // //      ? "E' palindromo"
  // //      : "Non e' palindromo";
  // //   console.log(msg);
});

// ESERCIZIO PARI E DISPARI

const btnEven = document.querySelector(".btn2");
const btnOdd = document.querySelector(".btn3");
const inputEl2 = document.getElementById("data2");
const resultEl2 = document.querySelector(".alert2");
let msg2;
let userNumber;
let computerNumber;

btnEven.addEventListener("click", function () {
  userNumber = parseInt(inputEl2.value);
  computerNumber = parseInt(getRndInteger(1, 5));
  console.log(userNumber, computerNumber);
});
btnOdd.addEventListener("click", function () {
  userNumber = parseInt(inputEl2.value);
  computerNumber = parseInt(getRndInteger(1, 5));
  console.log(userNumber, computerNumber);
});
