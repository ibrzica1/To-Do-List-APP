let display = document.querySelector(".display").innerHTML;
const buttons = document.querySelectorAll(".button");
let string = "";
console.log(display);
buttons.forEach(button => {
  button.addEventListener("click", () =>{
    let value = button.innerHTML;
    string += value;
    console.log(display);
    display.innerHTML = string;
  })
})