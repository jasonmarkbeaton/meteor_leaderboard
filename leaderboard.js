PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
        return PlayersList.find()
    }
  });

  Template.leaderboard.events({
    'click .player': function(){
      var playerId = this._id;
      Session.set('selectedPlayer', player._id);
      Session.get('selectedPlayer');
    }
  });
}

if(Meteor.isServer){
    // this code only runs on the server
}