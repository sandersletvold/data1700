// Oppgave personregister
function javascript2oppg1() {
    const personregister = [];
    const person1 = {
        navn: "Line Jensen",
        adresse: "Askerveien 82",
        telefonnr: 12334455
    }
    personregister.push(person1);
    const person2 = {
        navn: "Ole Hansen",
        adresse: "Osloveien 82",
        telefonnr: 99887766
    }
    personregister.push(person2);
    let javascript2oppg1ut = "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
        "</tr>";
    for (let i = 0; i < personregister.length; i++) {
        javascript2oppg1ut += "<tr>";
        javascript2oppg1ut += "<td>" + personregister[i].navn + "</td><td>" + personregister[i].adresse + "</td><td>" + personregister[i].telefonnr;
        javascript2oppg1ut += "</tr>";
    }
    javascript2oppg1ut += "</table>";
    document.getElementById("test").innerHTML = javascript2oppg1ut;
}