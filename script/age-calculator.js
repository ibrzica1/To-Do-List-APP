let inputDate = document.getElementById("input-date");
let result = document.getElementById("result");
let year = 0;
let month = 0;
let day = 0;
let restYear = 0;
let restMonth = 0;



document.querySelector("button").addEventListener("click", () => {
  inputDate = new Date(inputDate.value);
  let dateNow = new Date();
  let daysTotal = Math.floor((dateNow - inputDate)/(1000*60*60*24));
  year = Math.floor(daysTotal/365);
  restYear = daysTotal % 365;
  month = Math.floor(restYear / 30);
  day = restYear % 30;
  
  console.log(daysTotal);
  console.log(restYear);
  console.log(month);
  
result.innerHTML = `You are ${year} years, ${month} months and ${day} days old`
});