import './App.scss';
import {Slider, Solnavbar} from './components';
import {Apps, Categories, Defiprojects, Dexprojects, Events, Footer, Header, Marketplaces, Newsletter, Protocols, Social} from './containers';

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
      <Social/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
