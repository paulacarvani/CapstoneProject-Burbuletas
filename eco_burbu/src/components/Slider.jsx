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
                        <img src="https://picsum.photos/id/0/600" />   
                    </div>
                </div>
                <div className="InfoContainer"></div>
            </div>
        </div>
        <div className="Arrow Arrow_right">
            <KeyboardArrowRight />
        </div>
    </div>

  )
}

export default Slider