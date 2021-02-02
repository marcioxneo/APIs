const request = require('request')
const fs = require('fs')
const contentFilePath = './content/list.json'
const omdbKey = require('./credencials/omdb.json').apiKey

const options = {
  method: 'GET',
  url: 'http://www.omdbapi.com/',
  qs: {t:'Avengers Endgame',apikey: omdbKey, r: 'json'}
}

request(options, function(error, response, body) {
  if(error) throw new Error(error)

  //const res = JSON.stringify(body)
  //fs.writeFileSync(contentFilePath,body) 

  function load() {
    const fileBuffer = fs.readFileSync(contentFilePath, 'utf-8')
    const contentJson = JSON.parse(fileBuffer)
    //const objJson = Object.keys(contentJson)
    return contentJson
  }

  console.log(load())
})