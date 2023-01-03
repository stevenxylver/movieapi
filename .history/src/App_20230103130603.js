import './App.css';


const App = () => {
const search = (q) => {
console.log({ q })
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>MOVIE DATA</h1>
      <input placeholder="cari film kesayangan..." 
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
