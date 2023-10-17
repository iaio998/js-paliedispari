const btn = document.querySelector("button");
const inputEl = document.getElementById("data");
const resultEl = document.querySelector(".alert");
let msg;

// ESERCIZIO PALINDROMO
// Decommentando il commentato // // si ha la soluzione senza usare il for inverso

btn.addEventListener("click", function () {
  // //    const firstArray = [];
  //   let userString = inputEl.value;
  //   let newString = "";
  //   console.log(userString);
  //   for (let i = userString.length - 1; i >= 0; i--) {
  //     console.log(userString[i]);
  //     newString += userString[i];
  //   }
  //   console.log(newString);
  //   msg = userString === newString ? "E' palindromo" : "Non e' palindromo";
  //   console.log(msg);
  // //   console.log(firstArray);
  // //   console.log(firstArray.join(""), firstArray.reverse().join(""));
  // //   msg =
  // //     firstArray.join("") === firstArray.reverse().join("")
  // //      ? "E' palindromo"
  // //      : "Non e' palindromo";
  // //   console.log(msg);
});

// ESERCIZIO PARI E DISPARI

const inputEl2 = document.getElementById("pari", "dispari");
