import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My E-Commerce App</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
