const data = document.querySelector("#input");
const result = document.querySelector("#result");
const table = document.querySelector(".table")
const text = document.querySelector("#text");
const modal = document.querySelector("#meuModal")
import { timer } from "./timer.js";
import { txt, removeSC } from "./filterText.js";
import { start } from "./filterText.js";

var keyPress = 0;
var wordRight = 0;
var wordWrong = 0;
var wordMin = 0;

var isStarted = false;
data.addEventListener("keyup", () => {
  if (!isStarted) {
    timer();
    isStarted = true;
  }
  myfunction();
  keyPress += 1;
});

function myfunction() {
  const word = text.innerText.split(" ");
  const list = data.value.split("");
  list.forEach((letter) => {
    const pal = list.join("");
    if (letter == " ") {
      validateWord(pal.trim(),word[0])
      data.value = "";
      word.shift();
      text.innerText = word.join(" ");
      const list = txt.split(" ");
      text.innerText +=
      " " + removeSC(list[Math.floor(Math.random() * list.length)]);
    } else {
      validateData(pal, word[0]);
    }
  });
}

function validateData(data, word) {
  if (data == word) {
    result.innerText = "Correto!";
    result.style.color = "#61FF00";
  } else {
    result.innerText = "Errado!";
    result.style.color = "#FF0c00";
  }
}

function validateWord(data, word){
  console.log(data+"nada")
  if(data == word){
    wordRight += 1;
    wordMin += 1;
  }else{
    wordWrong += 1;
    wordMin += 1;

  }
}


export function reset() {
  table.setAttribute("hidden","")
  modal.setAttribute("checked","")
  isStarted = false;
  start();
  data.removeAttribute("disabled");
  result.innerText = "Resultado"
  result.style.color = "#808080";
}

export{
  wordMin,
  wordRight,
  wordWrong,
  keyPress
}
