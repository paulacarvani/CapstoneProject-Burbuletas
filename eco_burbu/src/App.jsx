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


const App = () => {
  const register = useSelector(store => store.modal.register);
  const signIn = useSelector(store => store.modal.signIn);
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
          <Materitas />
        </Route>
        <Route path="/Plantas">
          <Plantas />
        </Route>
        <Route path="/Repisas">
          <Repisas />
        </Route>
      </Switch>
      {register && <ModalRegister />}
     {signIn && <ModalSignIn />}
    </Router>
  );
};

export default App;
