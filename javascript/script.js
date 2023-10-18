const btn = document.querySelector(".btn1");
const inputEl = document.getElementById("data");
const resultEl = document.querySelector(".alert1");
let msg;

// ESERCIZIO PALINDROMO
// Decommentando il commentato // // si ha la soluzione senza usare il for inverso

btn.addEventListener("click", palindromo);

function palindromo() {
  reset();
  // //    const firstArray = [];
  let userString = inputEl.value;
  let newString = "";
  let alertColor = "alert-success";
  console.log(userString);
  for (let i = userString.length - 1; i >= 0; i--) {
    console.log(userString[i]);
    newString += userString[i];
  }
  console.log(newString);
  if (userString === newString) {
    msg = "E' palindromo";
  } else {
    alertColor = "alert-danger";
    msg = "Non e' palindromo";
  }
  //   msg =                       // Ternario su cui fare domanda
  //     userString === newString
  //       ? "E' palindromo"
  //       : "Non e' palindromo" ;
  console.log(msg);
  printResult(alertColor, msg);
  // //   console.log(firstArray);
  // //   console.log(firstArray.join(""), firstArray.reverse().join(""));
  // //   msg =
  // //     firstArray.join("") === firstArray.reverse().join("")
  // //      ? "E' palindromo"
  // //      : "Non e' palindromo";
  // //   console.log(msg);
}
function reset() {
  resultEl.classList.remove("alert-danger");
  resultEl.classList.add("d-none");
}
function printResult(alertColor, message) {
  resultEl.classList.add(alertColor);
  resultEl.classList.remove("d-none");
  resultEl.innerHTML = message;
}

// ESERCIZIO PARI E DISPARI
// Decommentando il commentato // si ha la soluzione ma con due bottoni diversi (decommentare anche il button in HTML)

const btnEven = document.querySelector(".btn2");
const btnOdd = document.querySelector(".btn3");
const inputEl2 = document.getElementById("data2");
const resultEl2 = document.querySelector(".alert2");
let msg2;
let userNumber;
let computerNumber;
let totalNumber;

const pariDispari = document.getElementById("pari-dispari");
let userSelection;

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

btnEven.addEventListener("click", evenOdd);

function evenOdd() {
  reset2();
  let alertColor = "alert-success";
  userSelection = pariDispari.value;
  userNumber = parseInt(inputEl2.value);
  computerNumber = parseInt(getRndInteger(1, 5));
  console.log(userNumber, userSelection, computerNumber);

  totalNumber = userNumber + computerNumber;
  console.log(totalNumber);

  if (userNumber > 5) {
    alert("Il numero deve essere inferiore a 5");
  }
  if (isEven(totalNumber) && userSelection === "pari") {
    msg2 = "Ha vinto l'utente";
  } else if (!isEven(totalNumber) && userSelection === "dispari") {
    msg2 = "Ha vinto l'utente";
  } else if (isEven(totalNumber) && userSelection === "dispari") {
    alertColor = "alert-danger";
    msg2 = "Ha vinto il computer";
  } else if (!isEven(totalNumber) && userSelection === "pari") {
    alertColor = "alert-danger";
    msg2 = "Ha vinto il computer";
  }
  console.log(msg2);
  printResult2(alertColor, msg2);
}

function reset2() {
  resultEl2.classList.remove("alert-danger");
  resultEl2.classList.add("d-none");
}

function printResult2(alertColor, message) {
  resultEl2.classList.add(alertColor);
  resultEl2.classList.remove("d-none");
  resultEl2.innerHTML = message;
}
