import React, { Component, Fragment } from "react";
import Movies from "./components/Movies";

class App extends Component {
  render() {
    return (
      <Fragment>
        <main className="container">
          <Movies />
        </main>
      </Fragment>
    );
  }
}

export default App;
