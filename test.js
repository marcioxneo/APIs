const unirest = require("unirest")
const imdbKey = require("../APIs/credencials/imdb.json").apiKey
var req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/")

req.query({
  "s":"Avengers Endgame",
  "page":"1",
  "r":"json"
})

req.headers({
  "x-rapiapi-key": "4dc8750479msha45ae72669ae3bfp18bd84jsnfcf64c26bdd9",
  "x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com",
  "useQueryString":true 
})

req.end(function(res){
  if (res.error) throw new Error(res.error)

  console.log(res.body)
})






