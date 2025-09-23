import './App.css';
import Calendar from './components/Calendar';
import Header from './components/Header';
import MovieSlider from './components/MovieSlider';
import Repertoire from './components/Repertoire';

function App() {
  return (
    <div>
      <Header />
      <MovieSlider />
      <Calendar />
      <Repertoire />
    </div>
  );
}

export default App;
