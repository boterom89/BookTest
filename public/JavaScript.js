//function loadSender() {
//    $.ajax({
//        type: "POST",
//        url: "/hello",
//        cache: false,
//        dataType: "plain/text",
//        success: function (result) {

//        }
//    });
//}

$("#boton").click(function () {
    var bla = $("#input").val();
    //alert(bla);
    $.post("http://localhost:8080/hello",
    {
        input: bla,
        city: "Duckburg"
    });
});