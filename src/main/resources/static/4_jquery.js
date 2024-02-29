// Oppgave 1
function visNavn() {
    let getNavn = $("#navn").val();
    let getAlder = $("#alder").val();
    if (getAlder > 0) {
        $("#personalia").html(getNavn+"<br>"+getAlder+" år");
    } else {
        alert("Skriv inn gyldig alder");
    }
}

// Oppgave 2
function tilCelsius() {
    let hentFahrenheiht = $("#innFahrenheiht").val();
    let fahrenheiht = (5/9) * (hentFahrenheiht-32);
    fahrenheiht = fahrenheiht.toFixed(1);
    $("#innCelsius").val(fahrenheiht);
}

function tilFahrenheiht() {
    let hentCelsius = $("#innCelsius").val();
    let celsius = (9/5) * hentCelsius+32;
    celsius = celsius.toFixed(1);
    $("#innFahrenheiht").val(celsius);
}

// Oppgave 3
let tallLagring = [];
let symbolLagring = [];
let regnestykke = "";

function registrerTall() {
    let hentTall = $("#tall").val();
    tallLagring.push(hentTall);
    regnestykke += hentTall + " ";
    $("#regnestykke").html(regnestykke);
    $("#tall").val("");
}

function addisjonTegn() {
    symbolLagring.push("+");
    regnestykke += "+ ";
    $("#regnestykke").html(regnestykke);
}

function subtraksjonsTegn() {
    symbolLagring.push("-");
    regnestykke += "- ";
    $("#regnestykke").html(regnestykke);
}

function multiplikasjonsTegn() {
    symbolLagring.push("*");
    regnestykke += "* ";
    $("#regnestykke").html(regnestykke);
}

function divisjonTegn() {
    symbolLagring.push("/");
    regnestykke += "/ ";
    $("#regnestykke").html(regnestykke);
}

function modulusTegn() {
    symbolLagring.push("%");
    regnestykke += "% ";
    $("#regnestykke").html(regnestykke);
}

function utregning() {
    let svar = eval(tallLagring[0]);
    for (let i = 0; i < symbolLagring.length; i++) {
        let regnestykke = tallLagring[i + 1];
        regnestykke = symbolLagring[i] + regnestykke;
        svar = eval(svar + regnestykke);
    }
    $("#resultat").html(svar);
}

// Oppgave 4
const personligRegister = [];

function registrer() {
    let nyPerson = {
        nyttNavn : $("#innNavn").val(),
        nyAdresse : $("#innAdresse").val(),
        nyttTelefonnr : $("#innTelefonnr").val(),
        nyttFodselsnr : $("#innFodselsnr").val()
    };
    personligRegister.push(nyPerson)
    $("#innNavn").val("");
    $("#innAdresse").val("");
    $("#innTelefonnr").val("");
    $("#innFodselsnr").val("");
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
    $("#nyttRegister").html(ut);
}

// Ekstraoppgave 1 og 2
let boxNr = 0;
let gjoremal = "";
function leggTiliToDo() {
    gjoremal = $("#todoInput").val();
    $("#todoListe").append("<li>" + gjoremal + "<input id='" + boxNr + "' type='checkbox' onchange='flyttElement(this)'>" + "</li>");
    $("#todoInput").val("");
    boxNr++;
}

function flyttElement(box) {
    let oppgaveElemenet = box.parentElement;
    if (box.checked) {
        oppgaveElemenet.remove();
        $("#toDoListeFerdig").append(oppgaveElemenet);
    } else {
        oppgaveElemenet.remove();
        $("#todoListe").append(oppgaveElemenet);
    }
}

// Ekstraoppgave 3
const oppgaver = [];

const oppgave1 = {
    sporsmol: "Hvilket av alternativene er IKKE et kodespråk?",
    alternativer: ['C++', 'JavaScript', 'Python', 'PUTTY', 'C#'],
    riktigIndex: 3
};

const oppgave2 = {
    sporsmol: "Hvor mange forskjellige kodespråk har vi vært innom på studie til nå?",
    alternativer: ['3', '5', '4', '6'],
    riktigIndex: 1
};

const oppgave3 = {
    sporsmol: "Dette programmet er laget med jQuery, hva er det?",
    alternativer: ['Ett eget kodespråk', 'Ferdig kode man kan hente fra et bibliotek', 'En utvidelse av et kodespråk', 'En alternativ skrivemåte for ett annet kodespråk'],
    riktigIndex: 3
};

oppgaver.push(oppgave1);
oppgaver.push(oppgave2);
oppgaver.push(oppgave3);

function skrivUtOppgaver() {
    let ut = "";
    let id = 0;
    for (let oppgaveIndex = 0; oppgaveIndex < oppgaver.length; oppgaveIndex++) {
        let i = oppgaver[oppgaveIndex];
        ut += "<li><h3>"+i.sporsmol+"</h3></li>";
        for (let j of i.alternativer) {
            id++;
            ut += "<li>"+j+"<label for='"+id+"'><input id='"+id+"' type='radio' value='"+j+"' name='oppgave"+oppgaveIndex+"'></label></li>";
        }
    }
    $("#liste").html(ut);
}

function sjekkSvar() {
    let riktigeSvar = 0;
    for (let oppgaveIndex = 0; oppgaveIndex < oppgaver.length; oppgaveIndex++) {
        const radioKnapper = document.querySelectorAll('[name="oppgave' + oppgaveIndex + '"]');
        let svar = "";
        for (let alternativ of radioKnapper) {
            if (alternativ.checked) {
                svar = alternativ.value;
                break;
            }
        }
        if (sjekkOmRiktig(oppgaveIndex, svar)) {
            riktigeSvar++;
        }
    }
    $("#liste").html("");
    alert(riktigeSvar + " av " + oppgaver.length + " oppgaver er riktige");
}

function sjekkOmRiktig(oppgaveIndex, svar) {
    const oppgave = oppgaver[oppgaveIndex];
    return oppgave.riktigIndex === oppgave.alternativer.indexOf(svar);
}