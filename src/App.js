import './App.scss';
import {Slider, Solnavbar} from './components';
import {Apps, Categories, Defiprojects, Dexprojects, Events, Header, Marketplaces, Protocols} from './containers';

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
      <Apps />
      <Dexprojects/>
      <Events/>
    </div>
  );
}

export default App;
