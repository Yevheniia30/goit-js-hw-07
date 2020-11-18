const inputRef = document.querySelector("#font-size-control");
console.log(inputRef);

const textRef = document.querySelector("#text");
console.log(textRef);

// inputRef.addEventListener("input", (event) => {
//   textRef.style.fontSize = `${inputRef.value}px`;
// });

const inputHandler = (event) => {
  textRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener("input", inputHandler);
