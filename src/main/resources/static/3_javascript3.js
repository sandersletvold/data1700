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