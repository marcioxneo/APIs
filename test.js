const unirest = require("unirest")
const imdbKey = require("../APIs/credencials/imdb.json").apiKey
var req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/")

req.query({
  "s":"Avengers Endgame",
  "page":"1",
  "r":"json"
})

req.headers({
  "x-rapiapi-key": imdbKey,
  "x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com",
  "useQueryString":true 
})

req.end(function(res){
  if (res.error) throw new Error(res.error)

  console.log(res.body)
})






