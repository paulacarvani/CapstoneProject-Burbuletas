import Product from "./pages/Product";
import Home from "./pages/Home";
import Materitas from "./pages/Materitas";
import Plantas from "./pages/Plantas";
import Repisas from "./pages/Repisas";
import { ModalRegister } from './modals/Register';
import { ModalSignIn } from './modals/SignIn';
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Favorites from "./pages/Favorites";



const App = () => {
  const register = useSelector(store => store.modal.register);
  const signIn = useSelector(store => store.modal.signIn);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Favorites">
          <Favorites />
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
      {register && <ModalRegister />}
      {signIn && <ModalSignIn />}
    </Router>
  );
};

export default App;
