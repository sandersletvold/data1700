/* UKESOPPGAVER JAVASCRIPT 1 */
// Oppgave 1
function javascript1oppg1() {
    document.write("Hallo verden!");
}
// Oppgave 2
function javascript1oppg2() {
    alert("Hallo verden!");
}
// Oppgave 3
function javascript1oppg3(innlestData) {
    document.write(innlestData);
}
// Oppgave 4
function javascript1oppg4(innlestData) {
    alert(innlestData);
}
// Oppgave 5
function javascript1oppg5(innlestData) {
    console.log(innlestData);
}
// Oppgave 6
function javascript1oppg6(innlestData) {
    innlestData = innlestData.fontcolor("blue");
    document.write(innlestData);
}
// Oppgave 7
function javascript1oppg7(innlestData) {
    innlestData = innlestData.toUpperCase();
    alert(innlestData);
}
// Oppgave 8
function javascript1oppg8() {
    const teller = 1;
    console.log(teller);
}
// Oppgave 9
let javascript1teller = 0;
function javascript1oppg9() {
    javascript1teller += 1;
    console.log(javascript1teller);
}
// Oppgave 10
function javascript1oppg10() {
    console.log("Du trykket på oppgave 9 knappen "+javascript1teller+ " ganger");
}


/* UKESOPPGAVER JAVASCRIPT 2 */
// Oppgave personregister
function javascript2oppg1() {
    const personregister = [];
    const person1 = {
        navn : "Line Jensen",
        adresse : "Askerveien 82",
        telefonnr : 12334455
    }
    personregister.push(person1);
    const person2 = {
        navn : "Ole Hansen",
        adresse: "Osloveien 82",
        telefonnr : 99887766
    }
    personregister.push(person2);

    let javascript2oppg1ut = "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
        "</tr>";
    for (let i = 0; i<personregister.length; i++) {
        javascript2oppg1ut += "<tr>";
        javascript2oppg1ut += "<td>"+personregister[i].navn+"</td><td>"+personregister[i].adresse+"</td><td>"+personregister[i].telefonnr;
        javascript2oppg1ut += "</tr>";
    }
    javascript2oppg1ut += "</table>";
    document.getElementById("test").innerHTML = javascript2oppg1ut;
}

/* UKESOPPGAVER JAVASCRIPT 3 */


/* UKESOPPGAVER JQUERY */


/* UKESOPPGAVER SPRING 1 */


/* UKESOPPGAVER SPRING 2 */


/* UKESOPPGAVER BOOTSTRAP */


/* UKESOPPGAVER NEDTREKKSLISTER */


/* UKESOPPGAVER DATASTRUKTURER */


/* UKESOPPGAVER GENERISKE DATATYPER */


/* Ukesoppgaver SQL 1 */


/* Ukesoppgaver SQL 2 */


/* UKESOPPGAVER INPUT VALIDERING */


/* UKESOPPGAVER SESJONER */


/* UKESOPPGAVER SIKKERHET */