'use strict';

var videoElement = document.querySelector('video');
var audioSelect = document.querySelector('select#audioSource');
var videoSelect = document.querySelector('select#videoSource');

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

function gotSources(sourceInfos) {
    for (var i = 0; i !== sourceInfos.length; ++i) {
        var sourceInfo = sourceInfos[i];
        var option = document.createElement('option');
        option.value = sourceInfo.deviceId;
        if (sourceInfo.kind === 'audiooutput') {
            option.text = sourceInfo.label || 'microphone ' +
                (audioSelect.length + 1);
            audioSelect.appendChild(option);
        } else if (sourceInfo.kind === 'videoinput') {
            option.text = sourceInfo.label || 'camera ' + (videoSelect.length + 1);
            videoSelect.appendChild(option);
        } else {
        }
    }
}

if (typeof MediaStreamTrack === 'undefined' ||
    typeof MediaStreamTrack.getSources === 'undefined') {
    alert('This browser does not support MediaStreamTrack.\n\nTry Chrome.');
} else {
    navigator.mediaDevices.enumerateDevices().then(function (e) {
        gotSources(e)
    });
}

function successCallback(stream) {
    window.stream = stream; // make stream available to console
    videoElement.src = window.URL.createObjectURL(stream);
    videoElement.play();
}

function errorCallback(error) {
    console.log('navigator.getUserMedia error: ', error);
}

function start(flag) {
    if (window.stream) {
        videoElement.src = null;
        window.stream.getTracks().forEach(function (track) {
            track.stop();
        })
    }
    var audioSource = audioSelect.value;
    var videoSource = videoSelect.value;

    var constraints = {
        audio: {
            optional: [{
                sourceId: audioSource
            }]
        },
        video: {
            optional: [{
                sourceId: videoSource
            }]
        }
    };
    navigator.getUserMedia(constraints, successCallback, errorCallback);
}

audioSelect.onchange = start;
videoSelect.onchange = start;

start("init");

$(document).ready(function(){
    $("#button").click(function(e) {
        $("#select").addClass("hide");
        initialize();
    });

    $("#video").click(function(e) {
        initialize();
    });

    setTimeout(function() {
        $(".cover").fadeOut(500);
    }, 3000);
});