const counter = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

let count = 0;

function onIncrement() {
  count = count + 1;
  console.log(count);
  counter.innerText = count;
}

function onSave() {
  let countStr = ` ${count} - `;
  saveEl.innerText += countStr;
  counter.innerText = 0;
  count = 0;
}
