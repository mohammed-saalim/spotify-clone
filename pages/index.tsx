import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">    {/*IMP!! h-screen (full screen overflow-hidden bcoz we dont want scroll bar instead we will make sidebar scrollable separately, main screen separately , and player in bottom fixed) */}
      <main>
      <Sidebar/>  
      {/* <Center/> */}
      </main>

      <div>
      {/* <Player></Player> */}
      </div>
    </div>
  )
}

export default Home
