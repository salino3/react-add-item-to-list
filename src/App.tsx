
import { Fragment } from 'react';
import './App.css';
import Counter from './components/Counter';
import MakingList from './components/MakingList';

function App() {
  return (
    <Fragment>
      <div className='App'>
        <h1>Hola</h1>
        <hr />
        <MakingList />
        <br />
        <hr />
        <div className="App-header">
          <Counter />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
