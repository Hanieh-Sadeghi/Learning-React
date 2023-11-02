import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [
        {
          name: "hanie",
        },
        {
          name: "heili",
        },
        {
          name: "eminem",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
       {
       this.state.monster.map((monster) => {
        return <h1>{monster.name}</h1>
       })
       }
      </div>
    );
  }
}

export default App;
