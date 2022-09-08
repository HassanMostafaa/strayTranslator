// GLOBALS
const ele = (ele) => document.querySelector(ele);

// vars
const input = ele("#input");
const output = ele(".output-lang");
let fromLang = "en";
const rev = ele(".rev");
const fromLabel = ele("label");
const toLabel = ele(".toLang");

input.addEventListener("input", () => {
  translate(fromLang);
});

const translate = (from) => {
  if (from === "en") {
    setTimeout(() => {
      output.innerText = input.value;
      output.style.fontFamily = "myFont";
    }, 1000);
  } else {
    setTimeout(() => {
      output.innerText = input.value;
      output.style.fontFamily = "Arial, Helvetica, sans-serif";
    }, 1000);
  }
};

rev.addEventListener("click", revLang);
window.addEventListener("load", setLang);

function setLang() {
  fromLabel.innerText = "English";
  toLabel.innerText = "Robot";
  input.style.fontFamily = "'Roboto', sans-serif";
  output.style.fontFamily = "myFont";
  fromLang = "en";
}
function revLang() {
  if (fromLang === "en") {
    fromLabel.innerText = "Robot";
    toLabel.innerText = "English";
    input.style.fontFamily = "myFont";
    output.style.fontFamily = "'Roboto', sans-serif";
    fromLang = "rb";
  } else {
    fromLabel.innerText = "English";
    toLabel.innerText = "Robot";
    input.style.fontFamily = "'Roboto', sans-serif";
    output.style.fontFamily = "myFont";
    fromLang = "en";
  }
}
