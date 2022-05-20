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

colorBtn.addEventListener("click", col); // could also add inline function on these.. i.e. colorBtn.addEventListener("click", () => alert(`My favorite color is mauve`)) replacing the need to create col function at line 7
placeBtn.addEventListener("click", plc);
ritualBtn.addEventListener("click", rtl);
