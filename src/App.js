import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component { 
  constructor() {
    super();

    this.state = {
      name: { firsName: "hanieh", lastName: "Sadeghi", Compani: "ZTM" },
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>hi {this.state.name}</p>
          <button
            onClick={() => {
              this.setState({
                name: { firsName: "navid", lastName: "Sadeghi" },
              });
            }}
          ></button>
        </header>
      </div>
    );
  }
}

export default App;
