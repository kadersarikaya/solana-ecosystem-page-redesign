import './App.scss';
import {Slider, Solnavbar} from './components';
import {Categories, Header} from './containers';

function App() {
  return (
    <div className="App">
      <Solnavbar />
      <Header />
      <Categories />
      <Slider/>
    </div>
  );
}

export default App;
