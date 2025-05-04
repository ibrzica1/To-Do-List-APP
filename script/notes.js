const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".create-note");
let notes = document.querySelectorAll(".input-box");

function loadData() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

loadData();

function saveData() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=> {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "/images/Notes/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  saveData();
})

notesContainer.addEventListener("click", function(e){
  if(e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  }
  else if(e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function() {
        saveData();
      }
    })
  }
}) 

document.addEventListener("keydown", event => {
  if(event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})