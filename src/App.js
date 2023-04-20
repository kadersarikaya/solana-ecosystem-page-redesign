import './App.scss';
import {Solnavbar} from './components';
import {Categories, Header} from './containers';

function App() {
  return (
    <div className="App">
      <Solnavbar/>
      <Header/>
      <Categories/>
    </div>
  );
}

export default App;
