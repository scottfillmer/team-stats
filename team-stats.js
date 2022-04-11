const team = {
  _players: [
    {firstName: 'Mookie', lastName: 'Betts', age: 30},
    {firstName: 'Freedie', lastName: 'Freeman', age: 35},
    {firstName: 'Trea', lastName: 'Turner', age: 28}
  ],
  _games: [
    {opponent: 'Rockies', teamPoints: 5, opponentPoints: 3},
    {opponent: 'Twins', teamPoints: 2, opponentPoints: 3},
    {opponent: 'Reds', teamPoints: 4, opponentPoints: 9}
  ],

get players(){
  return this._players;
},
get games(){
  return this._games;
},

addPlayer(newFirstName, newLastName, newAge){
 let player = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
  };
  this.players.push(player);
 },

addGame(newOpponent, newTeamPoints, newOpponentPoints){
  let game = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
  };
  this.games.push(game)
}

};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Padres', 10, 9);
console.log(team.players);
console.log(team.games);
