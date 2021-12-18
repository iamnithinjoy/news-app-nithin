import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Publisher from "./Components/Publisher";
import Home from "./Components/Home";

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/publisher" component={Publisher} />
        </Switch>
        </main>
      </BrowserRouter>
    </div>
  );}
}
export default App;
