// Oppgave personregister
const personRegister = [];

function visRegister() {
    const person1 = {
        navn: "Ole Hansen",
        adresse: "Osloveien 82",
        telefonnr: 99887766
    }
    const person2 = {
        navn: "Line Jensen",
        adresse: "Askerveien 82",
        telefonnr: 12334455
    }

    personRegister.push(person1);
    personRegister.push(person2);

    let ut = "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
        "</tr>";
    for (let i = 0; i < personRegister.length; i++) {
        ut += "<tr>";
        ut += "<td>" + personRegister[i].navn + "</td><td>" + personRegister[i].adresse + "</td><td>" + personRegister[i].telefonnr;
        ut += "</tr>";
    }
    ut += "</table>";
    document.getElementById("register").innerHTML = ut;
}

// Oppgave 1
function leggTilPerson() {
    const person3 = {
        navn : "Per Nilsen",
        adresse : "Storgata 6",
        telefonnr : 19283746
    }
    personRegister.push(person3);
}

// Oppgave 2
function sorterRegister() {
    personRegister.sort();
}