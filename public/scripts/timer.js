
const data = document.querySelector("#input")
const result = document.querySelector("#result");
const modal = document.querySelector("#meuModal")

import {setTable} from "./table.js"
import {wordMin, wordRight, wordWrong,keyPress} from "./setText.js"

let sec = 0;
var min = 1;
var interval;

export function timer() {
  interval = setInterval(start, 1000);
}
export function start() {
  if (sec == 0) {
    min--;
    sec = 60;
  }
  sec--;
  if (min == 0 && sec == 0) {
    stop();
    data.setAttribute("disabled", "");
    result.innerText = "Fim!"
    result.style.color = "#808080";

  }
  document.querySelector("#timer").innerText =
    " " + twoNumber(min) + ":" + twoNumber(sec);
}
export function stop() {
  clearInterval(interval);
  sec = 0;
  min = 1;
  document.querySelector("#timer").innerText =
    " " + twoNumber(min) + ":" + twoNumber(sec);
  setTable(wordMin, keyPress, wordRight, wordWrong)
  modal.removeAttribute("checked")
}
export function twoNumber(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}