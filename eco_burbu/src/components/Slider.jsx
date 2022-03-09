import '../Slider.css';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material/';

const Slider = () => {
  return (
    <div className="Container_Slider">
        <div className="Arrow Arrow_left" >
            <KeyboardArrowLeft />
        </div>
        <div className="Wrapper_Slider">
            <div className="Slider">
                <div className="ImgContainer" >
                    <div className="Image">
                        <img src="https://i.postimg.cc/RZNNZYNb/pexels-jessica-cortez-899567.jpg" />   
                    </div>
                </div>
                <div className="InfoContainer">
                    <h1 className="Title" >Temporada de suculentas</h1>
                    <p className="Description">Solo por esta semana 20% de descuento, en todas las suculentas!!! </p>
                    <button className="Butoon">Ver más</button>
                </div>
            </div>
        </div>
        <div className="Arrow Arrow_right">
            <KeyboardArrowRight />
        </div>
    </div>

  )
}

export default Slider