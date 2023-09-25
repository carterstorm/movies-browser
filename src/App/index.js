import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "../common//Navigation";
import { MoviesPage } from "../features/movies/MoviesPage";
import { PeoplePage } from "../features/people/PeoplePage";

export const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/movies">
        <MoviesPage />
      </Route>
      <Route path="/people">
        <PeoplePage />
      </Route>
      <Route path="/">
        <Redirect to="/movies" />
      </Route>
    </Switch>
  </HashRouter>
);