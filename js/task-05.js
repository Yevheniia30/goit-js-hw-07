const inputRef = document.querySelector('#name-input')
console.log(inputRef)
const outputRef = document.querySelector('#name-output')
console.log(outputRef);
// const titleRef = document.querySelector('h1')
// console.log(titleRef);

inputRef.addEventListener('input', event=> {
   outputRef.textContent = event.target.value;
}) 



