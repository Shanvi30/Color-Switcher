const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
      h1.style.color = "#fff";
      h2.style.color = "#fff";
      h3.style.color = "#fff";
    }
    if (e.target.id === "violet") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "orange") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "goldenrod") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "teal") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "powderblue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "olive") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "magenta") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "brown") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      h1.style.color = "#000";
      h2.style.color = "#000";
      h3.style.color = "#000";
    }
  });
});
