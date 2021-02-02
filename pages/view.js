import Link from 'next/link';
const avengers = require('../content/Avengers Endgame.json')
const poster = require('../content/Avengers Endgame.json').Poster


function View(){
  return <div>
    <h1>View</h1>
    <div>
      <Link href="/">
      <a>
        Home
      </a>
    </Link>
    <div>
      <h1>{avengers.Title}</h1>

      <img src={poster} alt='Avengers'></img>
      <p>{avengers.Plot}</p>
    </div>
    </div>
  </div>
}

export default View