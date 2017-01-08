"use strict";

var video, $output;
var scale = 0.65;

var initialize = function () {
    $output = $("#output");
    video = $("#video").get(0);
    captureImage();
};

var captureImage = function () {
    var canvas = document.createElement("canvas");
    canvas.width = video.videoWidth * scale;
    canvas.height = video.videoHeight * scale;
    canvas.getContext('2d')
        .drawImage(video, 0, 0, canvas.width, canvas.height);

    var img = document.createElement("img");
    img.src = canvas.toDataURL();
    img.setAttribute("id", "result");
    $output.prepend(img);

    sendImage(img.src);
};

var sendImage = function (data) {
    // Assign handlers immediately after making the request,
    // and remember the jqxhr object for this request
    var base = window.location.href.charAt(window.location.href.length - 1) === "/" ? window.location.href : window.location.href + "/";
    var url = base + "api";
    var jqxhr = $.post(url, {"image": data, "url": window.location.href}, function (data) {
        render(data);
    })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("finished");
        });
}