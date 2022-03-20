import Product from "./pages/Product";
import Home from "./pages/Home";
import { ModalRegister } from './modals/Register';
import { ModalSignIn } from './modals/SignIn';
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductList from "./pages/ProductList";



const App = () => {
  const register = useSelector(store => store.modal.register);
  const signIn = useSelector(store => store.modal.signIn);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
      </Switch>
      {register && <ModalRegister />}
      {signIn && <ModalSignIn />}
    </Router>
  );
};

export default App;
