import './App.css'
import { Text } from './Components/Text/Text'
import Navbar from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { Footer } from './Components/Footer/Footer'
import { Design } from './Components/Design/Design'
import { Furniture } from './Components/Furniture/Furniture'
import { Modern } from './Components/Modern/Modern'

function App() {

  return (
    <div id='app-container'>
      <div id='scrollable'>
        <Navbar />
        <Hero />
        <Design />
        <Furniture />
        <Modern />

      </div>
      <Footer />
    </div>
  )
}

export default App



