import Info from './Components/Info'
import About from './Components/About'
import Interests from './Components/Interests'
import Footer from './Components/Footer'
import './App.css'

function App() {
 

  return (
    <div className="app">
      <main className='main' >  
        <Info />
        <About />
        <Interests />
        <Footer />
      </main>
    </div>
  )
}

export default App
