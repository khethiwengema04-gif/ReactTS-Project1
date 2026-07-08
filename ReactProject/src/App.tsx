import './App.css'
import { Text } from './Components/Text/Text'
import Navbar from './Components/Text/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { Footer } from './Components/footer/Footer'


function App() {

  return (
    <div id='app-container'>
      <div id='scrollable'>
        <Navbar />
        <Hero />

      </div>
      <Footer />
    </div>
  )
}

export default App



