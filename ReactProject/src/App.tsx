import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { Design } from './Components/Design/Design';
import { Furniture } from './Components/Furniture/Furniture';
import { Modern } from './Components/Modern/Modern';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Hero />
        <Design />
        <Furniture />
        <Modern />
      </main>

      <Footer />
    </div>
  );
}

export default App;
