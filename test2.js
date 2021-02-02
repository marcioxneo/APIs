const request = require('request')
const imdbKey = require('./credencials/imdb.json').apiKey

const options = {
  method: 'GET',
  url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
  qs: {s:'Avengers Endgame', page: '1', r: 'json'},
  headers: {
    'x-rapidapi-key': imdbKey,
    'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
    useQueryString:true
  }
}

request(options, function(error, response, body){
  if(error) throw new Error(error)

  console.log(body)
})