// Utskrift av personregister
function utSkrift() {
    let ut = "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th><th>Fødselsnr</th>" +
        "</tr>";
    for (let i = 0; i < personRegister.length; i++) {
        if (i % 2 === 0) {
            if (personRegister[i].fodselsnr[9] % 2 === 0) {
                ut += "<tr>";
                ut += "<td><strong><em>" + personRegister[i].navn + "</em></strong></td><td><strong><em>" + personRegister[i].adresse + "</em></strong></td><td><strong><em>" + personRegister[i].telefonnr + "</em></strong></td><td><strong><em>" + personRegister[i].fodselsnr + "</em></strong></td>";
                ut += "</tr>";
            } else {
                ut += "<tr>";
                ut += "<td><strong>" + personRegister[i].navn + "</strong></td><td><strong>" + personRegister[i].adresse + "</strong></td><td><strong>" + personRegister[i].telefonnr + "</strong></td><td><strong>" + personRegister[i].fodselsnr + "</strong></td>";
                ut += "</tr>";
            }
        } else {
            if (personRegister[i].fodselsnr[9] % 2 === 0) {
                ut += "<tr>";
                ut += "<td><em>" + personRegister[i].navn + "</em></td><td><em>" + personRegister[i].adresse + "</em></td><td><em>" + personRegister[i].telefonnr + "</em></td><td><em>" + personRegister[i].fodselsnr + "</em></td>";
                ut += "</tr>";
            } else {
                ut += "<tr>";
                ut += "<td>" + personRegister[i].navn + "</td><td>" + personRegister[i].adresse + "</td><td>" + personRegister[i].telefonnr + "</td><td>" + personRegister[i].fodselsnr + "</td>";
                ut += "</tr>";
            }
        }
    }
    ut += "</table>";
    document.getElementById("register").innerHTML = ut;
}

// Oppgave personregister
const personRegister = [];

function visRegister() {
    const person1 = {
        navn: "Ole Hansen",
        adresse: "Osloveien 82",
        telefonnr: 99887766,
        fodselsnr : "020401 32734"
    }
    const person2 = {
        navn: "Line Jensen",
        adresse: "Askerveien 40",
        telefonnr: 12334455,
        fodselsnr : "100900 92231"
    }

    personRegister.push(person1);
    personRegister.push(person2);

    utSkrift();
}

// Oppgave 1
function leggTilPerson() {
    const person3 = {
        navn : "Per Nilsen",
        adresse : "Storgata 6",
        telefonnr : 19283746,
        fodselsnr : "260702 19926"
    }
    personRegister.push(person3);

    utSkrift();
}

// Oppgave 2
function sorterRegister() {
    personRegister.sort((a, b) => {
        // Sammenlign etter navn
        if (a.navn < b.navn) return -1;
        if (a.navn > b.navn) return 1;
        return 0;
    });
    utSkrift();
}