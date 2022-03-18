import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react";
import styled from "styled-components"
import { sliderItems } from "../data"
import { mobile } from "../responsive";

const Container = styled.div `
    width: 100%;
    height: 70vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div `
    height: 50%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    align-items: center;
    background-color: #f8d7bb;
    `;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    max-width: 70vmin;
`;

const Image = styled.img`
    image-rendering: pixelated;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const InfoContainer =styled.div`
    flex: 1;
    padding: 50px;
    padding-inline: 10vw;

`;

const Title = styled.h1`
    font-size: 60px;
   /*  font-family: 'Montserrat', sans-serif; */
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    color: #59351F;
    margin-bottom: 20px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    font-family: 'Open Sans', sans-serif;
    color: #59351F;
    margin-top: 20px;

`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
