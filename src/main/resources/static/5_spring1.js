// Oppgave 1
function hent(){
    let month = $("#innMaaned").val();

    let url = "/innMaaned?month=" + month

    //Henter temperatur fra serveren ved å bruke jquery
    $.get(url, function(data){
        let temp = "Temperaturen i " + month.toLowerCase() + " er " + data + " grader C."

        $("#temp").html(temp);
    })
}

// Oppgave 2
