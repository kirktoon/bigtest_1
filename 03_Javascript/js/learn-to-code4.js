var students = ["Timmy","Jane", "Steve", "Barry", "Larry"];

var naughty = [];
naughty.push(students[3]);

var index = naughty.indexOf("Barry");
console.log(naughty);
if (index > -1) {
   naughty.splice(index, 1);
}

console.log(naughty);