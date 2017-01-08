<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">
    <meta itemprop="name" content="simpl.info: simplest possible examples of HTML, CSS and JavaScript">
    <meta name="mobile-web-app-capable" content="yes">
    <meta id="theme-color" name="theme-color" content="#fff">

    <base target="_blank">

    <title>Polaris</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            font-family: "Roboto", sans-serif;
            font-size: 16px;
        }

        .prod {
            display: none;
        }

        .select {
            position: fixed;
            z-index: 500;
            top: 20%;
            left: 0;
            right: 0;
            text-align: center;
            background: #43339b;
            color: #fff;
            padding: 40px;
        }

        select, button {
            padding: 12px;
            border: none;
            background: #fff;
            color: #222;
        }

        .cover {
            z-index: 1000;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            height: 100%;
            width: 100%;
            background: #43339b;
            text-align: center;
        }

        .cover img {
            width: 100%;
            height: auto;
            max-width: 500px;
            padding-top: 15%;
            display: block;
        }

        .container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            height: 100%;
            width: 100%;
        }

        .cover .loader {
            width: 100px;
            height: 100px;
            padding-top: 1%;
            text-align: center;
            margin: auto;
            margin-top: -30px;
            display: block;
        }

        .hide {
            display: none;
        }

        canvas {
            position: fixed;
            top: 0;
            display: none;
            height: 100%;
            width: 100%;
        }

        #output {
            display: none;
        }

        video {
            display: block;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .drawer {
            position: fixed;
            bottom: 0;
            background: rgba(255, 255, 255, 0.6);
            left: 0;
            right: 0;
            padding: 20px;
        }

        .drawer a {
            text-decoration: none;
        }

        .drawer .heading {
            color: #38373c;
            padding: 10px 0;
        }

        .prices h4 {
            color: rgba(255, 255, 255, 0.55);
            margin-bottom: 10px;
        }

        .price-item.active {
            background: #dd378a;
        }

        .price-item h5 b {
            color: rgba(255, 255, 255, 0.6);
            float: right;
        }

        .price-item {
            background: rgba(0, 0, 0, 0.3);
            padding: 10px;
            margin: 10px 0;
        }

        .price-item h5 a {
            color: #fff;
        }

        .prices {
            background: #4540a2;
            padding: 20px;
            color: #fff;
        }

        .prices h4 {
            color: rgba(255, 255, 255, 0.55);
            margin-bottom: 10px;
        }

    </style>

</head>

<body>

<div id="container">

    <div class="cover">
        <img src="./logo.png" class="logo">
        <img src="./loader.svg" class="loader">
    </div>
    <div class="prod" id="p-title"></div>

    <video id="video" muted autoplay></video>
    <canvas id="canvas"></canvas>
    <ul id="output"></ul>

    <div class="drawer hide">

    </div>

    <div class="select" id="select">
        <select id="videoSource"></select>
        <button id="button">Start</button>
        <select class="hide" id="audioSource"></select>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="./js/render.js"></script>
    <script src="./js/popcorn.js"></script>
    <script src="./js/app.js"></script>
</div>
</body>
</html>