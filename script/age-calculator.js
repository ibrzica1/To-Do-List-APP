let inputDate = document.getElementById("input-date");
let result = document.getElementById("result");
let year = 0;
let month = 0;
let day = 0;



document.querySelector("button").addEventListener("click", () => {
  inputDate = new Date(inputDate.value);
  let dateNow = new Date();
  year = dateNow.getFullYear() - inputDate.getFullYear();
  month = dateNow.getMonth() - inputDate.getMonth();
  day = dateNow.getDay() - inputDate.getDay();
  
result.innerHTML = `You are ${year} years, ${month} months and ${day} days old`
});