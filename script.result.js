const imags = [
  'url(imags/poruko.png)',
  'url(imags/haikei.png)'
];

const randomIndex = Math.floor(Math.random() * imags.length);
const randomBackgroundElement = document.getElementById('sabu');
randomBackgroundElement.style.backgroundImage = imags[randomIndex];