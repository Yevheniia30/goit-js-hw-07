const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingList = ingredients.forEach(ing => {
    const ingItem = document.createElement('li');
    ingItem.textContent = ing;
    console.log(ingItem);

    const ingTotal = document.querySelector('#ingredients');
    ingTotal.appendChild(ingItem)
})

