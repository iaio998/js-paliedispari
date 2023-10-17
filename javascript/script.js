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
let totalNumber;

// btnEven.addEventListener("click", function () {
//   userNumber = parseInt(inputEl2.value);
//   if (userNumber > 5) {
//     alert("Il numero deve essere inferiore a 5");
//   } else {
//     computerNumber = parseInt(getRndInteger(1, 5));
//     console.log(userNumber, computerNumber);
//     totalNumber = userNumber + computerNumber;
//     console.log(totalNumber);
//     msg2 = isEven(totalNumber) ? "Ha vinto l'utente" : "Ha vinto il computer";
//   }
//   console.log(msg2);
// });

// btnOdd.addEventListener("click", function () {
//   userNumber = parseInt(inputEl2.value);
//   computerNumber = parseInt(getRndInteger(1, 5));
//   console.log(userNumber, computerNumber);
//   totalNumber = userNumber + computerNumber;
//   console.log(totalNumber);
//   msg2 = !isEven(totalNumber) ? "Ha vinto l'utente" : "Ha vinto il computer";
//   console.log(msg2);
// });
const pariDispari = document.getElementById("pari-dispari");
let userSelection;
btnEven.addEventListener("click", function () {
  userSelection = pariDispari.value;
  userNumber = parseInt(inputEl2.value);
});
