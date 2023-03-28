import './App.css';
import configData from "./config.json"
import Title from './components/Title';
function App() {
  return (
    <div className="App">
          <Title config ={configData}/>
    </div>
  );
}

export default App;
