// Oppgave 1
function oppgave1() {
    document.write("Hallo verden!");
}

// Oppgave 2
function oppgave2() {
    alert("Hallo verden!");
}

// Oppgave 3
function oppgave3(innlestData) {
    document.write(innlestData);
}

// Oppgave 4
function oppgave4(innlestData) {
    alert(innlestData);
}

// Oppgave 5
function oppgave5(innlestData) {
    console.log(innlestData);
}

// Oppgave 6
function oppgave6(innlestData) {
    innlestData = innlestData.fontcolor("blue");
    document.write(innlestData);
}

// Oppgave 7
function oppgave7(innlestData) {
    innlestData = innlestData.toUpperCase();
    alert(innlestData);
}

// Oppgave 8
function oppgave8() {
    const teller = 1;
    console.log(teller);
}

// Oppgave 9
let teller = 0;
function oppgave9() {
    teller += 1;
    console.log(teller);
}

// Oppgave 10
function oppgave10() {
    console.log("Du trykket på oppgave 9 knappen " + teller + " ganger");
}