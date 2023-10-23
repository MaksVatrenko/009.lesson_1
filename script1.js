const listImages = document.querySelector('.page__images');

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const randomIndex = Math.floor(Math.random() * images.length)
const img = document.createElement('img');

img.classList.add('page__image');
img.src = `../images/${images[randomIndex]}.jfif`;
listImages.appendChild(img);