const categoriesCount = document.querySelector('#categories').children.length;
console.log(`В списке ${categoriesCount} категории`);

const categoriesList = document.querySelectorAll('.item');
categoriesList.forEach(category=>console.log(`Категория: ${category.firstElementChild.textContent} \nКоличество элементов: ${category.lastElementChild.children.length}`))


