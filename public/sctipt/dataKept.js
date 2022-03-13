$(document).ready(function(){
    $("#allMenu .btn").click(function(){
        let order = $(this).attr("id");
        alert(">>> "+ order);
    });
});