


var data = document.getElementById("ahmed")
var btn = document.getElementById("btn")



btn.addEventListener('click' , ()=>{
   localStorage.setItem("thing",data.value);



})


console.log(localStorage.getItem("thing"))