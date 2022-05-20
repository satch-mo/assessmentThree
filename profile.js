console.log(`Hello World`);

let colorBtn = document.querySelector("#color");
let placeBtn = document.querySelector("#place");
let ritualBtn = document.querySelector("#ritual");

const col = (evt) => {
  alert(`My favorite color is mauve`);
};

const plc = (evt) => {
  alert(`My favorite place is where my friends are`);
};

const rtl = (evt) => {
  alert(`My favorite ritual is listening to ska music in the shower`);
};

colorBtn.addEventListener("click", col);
placeBtn.addEventListener("click", plc);
ritualBtn.addEventListener("click", rtl);
