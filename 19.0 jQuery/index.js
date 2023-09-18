
$(document).ready(function () {
    $("h1").css("color", "red")
    $("button").text("Don't click me")
    $("button").html("<em>Hey</em>")

    $("a").attr("href", "https://www.yahoo.com")
    
    console.log($("a").attr("href"));

    $("button").click(function () {
        $("h1").css("color", "purple")
    })
    $("input").keypress(function (event){
        $("h1").text(event.key)
    })
})