import './App.css';
import Banner from './components/Banner/Banner';
import FilterContainer from './components/Filter/FilterContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <FilterContainer />
    </div>
  );
}

export default App;
