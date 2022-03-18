import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar1 from "../components/Navbar1"
import Announcement from "../components/Announcement"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  ${mobile({ width: "100%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-style: italic;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 100;
  font-size: 18px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  padding-top: 50px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #aed79c;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
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
          <Price>
            $25.000
          </Price>
          <AddContainer>
            <Button>
              <Link to={`/Favorites`} onClick={() => {
                window.scrollTo(0, 0)
              }}>
                Añadir a Favoritos
              </Link>
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}
export default Product