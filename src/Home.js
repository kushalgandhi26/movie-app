import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Modal from './components/Modal';
import { useState } from 'react';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const [movieList, setMovieList] = useState({});

  return (
    <div style={{ padding: "20px 75px"}}>
      {isOpen && <Modal movieInfo={movieInfo} setIsOpen={setIsOpen}/>}
      <Navbar setMovieList={setMovieList}/>
      <hr />
      <div>
        <h2>Most Recent Movies</h2>
        <div>
          <Movies setMovieInfo={setMovieInfo} setIsOpen={setIsOpen} movieList={movieList} setMovieList={setMovieList}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
