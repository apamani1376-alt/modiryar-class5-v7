// بانک اطلاعات دانش آموزان مدیریار

const students = [

    {
        id:1,
        name:"دانش آموز ۱",
        level:"",
        concentration:"",
        responsibility:"",
        strengths:"",
        weaknesses:"",
        notes:""
    },

    {
        id:2,
        name:"دانش آموز ۲",
        level:"",
        concentration:"",
        responsibility:"",
        strengths:"",
        weaknesses:"",
        notes:""
    }

];


// اضافه کردن دانش آموز جدید

function addStudent(name){

    let newStudent = {

        id: students.length + 1,

        name:name,

        level:"",

        concentration:"",

        responsibility:"",

        strengths:"",

        weaknesses:"",

        notes:""

    };


    students.push(newStudent);

}


// پیدا کردن دانش آموز

function getStudent(id){

    return students.find(
        student => student.id === id
    );

}
