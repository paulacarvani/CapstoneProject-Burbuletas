import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar1 from "../components/Navbar1"
import Announcement from "../components/Announcement"

const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar1/>
        <Wrapper>
            <ImgContainer>
                <Image/>
            </ImgContainer>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Product