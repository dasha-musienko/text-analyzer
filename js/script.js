const inputEl = document.querySelector(".form-text");
const backgroundTextEl = document.querySelector(".typed-out");
const btnEl = document.querySelector(".btn");
const charactersItemEl = document.querySelector(".item[data-characters]");
const wordsItemEl = document.querySelector(".item[data-words]");
const sentencesItemEl = document.querySelector(".item[data-sentence]");
const lettersItemEl = document.querySelector(".item[data-letters]");
const charsItemEl = document.querySelector(".item[data-chars]");
const digitsItemEl = document.querySelector(".item[data-digits]");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
let text = "";

btnEl.addEventListener("click", btnElClickHandler);

function btnElClickHandler(e) {
  text = inputEl.value.toLowerCase();
  if (!text) {
    return window.alert("Enter minimum 1 symbol");
  }

  charactersItemEl.lastElementChild.textContent = `${countsSymbols(text)}`;
  wordsItemEl.lastElementChild.textContent = `${countsWords(text)}`;
  sentencesItemEl.lastElementChild.textContent = `${countsSentences(text)}`;
  lettersItemEl.lastElementChild.textContent = `${countsLetters(text)}`;
  charsItemEl.lastElementChild.textContent = `${countsChars(text)}`;
  digitsItemEl.lastElementChild.textContent = `${countsDigits(text)}`;

  inputEl.value = "";
}

function countsSymbols(t) {
  return t.length;
}

function countsWords(t) {
  return t
    .trim()
    .split(" ")
    .filter((el) => el).length;
}

function countsSentences(t) {
  return t
    .trim()
    .split(".")
    .filter((el) => el).length;
}

function countsLetters(t) {
  return t.split("").filter((el) => alphabet.includes(el)).length;
}

function countsChars(t) {
  const wordsArr = t
    .trim()
    .split(" ")
    .filter((el) => el && alphabet.includes(el[el.length - 1]));

  return (
    wordsArr.reduce((acc, el) => acc + el.length, 0) / wordsArr.length
  ).toFixed(2);
}

function countsDigits(t) {
  return t.split("").filter((el) => numbers.includes(el)).length;
}

new Textify(
  {
    el: ".container-title",
    animation: {
      stagger: 0.05,
      duration: 0.7,
      ease: "expo.inOut",
      animateProps: { rotate: 60, scale: 0, y: 0 },
    },
  },
  gsap
);
