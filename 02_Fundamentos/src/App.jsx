// src/App.jsx
import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'
import FinalChallenge from './components/FinalChallenge'

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <MyComponent />
      <Events />
      <Challenge />
      <FinalChallenge x={5} y={7} /> 
      <FinalChallenge x={10} y={20} />
      <FinalChallenge x={3} y={9} />   
    </div>
  )
}

export default App