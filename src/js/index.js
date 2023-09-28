import printMe from "./print";
import "../style.css";
import "../img/logo.png";

const btn = document.createElement("button");
btn.innerHTML = "Click Me & Check Console";

btn.addEventListener("click", printMe);
document.body.appendChild(btn);
