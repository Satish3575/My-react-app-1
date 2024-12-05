import './App.css';
import Props1 from './Propsconcept/Props1';
import Props2 from './Propsconcept/Props2';
import Props3 from './Propsconcept/Props3';

const object = {
  name : "Mahesh",
  age : "22",
  city : "Rjy"
}

function App() {
  return (
    <div className = "contaier">
    <Props1 name = {object.name}/>
    <Props2 name = {object.age}/>
    <Props3 name = "Pavan"/>
    </div>
  )
}

export default App;
