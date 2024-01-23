
const image = document.querySelector("#img"),
input = document.querySelector("#files");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btnAlert = document.querySelector(".close");
var span = document.getElementsByClassName("close")[0];

// form
input.addEventListener('change',()=>{
  image.src = URL.createObjectURL(input.files[0]);
  console.log(image);
})  
// Get the modal

btn.onclick = function() {
  modal.style.display = "block";
}
btnAlert.onclick = function() {
    alert.style.display = "none";
}
span.onclick = function() {
  modal.style.display = "none";
}

