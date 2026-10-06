// نمایش دانش آموزان مدیریار

window.onload = function(){

    let box = document.getElementById("students-list");

    if(box && typeof students !== "undefined"){

        students.forEach(function(student){

            box.innerHTML += `

            <div class="card">

                <h3>👨‍🎓 ${student.name}</h3>

                <p>سطح علمی: ${student.level || "ثبت نشده"}</p>

                <p>تمرکز: ${student.concentration || "ثبت نشده"}</p>

                <p>مسئولیت پذیری: ${student.responsibility || "ثبت نشده"}</p>

            </div>

            `;

        });

    }

};
