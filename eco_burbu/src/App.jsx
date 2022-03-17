import Product from "./pages/Product";
import Home from "./pages/Home";
import Materitas from "./pages/Materitas";
import Plantas from "./pages/Plantas";
import Repisas from "./pages/Repisas";
import { ModalRegister } from './modals/Register'
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductList from "./pages/ProductList";


const App = () => {
  const render = useSelector(store => store.modal.render);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Product">
          <Product />
        </Route>
        <Route path="/Materitas">
          <ProductList />
        </Route>
        <Route path="/Plantas">
          <ProductList />
        </Route>
        <Route path="/Repisas">
          <ProductList />
        </Route>
      </Switch>
      {render && <ModalRegister />}
    </Router>
  );
};

export default App;
