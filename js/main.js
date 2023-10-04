var timer = null;

var audio = new Audio('img/congrats.mp3');

var populateColumns = function() {
  var boardlist = document.getElementById('boards');

  if (!boardlist.value) {return false;}

  var thecolumns = Trello.boards.get(boardlist.value+"/lists", null, function(){

    var columns = thecolumns.responseJSON
    // console.log(columns);

    var columnlist = '<option value="">- Choose Column -</option>';

    for (var i=0;i<columns.length;i++) {
    //  console.log (columns[i]);
      columnlist += '<option value="'+columns[i].id+'">'+columns[i].name+'</option>';
    }

    var columnselect = document.getElementById("columns");
    columnselect.innerHTML = columnlist;

  }, function() {
    console.log("Failed to get lists");
  });

}

var hideCard = function() {
  //console.log("hide card");
  document.getElementById("card").style.display = "none";
  document.getElementById("header").style.display = "block";
}

var showCard = function() {
  //console.log("show card");
  document.getElementById("card").style.display = "block";
  document.getElementById("header").style.display = "none";
  timer = setTimeout(showFirstCard, 30000);
}

var showFirstCard = function() {
  var columnlist = document.getElementById('columns');

  if (!columnlist.value) {hideCard(); return false;}

  var thecards = Trello.lists.get(columnlist.value+"/cards", null, function(){

    var cards = thecards.responseJSON
    //console.log(cards);

    var thetitle = document.getElementById("cardtitle");


    if (!cards.length && thetitle.innerText.toLowerCase().length || cards.length > 0 && thetitle.innerText.toLowerCase() !== cards[0].name.toLowerCase()) {
      //console.log("go");
      if (thetitle.innerText) {
        doneTask();
      }
      if (cards.length) {
        thetitle.innerText = cards[0].name;
      } else {
        thetitle.innerText = "";
      }

    } else {
      //console.log("your mum");
    }

    showCard();

  }, function() {
    console.log("Failed to get cards");
  });

}


var populateBoards = function() {
  document.getElementById('logout').style.display = "inline";
  document.getElementById('lists').style.display = "block";
    document.getElementById('login').style.display = "none";
  var theboards = Trello.get("/members/me/boards",{ filter: "open"}, function(){
    var boards = theboards.responseJSON;
    //console.log(boards);

    var boardlist = '<option value="">- Choose Board -</option>';

    for (var i=0;i<boards.length;i++) {
      //console.log (boards[i]);
      boardlist += '<option value="'+boards[i].id+'">'+boards[i].name+'</option>';
    }

    var boardselect = document.getElementById("boards");
    boardselect.innerHTML = boardlist;

  }, function(){console.log("Failed to get boards")});



};


var authenticationFailure = function() {
  console.log('Failed authentication');
};



var login = function() {
  window.Trello.authorize({
    type: 'popup',
    name: 'Fucking Focus!',
    scope: {
      read: 'true',
      write: 'false' },
    expiration: 'never',
    success: populateBoards,
    error: authenticationFailure
  });
}

var logout = function() {
    Trello.deauthorize();
    window.location.reload();
}
var areweactive = Trello.authorized();

if (areweactive) {
  document.getElementById('login').style.display = "none";
  populateBoards();
} else {
  document.getElementById('logout').style.display = "none";
  document.getElementById('lists').style.display = "none";
}


var doneTask = function() {
      document.getElementById("great").classList.add("play");
      audio.play();
      setTimeout(function(){
        document.getElementById("great").classList.remove("play");
      },5000);
}
