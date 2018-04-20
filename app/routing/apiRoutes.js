var friends = require('../data/friends.js');
var path = require("path");

module.exports = function(app){

  app.get('/api/friends', function(req,res){
    res.json(friends);
  });

  app.post('/api/friends', function(req,res){
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    for(var i=0; i<friends.length; i++){
      var scoreDifference = 0;

      //compare friends by for looping friends array
      for(var j=0; j<newFriendScores.length; j++){
        scoreDifference += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoreDifference);
    }

//go through all the friends and find the best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = [i];
      }
    }
    
    //return bestMatch data
    var bestFriend = friendList[bestMatch];
    res.json(bestFriend);

    //push to friends array
    friendList.push(req.body);
  });
};