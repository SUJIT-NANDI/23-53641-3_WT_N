function showStudentInfo(name, age, email, membership) {

    let courses = ["Web Tech", "OOP", "Database"];

    console.log("Courses:");

    for (let i = 0; i < courses.length; i++) {
        console.log(courses[i]);
    }

    document.getElementById("output").innerHTML =
        "<h2>Student Information</h2>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Email: " + email + "<br>" +
        "Membership: " + membership + "<br>" +
        "<h3>Courses</h3>" +
        courses.join("<br>");
}

document.getElementById("studentform").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;

    let membership = document.querySelector(
        'input[name="membership"]:checked'
    ).value;

    showStudentInfo(name, age, email, membership);

});
