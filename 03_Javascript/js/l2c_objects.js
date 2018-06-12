
var students = [];

function student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
            return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    };

}

students.push(new student("Herman", "Snozberry", 62));
students.push(new student("Chuck", "Dixon", 35));
students.push(new student("Carl", "Lion", 12));

var student = students[0];

// for in loop
for (var key in student) {
    console.log(student[key]);
}


// WORKS
//for (var index = 0; index < students.length; index++) {
//    var student = students[index];
//    console.log(student.greeting());
//}
// END WORKS
    
//    var s1 = new student("Mary","Lambert",5);
//    console.log(s1);
//    console.log(s1.greeting());

//var student0 = {
//    firstName: "Barry",
//    lastName: "Smith",
//    age: 26,
//    greeting: function() {
//            return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//    }
//};

//var student1 = new Object();
//student1.firstName = "Steve";
//student1.lastName = "Cougan";
//student1.age = 42;
//
//var student2 = {};
//student2.firstName = "Leroy";
//student2.lastName = "Berg";
//student2.age = 12;
//
//var students = [];
//students.push(student0);
//students.push(student1);
//students.push(student2);
//



//console.log(student.firstName);
//console.log(student.lastName);

