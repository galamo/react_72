import logo from './logo.svg';
import cool from "./cool.svg"
import axios from "axios"
import './App.css';

function Application() {
  const name = "Gal Amouyal"
  console.log(name)

  return (
    <div className="App">
      <header className="App-header">
        <img src={cool} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Gal!!
        </a>
      </header>
    </div>
  );
}

// function getAppItem() {
//   const appComponent = document.createElement("div")
//   appComponent.id = "app"
//   // Many elements
//   const manyElem = {}
//   appComponent.append(manyElem)
//   return appComponent;
// }

export default Application;
