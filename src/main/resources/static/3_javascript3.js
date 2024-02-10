// Oppgave 1
function visNavn() {
    let getNavn = document.getElementById("navn").value;
    let getAlder = document.getElementById("alder").value;
    if (getAlder > 0) {
        document.getElementById("personalia").innerHTML = getNavn+"<br>"+getAlder+" år";
    } else {
        alert("Skriv inn gyldig alder");
    }
}

// Oppgave 2
function tilCelsius() {
    let hentFahrenheiht = document.getElementById("innFahrenheiht").value;
    let fahrenheiht = (5/9) * (hentFahrenheiht-32);
    fahrenheiht = +fahrenheiht.toFixed(1);
    document.getElementById("innCelsius").value = fahrenheiht;
}

function tilFahrenheiht() {
    let hentCelsius = document.getElementById("innCelsius").value;
    let celsius = (9/5) * hentCelsius+32;
    celsius = +celsius.toFixed(1);
    document.getElementById("innFahrenheiht").value = celsius;
}

// Oppgave 3
let tallLagring = [];
let symbolLagring = [];
let regnestykke = "";

function registrerTall() {
    let hentTall = document.getElementById("tall").value;
    tallLagring.push(hentTall);
    regnestykke += hentTall + " ";
    document.getElementById("regnestykke").innerHTML = regnestykke;
    document.getElementById("tall").value = "";
}

function addisjonTegn() {
    symbolLagring.push("+");
    regnestykke += "+ ";
    document.getElementById("regnestykke").innerHTML = regnestykke;
}

function subtraksjonsTegn() {
    symbolLagring.push("-");
    regnestykke += "- ";
    document.getElementById("regnestykke").innerHTML = regnestykke;
}

function multiplikasjonsTegn() {
    symbolLagring.push("*");
    regnestykke += "* ";
    document.getElementById("regnestykke").innerHTML = regnestykke;
}

function divisjonTegn() {
    symbolLagring.push("/");
    regnestykke += "/ ";
    document.getElementById("regnestykke").innerHTML = regnestykke;
}

function modulusTegn() {
    symbolLagring.push("%");
    regnestykke += "% ";
    document.getElementById("regnestykke").innerHTML = regnestykke;
}

function utregning() {
    let svar = eval(tallLagring[0]);
    for (let i = 0; i < symbolLagring.length; i++) {
        let regnestykke = tallLagring[i + 1];
        regnestykke = symbolLagring[i] + regnestykke;
        svar = eval(svar + regnestykke);
    }
    document.getElementById("resultat").innerHTML = svar;
}

// Oppgave 4
const personligRegister = [];

function registrer() {
    let nyPerson = {
        nyttNavn : document.getElementById("innNavn").value,
        nyAdresse : document.getElementById("innAdresse").value,
        nyttTelefonnr : document.getElementById("innTelefonnr").value,
        nyttFodselsnr : document.getElementById("innFodselsnr").value
    };
    personligRegister.push(nyPerson)
    document.getElementById("innNavn").value = "";
    document.getElementById("innAdresse").value = "";
    document.getElementById("innTelefonnr").value = "";
    document.getElementById("innFodselsnr").value = "";
}

function skrivUtRegister() {
    let ut = "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th><th>Fødselsnr</th>" +
        "</tr>";
    for (let i = 0; i < personligRegister.length; i++) {
        if (i % 2 === 0) {
            if (personligRegister[i].nyttFodselsnr[9] % 2 === 0) {
                ut += "<tr>";
                ut += "<td><strong><em>" + personligRegister[i].nyttNavn + "</em></strong></td><td><strong><em>" + personligRegister[i].nyAdresse + "</em></strong></td><td><strong><em>" + personligRegister[i].nyttTelefonnr + "</em></strong></td><td><strong><em>" + personligRegister[i].nyttFodselsnr + "</em></strong></td>";
                ut += "</tr>";
            } else {
                ut += "<tr>";
                ut += "<td><strong>" + personligRegister[i].nyttNavn + "</strong></td><td><strong>" + personligRegister[i].nyAdresse + "</strong></td><td><strong>" + personligRegister[i].nyttTelefonnr + "</strong></td><td><strong>" + personligRegister[i].nyttFodselsnr + "</strong></td>";
                ut += "</tr>";
            }
        } else {
            if (personligRegister[i].nyttFodselsnr[9] % 2 === 0) {
                ut += "<tr>";
                ut += "<td><em>" + personligRegister[i].nyttNavn + "</em></td><td><em>" + personligRegister[i].nyAdresse + "</em></td><td><em>" + personligRegister[i].nyttTelefonnr + "</em></td><td><em>" + personligRegister[i].nyttFodselsnr + "</em></td>";
                ut += "</tr>";
            } else {
                ut += "<tr>";
                ut += "<td>" + personligRegister[i].nyttNavn + "</td><td>" + personligRegister[i].nyAdresse + "</td><td>" + personligRegister[i].nyttTelefonnr + "</td><td>" + personligRegister[i].nyttFodselsnr + "</td>";
                ut += "</tr>";
            }
        }
    }
    ut += "</table>";
    document.getElementById("nyttRegister").innerHTML = ut;
}