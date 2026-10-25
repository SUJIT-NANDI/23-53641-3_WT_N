function add(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var display = document.getElementById("display");

    try {
        display.value = Function("return (" + display.value + ")")();
    } catch (error) {
        display.value = "Error";
    }
}