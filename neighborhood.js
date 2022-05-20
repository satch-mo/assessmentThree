let randomRest = document.querySelector("button#randomrest");

const raunt = (evt) => {
  let arr = [`Orlandos Italian`, `Caprock Cafe`, `Blue Sky Texas`];
  let random = arr[Math.floor(Math.random() * arr.length)];
  alert(random);
};

randomRest.addEventListener("click", raunt);
