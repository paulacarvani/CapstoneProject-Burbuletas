import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar1 from "../components/Navbar1"
import Announcement from "../components/Announcement"
import { mobile } from "../responsive"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { publicRequest } from "../requestMethods"

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
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch { }
    };
    getProduct();
  }, [id]);

  const HandleClick =()=>{
    //Update favorites
  }


  return (
    <Container>
      <Navbar1 />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.image}/>
        </ImgContainer>
        <InfoContainer>
          <Title>
            {product.name}
          </Title>
          <Desc>
            {product.description}
          </Desc>
          <Price>
            {product.price}
          </Price>
          <AddContainer>
            <Button onClick={HandleClick}>
              Añadir a Favoritos
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}
export default Product