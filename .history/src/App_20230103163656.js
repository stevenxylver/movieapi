import './App.css';
import { getMovieList, searchMovie } from './api';
import { useEffect, useState } from 'react';



const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
   }, [])

const popularMovies = () => {
  return popularMovies.map((movie, i) => {
    return (
      <div key={i}>
        <div>{movie.title}</div>
        <div>{movie.poster_path}</div>
        <div>{movie.release_date}</div>
        <div>{movie.vote_average}</div>
        <div className="Movie-wrapper">
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image" src={{movie.poster_path}} />
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">8.9</div>
      </div>
    )
  }
const search = (q) => {
  console.log({ q })
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>MOVIE DATA</h1>
      <input 
      placeholder="cari film kesayangan..." 
      className="Movie-search"
      onChange={({ target }) => search(target.value)}
      />
      <div className="Movie-container">
        <div className="Movie-wrapper">
          <div className="Movie-title">Contoh</div>
          <img className="Movie-image" src="" />
          <div className="Movie-date"> 11-12-2022</div>
          <div className="Movie-rate">8.9</div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
