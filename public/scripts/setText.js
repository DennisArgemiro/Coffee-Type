const data = document.querySelector("#input");
const result = document.querySelector("#result");
const table = document.querySelector(".table");
const text = document.querySelector("#text");
const newWord = document.querySelector("#nextWord");
const modal = document.querySelector("#meuModal");
import { timer } from "./timer.js";
import { removeSC } from "./filterText.js";

var keyPress = 0;
var wordRight = 0;
var wordWrong = 0;
var wordMin = 0;

var isStarted = false;

var content = ""

async function setContent(){
  return content = await getTextByAPI()
}

window.addEventListener("load", letsStart)

data.addEventListener("keyup", async () => {
  if (!isStarted) {
    timer();
    isStarted = true;
  }
  myfunction(content)
  keyPress += 1;
  
});

async function getTextByAPI(){
  // Esta função pega o texto via API
  const response =(await(await fetch("https://api-coffee-type.vercel.app/api/setText")).json()).text
  return response
}

export async function letsStart() {
    await setContent()
    setText(getText(content))
  }



function getText(text = ""){
  // Esta função separa o texto em palavras, embaralha e remove caracteres especias
  const wordList = text.split(" ");
  const listText = []
      for (let i = 0; i <= 20; i++) {
        listText.push(removeSC(wordList[Math.floor(Math.random() * wordList.length)]+ " "))
      }
      const texto =listText.join(" ")
      console.log(texto)
      return texto
}

function setText(content){
  // Esta função separa o texto em palavras, coloca uma nova palavra para ser digitada e remove da lista
  const listContent = content.split(" ")
  newWord.innerText = listContent[0];
  listContent.shift()

  text.innerText = listContent.join(" ")
}


function myfunction(content) {
  const word = text.innerText.split(" ");
  const newText = newWord.innerHTML;
  const list = data.value.split("");

  list.forEach((letter) => {
    const input = list.join("");

    if (letter == " ") {
      validateWord(input.trim(), newText);
      data.value = "";
      newWord.innerText = word[0]  
      word.shift();
      text.innerText = word.join(" ")   
      result.innerText = "Normal";
      result.style.color = "#808080"
      console.log( content.split(" ")[Math.floor(Math.random() * content.split(" ").length)] + " ")
      text.innerHTML +=" " + removeSC(content.split(" ")[Math.floor(Math.random() * content.split(" ").length)])
    } else {
      validateData(input,newText);
    }
  });
}

function validateData(input, text) {
  const textList = text.split("")
  const inputList = input.split("")
  var haveLetter = true

  if (input == text && input != undefined) {
    result.innerText = "Correto!";
    result.style.color = "#61FF00";
  } else{
    for (let i = 0; i < inputList.length; i++) {
      if(inputList[inputList.length-1] === textList[i]){
        haveLetter = true
        result.innerText = "Normal";
        result.style.color = "#808080"
      }else{
        haveLetter = false
      }
    }
    if(!haveLetter){
      result.innerText = "Errado!";
      result.style.color = "#FF0000"

    }
  }
}

function validateWord(data, word) {
  console.log(data + "nada");
  if (data == word) {
    wordRight += 1;
    wordMin += 1;
  } else {
    wordWrong += 1;
    wordMin += 1;
  }
}

export function reset() {
  table.setAttribute("hidden", "");
  modal.setAttribute("checked", "");
  isStarted = false;
  data.value = ""
  data.removeAttribute("disabled");
  result.innerText = "Resultado";
  result.style.color = "#808080";
  letsStart();
}

export { wordMin, wordRight, wordWrong, keyPress };
