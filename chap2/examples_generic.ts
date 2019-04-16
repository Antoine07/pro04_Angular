class Status {
    grade: string;
}

function gradeStudent<T extends Status>(student: T): string {
    return student.grade;
}

// le littéral suivant possède bien une propriété grade donc ça marche
let grade = gradeStudent({ name : 'Alan', school : '3wa', grade : 'junior'});

console.log(grade);

// gradeStudent({ name : 'Alan', school : '3wa'}); // doesnt work
