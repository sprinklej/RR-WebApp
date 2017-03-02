var express = require('express');
var router = express.Router();

var players = [
  {
    "name": "player 1",
    "level": "1 - Two sets of 3",
    "score": 0
  },
  {
    "name": "player 2",
    "level": "1 - Two sets of 3",
    "score": 0
  }];

/* Main page */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'RR Score Keeper',
    players: players
  });
});

/*
router.post('/add_player', function (req, res) {
    //console.log(req.body.nametxt);
    if (req.body.nametxt == "") {
      res.redirect("/");
    } else {
      players.push({
        "name": req.body.nametxt,
        "level": 0,
        "score": 0});
      res.redirect("/");
    }
});


router.post('/delete_player', function (req, res) {
    //console.log(req.body.playerIndex);
    players.splice(req.body.playerIndex, 1);
    res.redirect("/");
});
*/
module.exports = router;
