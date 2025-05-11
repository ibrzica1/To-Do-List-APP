let display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
const calculators = document.querySelectorAll(".button-calculators");
let string = "";
console.log(display);
buttons.forEach(button => {
  button.addEventListener("click", () =>{
    if(button.innerHTML == 0 & string == "") {

    }
    else {
      string += button.innerHTML;
      console.log(string);
      display.innerHTML = string;
    }
  })
})

calculators.forEach(calculator => {
  calculator.addEventListener('click', () => {
    let number = parseFloat(string);
    string += calculator.innerHTML;
    display.innerHTML = string;
    console.log(number);
  })
})


