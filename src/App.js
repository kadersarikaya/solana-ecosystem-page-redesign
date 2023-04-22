import './App.scss';
import {Slider, Solnavbar} from './components';
import {Apps, Categories, Defiprojects, Header, Marketplaces, Protocols} from './containers';

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
    </div>
  );
}

export default App;
