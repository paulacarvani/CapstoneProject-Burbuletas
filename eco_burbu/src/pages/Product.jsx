import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar1 from "../components/Navbar1"
import Announcement from "../components/Announcement"

const Container =styled.div`
`;

const Wrapper =styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer =styled.div`
  flex: 1;
`;

const Image =styled.img`
  width: 100%;
  object-fit: cover;
`;

const InfoContainer =styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title =styled.h1`
  font-style: italic;
`;

const Desc =styled.p`
  margin: 20px 0px;
  font-weight: 100;
  font-size: 30px;
`;

const Note =styled.p`
  font-weight: 100;
  font-size: 20px;
  font-style: italic;
`;




const Product = () => {
  return (
    <Container>
      <Navbar1 />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.postimg.cc/fT0VQwQs/Materitas.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>
            Mandalas
          </Title>
          <Desc>
          Nuestras materas dan un toque especial, promete traernos la magia en una pieza única capaz de trasmitirnos calidez, dónde cada detalle es pintado a mano, esmaltado por dentro para evitar filtraciones y sellado por fuera para un mayor tiempo de vida.
          </Desc>
          <Note>
            "$25.000"
          </Note>
        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
  )
}
export default Product