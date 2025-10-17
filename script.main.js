const text1 = document.getElementById("nimaru");
const text2 = document.getElementById("hisigata");
const text3 = document.getElementById("maru");
const text4 = document.getElementById("sansen");
const text5 = document.getElementById("sankaku");

document.getElementById("nimaru").addEventListener("click", function() {
  text1.classList.add('add-style');
  setTimeout(function() {
    window.location.href = "result.html";
  }, 2000);
});

document.getElementById("hisigata").addEventListener("click", function() {
  text2.classList.add('add-style');
  setTimeout(function() {
    window.location.href = "result.html";
  }, 2000);
});

document.getElementById("maru").addEventListener("click", function() {
  text3.classList.add('add-style');
  setTimeout(function() {
    window.location.href = "result.html";
  }, 2000);
});

document.getElementById("sansen").addEventListener("click", function() {
  text4.classList.add('add-style');
  setTimeout(function() {
    window.location.href = "result.html";
  }, 2000);
});

document.getElementById("sankaku").addEventListener("click", function() {
  text5.classList.add('add-style');
  setTimeout(function() {
    window.location.href = "result.html";
  }, 2000);
});