var render = function(data) {
    var info = data.info;
    var recommendations = data.recommendations;

    var html = "<h4><a href='" + info.default.url + "'>" + info.title + "</a></h4>";
    html += "<h5>" + info.default.price + "</h5>";
    html += "<div class='prices'><h4 class='heading'>Prices</h4>";

    info.allPrices.forEach(function(el) {
        html += "<div class='price-item'>";
        html += "<h5><a href='" + el.url + "'>" + el.vendor + "</a><b>" + el.price + "</b></h5>";
        html += "</div>";
    });

    html += "</div>";

    html += "<div class='recomms'>";
    console.log(recommendations.length);
    if (recommendations.length != undefined) {
        recommendations.forEach(function (el) {
            var html = '<div>';
            html += "<h4><a href='" + el.default.url + "'>" + el.title + "</a></h4>";
            html += "<h5>" + el.default.price + "</h5>";
            html += "<div class='prices'><h4>Prices</h4>";

            el.allPrices.forEach(function (elem) {
                html += "<div class='price-item'>";
                html += "<h4><a href='" + elem.url + "'>" + elem.vendor + "</a><b>" + elem.price + "</b></h4>";
                html += "</div>";
            });

            html += "</div>";
        });
    }

    console.log(html);
    jQuery(".drawer").html(html);
    jQuery(".drawer").removeClass("hide");
    jQuery(".price-item:first-child").addClass("active");
    console.log(data);
};
