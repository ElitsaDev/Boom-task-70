import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let mainDiv = document.querySelector(".main");

  let imageDiv = document.createElement('div');
  imageDiv.className = ('image');
  mainDiv.appendChild(imageDiv);

  let img = document.createElement('img');
  img.src = './images/favicon.ico';
  imageDiv.appendChild(img);
  
  let image = document.querySelector('.image');

  image.addEventListener('click', () => {
        image.style = 'transform: scale(2);'
  });

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
