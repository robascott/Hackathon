angular
  .module('GeoQuiz')
  .controller('gameController', GameController)

GameController.$inject = ['$http', '$state','$stateParams']
function GameController($http, $state, $stateParams) {
	var self = this;


	self.choices = [];

	self.allCities = [];


	var queryParams = [
	{"name": "United States", "country_code": "US",    "perpage": "8"},
	{"name": "Canada", "country_code": "CA", "perpage": "3"},
	{"name": "Germany", "country_code": "DE", "perpage": "5"},
	{"name": "France", "country_code": "FR", "perpage": "5"},
	{"name": "United Kingdom", "country_code": "GB", "perpage": "5"},
	{"name": "Australia", "country_code": "AU",    "perpage": "3"},
	{"name": "China", "country_code": "CN",    "perpage": "5"},
	{"name": "Japan", "country_code": "JP",    "perpage": "5"},
	{"name": "Italy", "country_code": "IT",    "perpage": "5"},
	{"name": "Spain", "country_code": "ES",    "perpage": "5"},
	{"name": "Saudi Arabia", "country_code": "SA", "perpage": "2"},
	{"name": "Mexico", "country_code": "MX", "perpage": "3"},
	{"name": "Russia", "country_code": "RU", "perpage": "3"},
	{"name": "South Africa", "country_code": "ZA", "perpage": "3"},
	{"name": "Brazil", "country_code": "BR", "perpage": "3"},
	{"name": "Turkey", "country_code": "TR", "perpage": "2"}
	]


	var getCities = function() {
		console.log('calling getCities()');
		var i = 0;

		function myLoop () {           //  create a loop function
		   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
		      $http
		        .get('http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?country_code=' + queryParams[i].country_code + '&perpage=' + queryParams[i].perpage + '&feature_class=P&api-key=d83845203553d6a2b10eda0563e0e4ec:8:74415254')
		        .then((function(j) { return function(response) {
		        	console.log('got response');
		        	console.log(response);
		        	var cities = response.data.results;
		        	cities.forEach(function(city) {
	        			var cityInfo = {city: city.name, country: city.country_name, population: city.population, lat: city.latitude, lng: city.longitude, timezone: city.gmt_offset};
	        		  self.allCities.push(cityInfo);
		        	});
		        	console.log('callback j: ' + j);
		        	if (j==0) {
		        		getChoicesPop();
		        		console.log('finished loading data');
		        	}
		        	
		        }})(i));

		      i++; 
		      if (i < 1) {            //  if the counter < 10, call the loop function
		         myLoop();             //  ..  again which will trigger another 
		      }                        //  ..  setTimeout()
		   }, 250)
		}

		myLoop();


		// queryParams.each(function(country) {
		// 	$http
		// 	  .get('http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?country_code=' + country.country_code + '&perpage=' + country.perpage + '&feature_class=P&api-key=d83845203553d6a2b10eda0563e0e4ec:8:74415254');
		// 	  .then(function(response) {
		// 	  	var data = response.data.results;
		// 	  	var cityInfo = {city: data.name, country: data.country_name, population: data.population, lat: data.latitude, lng: data.longitude, timezone: data.gmt_offset};
		// 	    self.allCities.pushr(cityInfo);
		// 	  });
		// });

	}

	function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
	}


	function getMax(numbers) {
		var maxValue = 0;
		var highestIndex = 0;
		for (i=0; i<numbers.length; i++) {
			if (numbers[i] > maxValue) {
				highestIndex = i;
			}
			console.log(highestIndex);
		}

		return highestIndex;
	}


	var getChoicesPop = function() {
		var shuffledArray = shuffle(self.allCities);
		console.log(shuffledArray);
		var choices = [shuffledArray[0], shuffledArray[1], shuffledArray[2]];
		var populations = [choices[0].population, choices[1].population, choices[2].population];

		console.log(populations);

		console.log(choices[0].city, choices[1].city, choices[2].city);

		var answer = choices[getMax(populations)].city;

		console.log(answer);
	}


	var getChoicesLat = function() {

	}


	var getChoiesTimezone = function() {

	}



	var generateQuestion = function() {
		var questionTypes = ['lng','lat','pop','timezone'];
		var chosenType = questionTypes[Math.floor(Math.random()*questionTypes.length)];

		switch(chosenType) {
		  case 'pop':
	      // var randomPop = Math.floor(Math.random() * 5000000) + 200000;
	      // var popMax = randomPop * 1.5;
	      // var popMin = randomPop * 0.75;



		    break;
	    case 'lat':
	        
	      break;
	    case 'lng':
	    	//
	    	break;
	    case 'timezone':
	    	//
	    	break;
		}
	}

	getCities();

	console.log('running');

}