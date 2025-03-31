$(document).ready(function () {

    $('#more img').hover(function () {
        let n = $(this).index();
        $("#sample img").hide().eq(n).show();

        $('#more img').removeClass("active");
        $(this).addClass("active");
    });
    
    $("nav").click(function () {
        window.location.href = "sub.html";
    });
});