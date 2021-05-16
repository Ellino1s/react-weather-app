import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prague" />
        <footer>
          <a
            className="git-link"
            href="https://github.com/Ellino1s/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Elina Sotska
        </footer>
      </div>
    </div>
  );
}

export default App;
