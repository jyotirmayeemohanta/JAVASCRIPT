console.log("hello Jyoti");

// preted that this Response is coming from the server
const student = [
    {name: "Jyoti", subject: "JavaScript"},
    {name: "Jayashree", subject: "React"}

]

function enrollStudent(student){
    setTimeout(function() {
        student.push(student);

    },3000);

}

function getStudent(){
    setTimeout(function() {
        student.push(student);
        let str = "";
        student.forEach(function(student){
            str += ''
        })
    }, 1000);
}