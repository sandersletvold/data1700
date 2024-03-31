// Oppgave 1
function hentTemp() {
    let maaned = $("#innMaaned").val();
    let url = "/tempRegister?maaned=" + maaned;

    //Henter temperatur fra serveren ved å bruke jquery
    $.get(url, function(data){
        let temp = "Temperaturen i " + maaned.toLowerCase() + " er " + data + " grader C."

        $("#tempFelt").html(temp);
    });
}

// Oppgave 2
