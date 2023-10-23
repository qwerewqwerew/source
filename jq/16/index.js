$(".o").click(function () {
    $("html").addClass("all_scrollFixed")
    $("#sitemap").show()
    $(".x").click(function () {
        $("#sitemap").hide()
        $("html").removeClass("all_scrollFixed")
    })
})