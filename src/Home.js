import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import MovieCard from './components/MovieCard';

function Home() {
  return (
    <div style={{ padding: "20px 75px" }}>
      <Navbar />
      <hr />
      <div>
        <h2>Most Recent Movies</h2>
        <div>
          <Movies />
        </div>
      </div>
    </div>
  );
}

export default Home;
