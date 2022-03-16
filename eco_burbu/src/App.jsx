import { Fragment } from "react";
import Products from "./components/Products";
import Home from "./pages/Home";
import Materitas from "./pages/Materitas";
import Plantas from "./pages/Plantas";
import Repisas from "./pages/Repisas";
import { ModalRegister } from './modals/Register'
import { useSelector } from "react-redux";



const App = () => {
  const render = useSelector(store => store.modal.render);


  return(
  <Fragment>
    <Home />,
      {render && <ModalRegister />}
  </Fragment>
  )
};

export default App;
