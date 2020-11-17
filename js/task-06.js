const inputRef = document.querySelector("#validation-input");
console.log(inputRef);
const dataLengthRef = Number(inputRef.getAttribute("data-length"));
console.log(dataLengthRef);

const inputBlurHandler = (event) => {
  if (
    (inputRef.value.length > 0 && inputRef.value.length < dataLengthRef) ||
    inputRef.value.length > dataLengthRef
  ) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  } else if (inputRef.value.length === dataLengthRef) {
    inputRef.classList.replace("invalid", "valid");
  } else {
    inputRef.classList.remove("invalid", "valid");
  }
};

inputRef.addEventListener("blur", inputBlurHandler);
