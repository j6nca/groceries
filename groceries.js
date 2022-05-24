let data = ["template"];

let list = document.getElementById("myList");

let groceries = document.getElementById("groceries");

// var fr=new FileReader();
// let data2 = fr.readAsArrayBuffer("./list.text")
// console.log(data2)
fetch('https://jngbot.github.io/groceries/list.text')
  .then(response => response.text())
  .then(text => {
    data = text.split("\n"); 
    console.log(data);
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
  })

