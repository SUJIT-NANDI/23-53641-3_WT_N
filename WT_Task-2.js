console.log("student Information system...");
console.log();


let name = prompt("Enter name:");
let age =parseInt(prompt("ENter age"));
let cgpa =parseFloat(prompt("Enter your cgpa"));
let isStudent =(prompt("Are u a student?(true/false)") ==="true");
let grade =prompt("Enter student grade (A/B/C):").charAt(0);


console.log("Student Information:");
console.log("Name:"+name);
console.log("Age:"+age);
console.log("Cgpa:" + cgpa);
console.log("Student:"+isStudent);
console.log("Grade:"+grade);

let courses =[
  "Web Technology",
  "OOP",
  "DataBase"
];

console.log("Courses:");
for (let i=0;i<courses.length;i++){console.log(courses[i]);}

let marks=parseInt(prompt("Enter student marks:"));
if (marks>=80){
  console.log("Grade:A+");
}
else if (marks>=70){
  console.log("Grade:A");
}
else if (marks>=60){
  console.log("Grade:B");
}
else {console.log("Grade:F");}

function showStudent(name,age){
  console.log("Studnet Name:"+name);
  console.log("Student age:"+age); 
}
showStudent(name,age);

let students=[];
for (let i = 0; i < 3; i++) {
    students[i] = prompt("Enter student name:");
}
for(let i=0;i<students.length;i++){
  console.log(students[i]);
}