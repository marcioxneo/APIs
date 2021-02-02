const request = require('request')
const readline = require('readline-sync')
const fs = require('fs')
const contentFilePath = './content/'
const omdbKey = require('./credentials/omdb.json').apiKey

const busca = readline.question('Digite o nome do Filme/Serie:')

const options = {
  method: 'GET',
  url: 'http://www.omdbapi.com/',
  qs: {t: busca ,apikey: omdbKey, r: 'json'}
}

request(options, function(error, response, body) {
  if(error) throw new Error(error)

  const res = JSON.stringify(body)
  fs.writeFileSync(contentFilePath+`/${busca}.json`,body) 

  function load() {
    const fileBuffer = fs.readFileSync(contentFilePath+`/${busca}.json`, 'utf-8')
    const contentJson = JSON.parse(fileBuffer)
    //const objJson = Object.keys(contentJson)
    return contentJson
  }

  console.log(load())
})