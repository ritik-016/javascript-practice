console.log("Ram Ram");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("red").style.background = "red"

// document.querySelector(".box").style.backgroundColor = "pink";

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "pink";
});
