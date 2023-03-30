import './App.css';
import configData from "./config.json"
import Title from './components/Title';

import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import Details from './components/Details';

function App() {
  const { width, height } = useWindowSize();
  return (
    <div className="App">
           <Confetti
            width={width}
            height={height}
            colors={['#091E27', '#F8BBD0', '#9A673F']}
            recycle={false}
            />
          <Title config ={configData}/>
          <Details config = {configData}></Details>
    </div>
  );
}

export default App;
