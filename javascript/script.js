const btn = document.querySelector("button");
const inputEl = document.getElementById("data");
const resultEl = document.querySelector(".alert");
let msg;

btn.addEventListener("click", function () {
  const firstArray = [];
  let userString = inputEl.value;
  console.log(userString);
  for (let i = 0; i < userString.length; i++) {
    firstArray.push(userString[i]);
  }
  console.log(firstArray);
  console.log(firstArray.join(""), firstArray.reverse().join(""));
  msg =
    firstArray.join("") === firstArray.reverse().join("")
      ? "E' palindromo"
      : "Non e' palindromo";
  console.log(msg);
});
