console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert(`Form has successfully been submitted!`);
}

function comp(evt) {
  // evt.preventDefault():
  alert(`You're my duck of choice`);
}

let form = document.querySelector("form#contact");
let img = document.querySelector("img");

form.addEventListener("submit", handleSubmit);

img.addEventListener("mouseover", comp);
