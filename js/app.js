angular
  .module('GeoQuiz', ['ngResource', 'ui.router'])
  .constant('APIkey', 'd83845203553d6a2b10eda0563e0e4ec:8:74415254')
  .config(function($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {

  	$stateProvider
  		.state('index', {
  			url: "/",
  			templateUrl: "gameMain.html"
  		});

  	$urlRouterProvider.otherwise('/');
  });