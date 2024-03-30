function registrer() {
    // Henter verdiene fra HTML og oppretter et Javascript objekt.
    const motorvogn = {
        personnummer : $("#personnummer").val(),
        navn : $("#navn").val(),
        adresse : $("#adresse").val(),
        kjennetegn : $("#kjennetegn").val(),
        merke : $("#merke").val(),
        type : $("#type").val()
    };

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
    let utskrift = "<table><tr><th>Eiers personnummer</th>" +
        "<th>Eiers navn</th>" +
        "<th>Eiers adresse</th>" +
        "<th>Kjennetegn</th>" +
        "<th>Merke</th>" +
        "<th>Type</th></tr>";

    // Skriver ut alle bilene i registeret
    for (const bil of biler) {
        utskrift += "<tr><td>" +bil.personnummer+
            "</td><td>" +bil.navn+
            "</td><td>" +bil.adresse+
            "</td><td>" +bil.kjennetegn+
            "</td><td>" +bil.merke+
            "</td><td>" +bil.type+
            "</td></tr>";
    };

    // Avslutter tabellen
    utskrift += "</table>";

    // Setter HTML id'en til utskrift variablen
    $("#bilregister").html(utskrift);
}