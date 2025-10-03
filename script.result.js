const imags = [
  'url(imags/はじめから完璧なんか期待しちゃいけない。.png)',
  'url(imags/見ると聞くとは大違いさ。でもオレはやるよ。.png)',
];

const randomIndex = Math.floor(Math.random() * imags.length);
const randomBackgroundElement = document.getElementById('sabu');
randomBackgroundElement.style.backgroundImage = imags[randomIndex];