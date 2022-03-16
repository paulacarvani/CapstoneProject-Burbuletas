import Products from "./components/Products";
import Home from "./pages/Home";
import Materitas from "./pages/Materitas";
import Plantas from "./pages/Plantas";
import Repisas from "./pages/Repisas";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Products">
          <Products />
        </Route>
        <Route path="/Materitas">
          <Materitas />
        </Route>
        <Route path="/Plantas">
          <Plantas />
        </Route>
        <Route path="/Repisas">
          <Repisas />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;