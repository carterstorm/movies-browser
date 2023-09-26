import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "../common//Navigation";
import { MoviesPage } from "../features/movies/MoviesPage";
import { PeoplePage } from "../features/people/PeoplePage";
import { MoviePage } from "../features/movies/MoviePage";

export const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/movies/movie/:id">
        <MoviePage />
      </Route>
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