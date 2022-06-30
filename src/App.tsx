import logo from './assets/geta.svg'
import './App.css'
import BeerWorld from './components/BeerWorld'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>a <span className="App-beer-icon">🍺</span> or maybe 🍻. <br/><br/> Welcome to <i>Beer World</i>!</h2>

          <div className="App-anchor-link App-anchor-link-rainbow">
            <a href="#anchor-beer-world">Enter here</a>
          </div>
        </div>
      </header>

      <div className="App-body">
        <BeerWorld />
      </div>
    </div>
  )
}

export default App
