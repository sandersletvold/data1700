$("#maaned").change(function() {
    let month = $("#maaned").val();

    $.get("http://localhost:8080/5_spring1", function(data){
        let temp = "Temperaturen i " + month.toLowerCase() + " er " + data + " grader C.";
        $("#temp").html(temp);
    });
});