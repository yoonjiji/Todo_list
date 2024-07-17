// Array to store the image linksconst 
const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

// Function to select a random image
const chosenImage = images[Math.floor(Math.random() * images.length)];

// Set the random image as the background
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);