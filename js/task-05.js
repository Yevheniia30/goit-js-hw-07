const inputRef = document.querySelector('#name-input')
const outputRef = document.querySelector('#name-output')

// const titleRef = document.querySelector('h1')
// console.log(titleRef);

// способ 1
// inputRef.addEventListener('input', event=> {
//    outputRef.textContent = event.target.value;
// }) 

const inputEvent = input => {
    inputRef.value ? outputRef.textContent = input.target.value : outputRef.textContent='незнакомец'
}

inputRef.addEventListener('input', inputEvent);
