import './App.scss';
import {Slider, Solnavbar} from './components';
import {Categories, Defiprojects, Header, Marketplaces, Protocols} from './containers';

function App() {
  return (
    <div className="App">
      <Solnavbar />
      <Header />
      <Categories />
      <Slider/>
      <Defiprojects/>
      <Marketplaces/>
      <Protocols />
    </div>
  );
}

export default App;
