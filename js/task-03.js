const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// способ 1 - метод insertAdjacentHTML и шаблонная строка

const galleryList = document.querySelector('#gallery');
// console.log(galleryList);
galleryList.insertAdjacentHTML('beforeend', images.map(image => `<li><img src = "${image.url}" alt = "${image.alt}"></li>`).join(""))
console.log(galleryList)

// присваиваем класс списку
galleryList.classList.add('js-images-list');

// присваиваем класс всем элементам списка
const imagesItems = document.querySelectorAll('li');
// console.log(imagesItems);
imagesItems.forEach(imagesItem => {
  imagesItem.classList.add('js-images-item')
})



// способ 2 - методы createElement, append

// const imagesList = images.forEach(image => {
//   const imagesItem = document.createElement('li');
//   const imagesItemEl = document.createElement('img');

//   imagesItemEl.setAttribute('src', image.url);
//   imagesItemEl.setAttribute('alt', image.alt);

//   imagesItem.append(imagesItemEl);
//   galleryList.append(imagesItem);

//   imagesItem.classList.add('js-images-item');
//   galleryList.classList.add('js-images-list');
// })





