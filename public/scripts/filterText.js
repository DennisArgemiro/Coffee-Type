const text = document.querySelector("#text");
export const txt = text.innerText

export function removeSC(word) {
  const check = word.split("");
  const numList = [1,2,3,4,5,6,7,8,9,0];


  const dotList = [
    ".",
    ",",
    ";",
    ":",
    "/",
    "?",
    "[",
    "]",
    "{",
    "}",
    "=",
    "+",
    "_",
    "|",
    "*",
    "!",
    "#",
    "$",
    "%",
    "&",
    "(",
    ")",
    '"',
    "'",
  ];
  for (let i = 0; i < check.length; i++) {
    numList.forEach(num => {
        if(check[i] == num.toString()){
         check.splice(i, 1);
        }
    });
    dotList.forEach((element) => {
      if (check[i] == element) {
        check.splice(i, 1);
      }
    });
  }

  return check.join("");
}
