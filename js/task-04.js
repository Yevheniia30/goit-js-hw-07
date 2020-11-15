let counterValue = 0;
const increment = value => {
    counterValue += 1;
    result();
}
const decrement = value => {
    counterValue -= 1;
    result();
}
const result = () => {
    valueRef.textContent = counterValue;
}

const buttonIncrementRef = document.querySelector('button[data-action="increment"]');
console.log(buttonIncrementRef);
const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
console.log(buttonDecrementRef);
const valueRef = document.querySelector('#value');
console.log(valueRef)

buttonIncrementRef.addEventListener('click', increment);
   
buttonDecrementRef.addEventListener('click', decrement); 
    
const buttonRef = document.querySelectorAll('button')
buttonRef.forEach(btn => {
    btn.classList.add('js-counter-btn');
})
buttonIncrementRef.classList.add('js-increment-btn');
buttonDecrementRef.classList.add('js-decrement-btn');
valueRef.classList.add('js-counter-result');




// const counterRef = document.querySelector('#counter');
// console.log(counterRef);


// const counterBtnRef = document.querySelector('.btn1');
// console.log(counterBtnRef);

// counterBtnRef.addEventListener('click', event => {
//     event.preventDefault();
//     console.dir(event.target);
// })