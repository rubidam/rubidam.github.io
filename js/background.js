const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const imageIndex = Math.floor(Math.random() * images.length);

const chosenImage = images[imageIndex];

const image = document.createElement("img");

image.src = `img/${chosenImage}`;

document.body.appendChild(image);
