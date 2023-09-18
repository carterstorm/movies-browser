import { HashRouter } from "react-router-dom";
import { Navigation } from "../features/Navigation";

export const App = () => (
  <HashRouter>
    <Navigation />
  </HashRouter>
);