// turns the Join Now button on or off depending on the checkbox.......
function toggleButton() {
    var box = document.getElementById("agree");
    var btn = document.getElementById("joinBtn");

    if (box.checked == true) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

// makes all the error messages empty............................
function clearErrors() {
    var ids = ["nameError", "ageError", "mobileError", "emailError",
               "passwordError", "confirmError", "planError", "dateError",
               "workoutError", "mainError", "backupError", "addonsError",
               "finalMessage"];

    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = "";
    }
}

function validateForm() {
    clearErrors();

    var valid = true;

    // taking the values from the form............................
    var name = document.getElementById("fullName").value.trim();
    var ageText = document.getElementById("age").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirmPassword").value;
    var plan = document.getElementById("plan").value;
    var startDate = document.getElementById("startDate").value;
    var mainTrainer = document.getElementById("mainTrainer").value;
    var backupTrainer = document.getElementById("backupTrainer").value;
    var addonsText = document.getElementById("addons").value;

    // Full name ...............................................
    if (name == "") {
        document.getElementById("nameError").innerHTML = "Your full name is missing.";
        valid = false;
    } else if (name.length < 3) {
        document.getElementById("nameError").innerHTML = "Full name is too short (minimum 3 letters).";
        valid = false;
    } else {
        var badChar = false;
        for (var i = 0; i < name.length; i++) {
            var ch = name.charAt(i);
            var isSmall = (ch >= "a" && ch <= "z");
            var isCapital = (ch >= "A" && ch <= "Z");
            if (isSmall == false && isCapital == false && ch != " ") {
                badChar = true;
            }
        }
        if (badChar == true) {
            document.getElementById("nameError").innerHTML = "Digits and symbols are not allowed in the full name.";
            valid = false;
        }
    }

    // Age ...............................................
    if (ageText == "" || isNaN(ageText) || Number(ageText) < 16 || Number(ageText) > 65) {
        document.getElementById("ageError").innerHTML = "Age must be a number from 16 to 65.";
        valid = false;
    }

    // Mobile...............................................
    var mobileOk = true;
    if (mobile.length != 11) {
        mobileOk = false;
    } else {
        for (var j = 0; j < mobile.length; j++) {
            var d = mobile.charAt(j);
            if (d < "0" || d > "9") {
                mobileOk = false;
            }
        }
        if (mobile.charAt(0) != "0" || mobile.charAt(1) != "1") {
            mobileOk = false;
        }
        if (mobile.charAt(2) < "3") {
            mobileOk = false;
        }
    }
    if (mobileOk == false) {
        document.getElementById("mobileError").innerHTML = "Enter a valid mobile number (11 digits, starting with 013 to 019).";
        valid = false;
    }

    // Email .................................................
    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email cannot be left empty.";
        valid = false;
    } else {
        var at = email.indexOf("@");
        if (email.indexOf(" ") != -1 || at == -1 || at == 0 || email.indexOf(".", at + 1) == -1) {
            document.getElementById("emailError").innerHTML = "This email does not look right.";
            valid = false;
        }
    }

    // Password .................................................
    if (pass.length < 8) {
        document.getElementById("passwordError").innerHTML = "Use a password of 8 or more characters.";
        valid = false;
    } else {
        var hasCapital = false;
        var hasDigit = false;
        for (var k = 0; k < pass.length; k++) {
            var p = pass.charAt(k);
            if (p >= "A" && p <= "Z") {
                hasCapital = true;
            }
            if (p >= "0" && p <= "9") {
                hasDigit = true;
            }
        }
        if (hasCapital == false || hasDigit == false) {
            document.getElementById("passwordError").innerHTML = "Password needs at least one capital letter and one digit.";
            valid = false;
        }
    }

    // Confirm password ..............................................
    if (confirmPass != pass) {
        document.getElementById("confirmError").innerHTML = "The two passwords are not the same.";
        valid = false;
    }

    // Plan ..............................................
    if (plan == "") {
        document.getElementById("planError").innerHTML = "Please choose a plan.";
        valid = false;
    }

    //  Start date ...............................................
    if (startDate == "") {
        document.getElementById("dateError").innerHTML = "Please pick a start date.";
        valid = false;
    }

    // Workout time ..............................................
    var radios = document.getElementsByName("workout");
    var picked = false;
    for (var r = 0; r < radios.length; r++) {
        if (radios[r].checked == true) {
            picked = true;
        }
    }
    if (picked == false) {
        document.getElementById("workoutError").innerHTML = "Please choose a workout time.";
        valid = false;
    }

    // Trainers ..............................................
    if (mainTrainer == "") {
        document.getElementById("mainError").innerHTML = "Please choose a main trainer.";
        valid = false;
    }

    if (backupTrainer == "") {
        document.getElementById("backupError").innerHTML = "Please choose a backup trainer.";
        valid = false;
    } else if (backupTrainer == mainTrainer) {
        document.getElementById("backupError").innerHTML = "Backup trainer must be different from the main trainer.";
        valid = false;
    }

    // Family add-ons ...............................................
    if (addonsText == "" || isNaN(addonsText) || addonsText.indexOf(".") != -1 ||
        Number(addonsText) < 0 || Number(addonsText) > 3) {
        document.getElementById("addonsError").innerHTML = "Add-ons must be a whole number from 0 to 3.";
        valid = false;
    }

    // if anything is wrong, stop here
    if (valid == false) {
        return false;
    }

    // Everything is correct, so calculate the fee .................
    var planFee = 0;
    if (plan == "Monthly") {
        planFee = 1500;
    } else if (plan == "Quarterly") {
        planFee = 4000;
    } else if (plan == "Yearly") {
        planFee = 14000;
    }

    var total = planFee + (Number(addonsText) * 500);

    document.getElementById("finalMessage").innerHTML =
        "Welcome, " + name + "! Your " + plan + " membership starts on " +
        startDate + ". Total payable: " + total + " Taka.";

    // Reset the form ...................................
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("addons").value = "";

    document.getElementById("plan").selectedIndex = 0;
    document.getElementById("mainTrainer").selectedIndex = 0;
    document.getElementById("backupTrainer").selectedIndex = 0;

    for (var x = 0; x < radios.length; x++) {
        radios[x].checked = false;
    }

    document.getElementById("agree").checked = false;
    document.getElementById("joinBtn").disabled = true;

    return false;   // so the page does not reload
}