angular
  .module('GeoQuiz')
  .controller('gameController', GameController)

GameController.$inject = ['$http', '$state','$stateParams']
function GameController($http, $state, $stateParams) {
	var self = this;


	self.choices = [];

	self.allCities = [{"city":"Berlin","country":"Germany","population":3426354,"lat":52.516667,"lng":13.4,"timezone":1},{"city":"Frankfurt am Main","country":"Germany","population":650000,"lat":50.116667,"lng":8.683333,"timezone":1},{"city":"Munich","country":"Germany","population":1260391,"lat":48.137433,"lng":11.575491,"timezone":1},{"city":"Usedom","country":"Germany","population":1929,"lat":53.866667,"lng":13.916667,"timezone":1},{"city":"Dresden","country":"Germany","population":486854,"lat":51.050891,"lng":13.738317,"timezone":1},{"city":"Los Angeles","country":"United States","population":3694820,"lat":34.052234,"lng":-118.243685,"timezone":-8},{"city":"New Orleans","country":"United States","population":484674,"lat":29.954648,"lng":-90.075072,"timezone":-6},{"city":"Chicago","country":"United States","population":2841952,"lat":41.850033,"lng":-87.650052,"timezone":-6},{"city":"San Francisco","country":"United States","population":732072,"lat":37.77493,"lng":-122.419415,"timezone":-8},{"city":"Boston","country":"United States","population":589141,"lat":42.358431,"lng":-71.059773,"timezone":-5},{"city":"Detroit","country":"United States","population":951270,"lat":42.331427,"lng":-83.045754,"timezone":-5},{"city":"Las Vegas","country":"United States","population":478434,"lat":36.174971,"lng":-115.137223,"timezone":-8},{"city":"Miami","country":"United States","population":382894,"lat":25.774266,"lng":-80.193659,"timezone":-5},{"city":"Beijing","country":"China","population":7480601,"lat":39.907498,"lng":116.397228,"timezone":8},{"city":"Shanghai","country":"China","population":14608512,"lat":31.222222,"lng":121.458056,"timezone":8},{"city":"Nanjing","country":"China","population":3087010,"lat":32.061667,"lng":118.777778,"timezone":8},{"city":"Changchun","country":"China","population":2537421,"lat":43.88,"lng":125.322778,"timezone":8},{"city":"Shenzhen","country":"China","population":1002592,"lat":22.545538,"lng":114.068298,"timezone":8},{"city":"Toronto","country":"Canada","population":4612191,"lat":43.700114,"lng":-79.416304,"timezone":-5},{"city":"Montreal","country":"Canada","population":3268513,"lat":45.508838,"lng":-73.587809,"timezone":-5},{"city":"Vancouver","country":"Canada","population":1837969,"lat":49.249657,"lng":-123.11934,"timezone":-8},{"city":"Rome","country":"Italy","population":2563241,"lat":41.9,"lng":12.483333,"timezone":1},{"city":"Milan","country":"Italy","population":1306661,"lat":45.464269,"lng":9.189506,"timezone":1},{"city":"Venice","country":"Italy","population":270816,"lat":45.438611,"lng":12.326667,"timezone":1},{"city":"Turin","country":"Italy","population":865263,"lat":45.07049,"lng":7.686825,"timezone":1},{"city":"Florence","country":"Italy","population":371517,"lat":43.766667,"lng":11.25,"timezone":1},{"city":"Paris","country":"France","population":2138551,"lat":48.85341,"lng":2.3488,"timezone":1},{"city":"Aix-en-Provence","country":"France","population":146821,"lat":43.528296,"lng":5.449734,"timezone":1},{"city":"Aix-en-Provence","country":"France","population":146821,"lat":43.528296,"lng":5.449734,"timezone":1},{"city":"Bordeaux","country":"France","population":231844,"lat":44.833333,"lng":-0.566667,"timezone":1},{"city":"Nice","country":"France","population":338620,"lat":43.703126,"lng":7.266083,"timezone":1},{"city":"Madrid","country":"Spain","population":3117977,"lat":40.416502,"lng":-3.702564,"timezone":1},{"city":"Barcelona","country":"Spain","population":1581595,"lat":41.388787,"lng":2.158985,"timezone":1},{"city":"Valencia","country":"Spain","population":805304,"lat":39.469752,"lng":-0.377387,"timezone":1},{"city":"Pamplona","country":"Spain","population":193166,"lat":42.816874,"lng":-1.643229,"timezone":1},{"city":"Seville","country":"Spain","population":701894,"lat":37.377222,"lng":-5.986944,"timezone":1},{"city":"London","country":"United Kingdom","population":7421209,"lat":51.508415,"lng":-0.125533,"timezone":null},{"city":"Belfast County Borough","country":"United Kingdom","population":null,"lat":54.6,"lng":-5.933333,"timezone":null},{"city":"Edinburgh","country":"United Kingdom","population":435791,"lat":55.95,"lng":-3.2,"timezone":null},{"city":"Glasgow","country":"United Kingdom","population":610268,"lat":55.86515,"lng":-4.257631,"timezone":null},{"city":"Dartmouth","country":"United Kingdom","population":5635,"lat":50.35,"lng":-3.583333,"timezone":null},{"city":"Mecca","country":"Saudi Arabia","population":1323624,"lat":21.426667,"lng":39.826111,"timezone":3},{"city":"Medina","country":"Saudi Arabia","population":1300000,"lat":24.468611,"lng":39.614167,"timezone":3},{"city":"Melbourne","country":"Australia","population":3730206,"lat":-37.813997,"lng":144.963323,"timezone":11},{"city":"Sydney","country":"Australia","population":4394576,"lat":-33.86785,"lng":151.207323,"timezone":11},{"city":"Adelaide","country":"Australia","population":1074159,"lat":-34.933333,"lng":138.6,"timezone":10.5},{"city":"Mexico City","country":"Mexico","population":11285654,"lat":19.434167,"lng":-99.138611,"timezone":-6},{"city":"Tijuana","country":"Mexico","population":1376457,"lat":32.533333,"lng":-117.016667,"timezone":-8},{"city":"Cancún","country":"Mexico","population":542043,"lat":21.174288,"lng":-86.846559,"timezone":-6},{"city":"Tokyo","country":"Japan","population":8336599,"lat":35.689527,"lng":139.691677,"timezone":9},{"city":"Kyoto","country":"Japan","population":1459640,"lat":35.02107,"lng":135.753851,"timezone":9},{"city":"Hiroshima","country":"Japan","population":1143841,"lat":34.4,"lng":132.45,"timezone":9},{"city":"Osaka","country":"Japan","population":2592413,"lat":34.69374,"lng":135.502182,"timezone":9},{"city":"Fukuoka","country":"Japan","population":1392289,"lat":33.583333,"lng":130.4,"timezone":9},{"city":"Moscow","country":"Russia","population":10381222,"lat":55.752222,"lng":37.615556,"timezone":3},{"city":"Saint-Petersburg","country":"Russia","population":4039745,"lat":59.894444,"lng":30.264167,"timezone":3},{"city":"Pikalëvo","country":"Russia","population":22072,"lat":59.518333,"lng":34.166389,"timezone":3},{"city":"Rio de Janeiro","country":"Brazil","population":6023699,"lat":-22.902778,"lng":-43.2075,"timezone":-2},{"city":"São Paulo","country":"Brazil","population":10021295,"lat":-23.5475,"lng":-46.636111,"timezone":-2},{"city":"Salvador","country":"Brazil","population":2711840,"lat":-12.971111,"lng":-38.510833,"timezone":-3},{"city":"Johannesburg","country":"South Africa","population":2026469,"lat":-26.2,"lng":28.083333,"timezone":2},{"city":"Cape Town","country":"South Africa","population":3433441,"lat":-33.916667,"lng":18.416667,"timezone":2},{"city":"Durban","country":"South Africa","population":3120282,"lat":-29.85,"lng":31.016667,"timezone":2},{"city":"Istanbul","country":"Turkey","population":11174257,"lat":41.013843,"lng":28.949661,"timezone":2},{"city":"Ankara","country":"Turkey","population":3517182,"lat":39.927222,"lng":32.864444,"timezone":2}]

	self.correctAnswer;

	self.correctCounter = 0;
	self.incorrectCounter = 0;;


	self.playerCorrect = false;
	self.playerIncorrect = false;

	self.question;

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
		        	if (j==queryParams.length-1) {
		        		generateQuestion();
		        	}
		        	
		        }})(i));

		      i++; 
		      if (i < queryParams.length) {            //  if the counter < 10, call the loop function
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

	self.checkAnswer = function(ans) {
		var answerCity = ans.city;
		if (answerCity == self.correctAnswer.city) {
			self.correctCounter++;
			self.playerCorrect = true;
		} else {
			self.incorrectCounter++;
			self.playerIncorrect = true;
		}
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
				maxValue = numbers[i];
			}
		}
		return highestIndex;
	}

	function getMin(numbers) {
		var minValue = numbers[0];
		var lowestIndex = 0;
		for (i=1; i<numbers.length; i++) {
			if (numbers[i] < minValue) {
				lowestIndex = i;
				minValue = numbers[i];
			}
		}
		return lowestIndex;
	}


	var getChoicesPop = function(question,type) {
		var shuffledArray = shuffle(self.allCities);
		var cities = [shuffledArray[0], shuffledArray[1], shuffledArray[2]];
		var populations = [cities[0].population, cities[1].population, cities[2].population];
		self.choices = [{city: shuffledArray[0].city, value: shuffledArray[0].population}, {city: shuffledArray[1].city, value: shuffledArray[1].population}, {city: shuffledArray[2].city, value: shuffledArray[2].population}];

		if (type=='max') {
			self.correctAnswer = self.choices[getMax(populations)];
			self.question = question;
		} else {
			self.correctAnswer = self.choices[getMin(populations)];
			self.question = question;
		}
	}


	var getChoicesLat = function(question,type) {
		var shuffledArray = shuffle(self.allCities);
		var cities = [shuffledArray[0], shuffledArray[1], shuffledArray[2]];
		var latitudes = [cities[0].lat, cities[1].lat, cities[2].lat];
		self.choices = [{city: shuffledArray[0].city, value: shuffledArray[0].lat}, {city: shuffledArray[1].city, value: shuffledArray[1].lat}, {city: shuffledArray[2].city, value: shuffledArray[2].lat}];

		if (type=='max') {
			self.correctAnswer = self.choices[getMax(latitudes)];
			self.question = question;
		} else {
			self.correctAnswer = self.choices[getMin(latitudes)];
			self.question = question;
		}
	}


	var getChoicesTimezone = function(question,type) {
		var shuffledArray = shuffle(self.allCities);
		var cities = [shuffledArray[0], shuffledArray[1], shuffledArray[2]];
		var timezones = [cities[0].timezone, cities[1].timezone, cities[2].timezone];
		self.choices = [{city: shuffledArray[0].city, value: shuffledArray[0].timezone}, {city: shuffledArray[1].city, value: shuffledArray[1].timezone}, {city: shuffledArray[2].city, value: shuffledArray[2].timezone}];

		if (type=='max') {
			self.correctAnswer = self.choices[getMax(timezones)];
			self.question = question;
		} else {
			self.correctAnswer = self.choices[getMin(timezones)];
			self.question = question;
		}
	}



	self.generateQuestion = function() {

		self.playerIncorrect = false;
		self.playerCorrect = false;
		var questionTypes = ['lat','pop','timezone'];
		var chosenType = questionTypes[Math.floor(Math.random()*questionTypes.length)];

		switch(chosenType) {
		  case 'pop':
	      // var randomPop = Math.floor(Math.random() * 5000000) + 200000;
	      // var popMax = randomPop * 1.5;
	      // var popMin = randomPop * 0.75;



	      var subTypes = ['max','min'];
	      var subType = subTypes[Math.floor(Math.random()*subTypes.length)];

	      if (subType == 'max') {
	      	var question = 'Which city has a largest population?'
	      } else {
	      	var question = 'Which city has a smallest population?'
	      }

	      getChoicesPop(question, subType);

		    break;
	    case 'lat':
	    	var subTypes = ['max','min'];
	    	var subType = subTypes[Math.floor(Math.random()*subTypes.length)];

	    	if (subType == 'max') {
	    		var question = 'Which city is furthest north?'
	    	} else {
	    		var question = 'Which city is furthest south?'
	    	}




	    	getChoicesLat(question, subType);
	      break;
	    // case 'lng':
	    // 	getChoicesLng();
	    // 	break;
	    case 'timezone':
	    	var subTypes = ['max','min'];
	    	var subType = subTypes[Math.floor(Math.random()*subTypes.length)];

	    	if (subType == 'max') {
	    		var question = "In which city does the sun rise first?"
	    	} else {
	    		var question = "In which city does the sun set last?"
	    	}

	    	getChoicesTimezone(question, subType);
	    	break;
		}
	}

	var resetGame = function() {
		self.correctCounter = 0;
		self.incorrectCounter = 0;
		self.playerCorrect = false;
		self.playerIncorrect = false;
	}

	self.generateQuestion();

	console.log('running');

}