import "./style.css";

const textEl = document.getElementById("text") as HTMLElement;
const speedEl = document.getElementById("speed") as HTMLInputElement;

const text = "We Love Programming!";

let index = 1;
let speed = 300 / Number(speedEl?.value);

writeText();

function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  speed = 300 / Number(target);
});
