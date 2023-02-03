import './App.css';

import { Data } from './components/Data';
//import { LineChart } from './components/LineChart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div style={styles}>
        <div className='col-2'>
          <Data />
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
