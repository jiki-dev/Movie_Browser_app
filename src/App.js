import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieListPage} />
        <Route path="/movies/:id" component={MovieDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;