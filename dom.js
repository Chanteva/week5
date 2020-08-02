function myFunction() {
    var x = document.createElement("LI");
    var t = document.createTextNode("Goldendoodle");
    x.appendChild(t);
    document.getElementById("myList").appendChild(x);
  }
  
function changeColor(button) {
    button.style.backgroundColor = "green";
  }