angular
  .module('GeoQuiz')
  .controller('gameController', GameController)

GameController.$inject = ['$state','$stateParams']
function GameController($state, $stateParams) {
	var self = this;
}