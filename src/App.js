import React, { Component } from "react";
import Table from "./Table";
import Table2 from "./Table-Simple";

class App extends Component {
  render() {
    const characters = [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspiring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ];

    return (
      <div className="container">
        <Table caracterData={characters} />
      </div>
    );
  }
}

export default App;
