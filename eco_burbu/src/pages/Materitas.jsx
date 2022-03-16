import Announcement from "../components/Announcement";
import styled from "styled-components";
import Navbar1 from "../components/Navbar1"
import Products from "../components/Products";
import Footer from "../components/Footer";
import {Materas} from "../data"

const Container = styled.div`
`;
const Title = styled.h1`
    margin: 20px;
`;

const Materitas =  () => {
  return (
    <Container>
        <Announcement />
        <Navbar1 />
        <Title>Materitas</Title>
        <Products products={Materas} />
        <Footer />
    </Container>
  )
}

export default Materitas; 