(function () {
    $.getJSON("assets/data/featured-products.json", function (data) {
        var featuredProductsTemplate = Handlebars.compile($("#featured-products-template").html());
        $("#featured-products-container").html(featuredProductsTemplate(data));
    }).fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.log("Request Failed: " + err);
    });

    $("#ex2").slider({});

    $("#search-container").find(".input-group.date").datepicker({
        autoclose: true
    });

    $(".search").click(function () {
        $("#home-container").hide();
        $("#search-container").show();
        return false;
    });
}());
