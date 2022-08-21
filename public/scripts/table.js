const wordMin = document.querySelector("#wordMin")
const keyPress = document.querySelector("#keyPress")
const wordRight = document.querySelector("#wordRight")
const wordWrong = document.querySelector("#wordWrong")
const table = document.querySelector(".table")

export function setTable(wm, kp, wr, ww){
    table.removeAttribute("hidden")

    wordMin.innerHTML = wm + " P/M";
    keyPress.innerHTML = kp;
    wordRight.innerHTML = wr;
    wordWrong.innerHTML = ww;
}