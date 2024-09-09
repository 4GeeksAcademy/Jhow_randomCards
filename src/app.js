/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Función para generar una excusa aleatoria
  let items = ["♦", "♥", "♠", "♣"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  function getItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const generateCard = () => {
    const createdItem = getItem(items);
    const createdValue = getItem(values);

    const color = createdItem === "♦" || createdItem === "♥" ? "red" : "black";

    document.getElementById("item").style.color = color;
    document.getElementById("itemInvertido").style.color = color;
    document.getElementById("item").innerHTML = createdItem;
    document.getElementById("itemInvertido").innerHTML = createdItem;
    document.getElementById("value").innerHTML = createdValue;
  };
  generateCard();

  var cartaElement = document.querySelector(".carta");
  var widthInput = document.getElementById("widthInput");
  var heightInput = document.getElementById("heightInput");
  var changeDimentions = document.getElementById("changeDimentions");

  function applyStyles() {
    var newWidth = widthInput.value;
    var newHeight = heightInput.value;

    cartaElement.style.width = newWidth;
    cartaElement.style.height = newHeight;
  }

  changeDimentions.addEventListener("click", applyStyles);
  document.getElementById("generateCard").onclick = generateCard();
  setInterval(window.onload, 10000);
};
