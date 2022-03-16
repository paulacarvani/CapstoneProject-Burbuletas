import Announcement from "../components/Announcement";
import styled from "styled-components";
import Navbar1 from "../components/Navbar1"
import Products from "../components/Products";
import Footer from "../components/Footer";
import {Materas} from "../data"
//import { Products } from "../data"

const Container = styled.div`
`;
const Title = styled.h1`
    margin: 20px;
`;

const Repisas =  () => {
  return (
    <Container>
        <Announcement />
        <Navbar1 />
        <Title>Repisas</Title>
        <Products products={Materas} />
        <Footer />
    </Container>
  )
}

export default Repisas; 