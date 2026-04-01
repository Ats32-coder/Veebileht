// TO-DO LIST
function addTask() { // Funktsioon uue ülesande lisamiseks
    const input = document.getElementById("taskInput"); // Võtab sisestusvälja
    const taskText = input.value; // Loeb sisestatud teksti

    if (taskText === "") return; // Kui tühi, siis ei tee midagi

    const li = document.createElement("li"); // Loob uue loendi elemendi
    li.textContent = taskText; // Paneb teksti sisse

    li.onclick = function () { // Kui klikitakse ülesandel
        li.style.textDecoration = "line-through"; // Tõmbab joone peale
    };

    document.getElementById("taskList").appendChild(li); // Lisab loendisse
    input.value = ""; // Tühjendab sisestusvälja
}

// KALKULAATOR
function calculate(operator) { // Funktsioon arvutamiseks
    const num1 = parseFloat(document.getElementById("num1").value); // Võtab esimese numbri
    const num2 = parseFloat(document.getElementById("num2").value); // Võtab teise numbri

    let result = 0; // Algväärtus

    if (operator === '+') result = num1 + num2; // Liitmine
    if (operator === '-') result = num1 - num2; // Lahutamine
    if (operator === '*') result = num1 * num2; // Korrutamine
    if (operator === '/') result = num2 !== 0 ? num1 / num2 : "Viga"; // Jagamine (väldib nulliga jagamist)

    document.getElementById("result").textContent = result; // Kuvab tulemuse
}

// VORMI VALIDEERIMINE
function validateForm() { // Funktsioon vormi kontrolliks
    const name = document.getElementById("name").value; // Võtab nime
    const email = document.getElementById("email").value; // Võtab emaili
    const errorMsg = document.getElementById("errorMsg"); // Võtab veateate elemendi

    if (name === "" || email === "") { // Kontrollib kas väljad on täidetud
        errorMsg.textContent = "Palun täida kõik väljad!"; // Kuvab vea
        return false; // Takistab vormi saatmist
    }

    errorMsg.textContent = ""; // Eemaldab veateate
    alert("Vorm saadetud!"); // Näitab teadet
    return true; // Lubab vormi saata
}