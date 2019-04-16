var Status = /** @class */ (function () {
    function Status() {
    }
    return Status;
}());
function gradeStudent(student) {
    return student.grade;
}
var grade = gradeStudent({ name: 'Alan', school: '3wa', grade: 'junior' });
console.log(grade);
gradeStudent({ name: 'Alan', school: '3wa' });
