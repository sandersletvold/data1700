function registrer() {
    /* Regler for validering */
    const navnRegex = /^[A-Åa-å]+$/;
    const personnrRegex = /^[0-9]+$/;
    const adresseRegex = /^[a-åA-Å]+[\s]+[0-9]+$/
    const regNrRegex = /^[a-åA-Å]+[0-9]+$/
    /*  "epostRegex" er hentet fra:
        https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/
        Z er endret til Å for å tilpasse norsk
    */

    // Henter verdiene fra HTML og oppretter et Javascript objekt.
    const motorvogn = {
        personnummer : $("#personnummer").val(),
        navn : $("#navn").val(),
        adresse : $("#adresse").val(),
        kjennetegn : $("#kjennetegn").val(),
        merke : $("#merke").val(),
        type : $("#type").val()
    };

    let feilmld = "";
    if (!personnrRegex.test(motorvogn.personnummer)) {
        feilmld += "Personnummer, ";
    }
    if (!navnRegex.test(motorvogn.navn)) {
        feilmld += "Navn, ";
    }
    if (!adresseRegex.test(motorvogn.adresse)) {
        feilmld += "Adresse, ";
    }
    if (!regNrRegex.test(motorvogn.kjennetegn)) {
        feilmld += "Reg nummer, ";
    }
    if (motorvogn.merke === "") {
        feilmld += "Merke, ";
    }
    if (motorvogn.type === "") {
        feilmld += "Type, ";
    }

    if (feilmld === "") {
        // Sender objektet til server med POST.
        $.post("/tilServer", motorvogn, function() {
            hent();
        });

        // Reset av input feltene etter registrering
        $("#personnummer").val("");
        $("#navn").val("");
        $("#adresse").val("");
        $("#kjennetegn").val("");
        $("#merke").val("");
        $("#type").val("");
    } else {
        alert("Ugyldig input ved: " +feilmld);
    }
}

function slett() {
    $.get("/slettRegister", function (biler){
        ut(biler);
    });
}

function hent() {

    $.get("/tilKlient", function (biler){
        ut(biler);
    });
}

function ut(biler) {
    // Overskrift for tabellen
    let utskrift = "<table class='table'>";

    // Skriver ut alle bilene i registeret
    for (const bil of biler) {
        utskrift += "<tr><th class='active'>Eiers personnummer</th><td>" +bil.personnummer+
            "</td></tr><tr><th class='active'>Eiers navn</th><td>" +bil.navn+
            "</td></tr><tr><th class='active'>Eiers adresse</th><td>" +bil.adresse+
            "</td></tr><tr><th class='active'>Kjennetegn</th><td>" +bil.kjennetegn+
            "</td></tr><tr><th class='active'>Merke</th><td>" +bil.merke+
            "</td></tr><tr><th class='active'>Type</th><td>" +bil.type+
            "</td></tr><tr><th class='active'></th><td></td></tr>";
    };

    // Avslutter tabellen
    utskrift += "</table>";

    // Setter HTML id'en til utskrift variablen
    $("#bilregister").html(utskrift);
}

// Sjekker etter hvilket merke som er valgt og fyller type-valget med passende modeller
function merkeSjekk() {
    if ($("#merke").val() === "Audi") {
        $("#standardtype").html("");
        $("#type1").html("A3");
        $("#type2").html("A6");
        $("#type3").html("TT");
        $("#type4").html("RS6");
        $("#type5").html("R8");
    } else if ($("#merke").val() === "BMW") {
        $("#standardtype").html("");
        $("#type1").html("118i");
        $("#type2").html("320d");
        $("#type3").html("530i");
        $("#type4").html("Z4");
        $("#type5").html("M5");
    } else if ($("#merke").val() === "Mercedes") {
        $("#standardtype").html("");
        $("#type1").html("A250");
        $("#type2").html("CLS350");
        $("#type3").html("EQC400");
        $("#type4").html("C63 AMG");
        $("#type5").html("G63 AMG");
    } else if ($("#merke").val() === "Volkswagen") {
        $("#standardtype").html("");
        $("#type1").html("Amarok");
        $("#type2").html("Passat");
        $("#type3").html("Golf");
        $("#type4").html("ID4");
        $("#type5").html("ID5");
    } else if ($("#merke").val() === "Skoda") {
        $("#standardtype").html("");
        $("#type1").html("Octavia");
        $("#type2").html("Karoq");
        $("#type3").html("Octavia RS");
        $("#type4").html("Superb");
        $("#type5").html("Kodiak");
    }
}