angular
  .module('GeoQuiz', ['ngResource', 'ui.router'])
  .config(function($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {

  	$stateProvider
  		.state('index', {
  			url: "/",
  			templateUrl: "gameMain.html"
  		});

  	$urlRouterProvider.otherwise('/');
  });