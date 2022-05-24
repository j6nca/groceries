let data = [
    "Ram", "Shyam", "Sita", "Gita"];

let list = document.getElementById("myList");

let groceries = document.getElementById("groceries");

// var fr=new FileReader();
// let data2 = fr.readAsArrayBuffer("./list.text")
// console.log(data2)

fetch('./list.text')
  .then(response => response.text())
  .then(text => console.log(text))

data.forEach((item) => {
    let input = document.createElement("input")
    let label = document.createElement("label")
    let br = document.createElement("br")
    input.type = "checkbox"
    label.innerText = item;
    groceries.appendChild(input);
    groceries.appendChild(label);
    groceries.appendChild(br);
});