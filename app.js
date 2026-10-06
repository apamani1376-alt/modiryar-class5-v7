document.addEventListener("DOMContentLoaded", function(){

const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{
    btn.addEventListener("click", function(){

        if(btn.innerText.includes("پرونده دانش‌آموزان")){
            alert("بخش پرونده دانش‌آموزان در حال ساخت است");
        }

        if(btn.innerText.includes("پایش یادگیری")){
            alert("بخش پایش یادگیری در حال ساخت است");
        }

        if(btn.innerText.includes("گزارش")){
            alert("بخش گزارش‌ها در حال ساخت است");
        }

    });
});

});
