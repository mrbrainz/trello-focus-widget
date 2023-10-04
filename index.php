<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title>Trello Card</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">

  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  <link rel="manifest" href="site.webmanifest">
  <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">

  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/main.css">
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="https://api.trello.com/1/client.js?key=d2ac09c1f97ae9cd45970f93eebb665e"></script>
</head>

<body>
  <div id="header">
    <a href="javascript:void(0)" onclick="login();" id="login">Login to Trello</a>
    <div id="lists">
      <select id="boards" onchange="populateColumns();">
        <option value="">- Choose Board -</option>
      </select>

      <select id="columns" onchange="showFirstCard();">
        <option value="">- Choose Column -</option>
      </select>
    </div>

    <p><a href="javascript:void(0)" onclick="logout();" id="logout">Logout</a></p>
  </div>



  <div id="card">
    <h4>Currently focusing on...</h4>
    <h1><span id="cardtitle"></span></h1>
    <img id="point1" class="pointing" src="img/pointing.gif" />
    <img id="point2" class="pointing" src="img/pointing.gif" />
  </div>


  <div id="great">
    <div class="sleeve">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
      <circle class="path circle play" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
      <polyline class="path check play" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
      </svg>
      <p class="para success">Oh Yeah!</p>
    </div>
  </div>


  <script src="js/vendor/modernizr-3.11.2.min.js"></script>
  <script src="js/plugins.js"></script>
  <script src="js/main.js"></script>
</body>

</html>
