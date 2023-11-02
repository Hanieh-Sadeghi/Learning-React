import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firsName: "hanieh", lastName: "Sadeghi" },
      company: " CS intership",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firsName} {this.state.name.firsName} , I work at
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firsName: "navid", lastName: "Sadeghi" },
                  };
                },
                () => {}
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
