import Link from 'next/link';
//import Control from '../control.js'

function Home(){
  return <div>
    {/* ${title = control.title} */}
    <h1>Escolha um Filme</h1>
    <div>
      <Link href="/view" >
        <a>
          {/* ${title} */}
          teste
        </a>
      </Link>
    </div>
  </div>
}



export default Home