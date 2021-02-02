const request = require('request');

const options = {
  method: 'GET',
  url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  qs: {s: 'Avengers Endgame', page: '1', r: 'json'},
  headers: {
    'x-rapidapi-key': '4dc8750479msha45ae72669ae3bfp18bd84jsnfcf64c26bdd9',
    'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});