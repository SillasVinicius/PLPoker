import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PLPoker</h1>
      <div className="card">
        <p>
          Projeto de <code>Planning Poker</code> para realização de ritos do scrum de votação de story points das histórias da sprint.
        </p>
      </div>
    </div>
  )
}

export default App
