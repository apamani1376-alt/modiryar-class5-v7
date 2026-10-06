document.addEventListener("DOMContentLoaded", function(){

const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{
    btn.onclick = function(){
        alert("دکمه فعال شد: " + btn.innerText);
    }
});

});
