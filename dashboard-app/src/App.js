import './App.css';

import { Data } from './components/Data';
import { LineChart } from './components/LineChart';

function App() {
  return (
    <div className="App">
      <div style={styles}>
        <div className='col-2'>
          <Data/>
        </div>
        <div className='col-10'>
          <LineChart/>
        </div>
      </div>
    </div>
  );
}

const styles = {
  display: 'flex',
  justifyContent: 'space-between'
};

export default App;
