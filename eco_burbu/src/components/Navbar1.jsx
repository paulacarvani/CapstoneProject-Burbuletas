import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material/';
import { mobile } from "../responsive";


const Container = styled.div`
    ${mobile({ height: "50px", width: "350px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({ display: "none" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.div`
    flex: 1;
`;

const Imag = styled.img`
    flex: 2;
    max-width: 70%;
    image-rendering: pixelated;
    ${mobile({ maxWidth: "110%" })}

`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    ${mobile({ width: "20%" })}
`;

const MenuItem = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-left: 25px;
    cursor: pointer;
    justify-content: flex-end;
    ${mobile({ fontSize: "12px" })}
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    margin-right: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <SocialContainer>
                <SocialIcon>
                    <Facebook fontSize="large" />
                </SocialIcon>
                <SocialIcon>
                    <Instagram fontSize="large" />
                </SocialIcon>
                <SocialIcon>
                    <WhatsApp fontSize="large" />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
          <Logo>
              <Imag src="https://i.ibb.co/zmSngjH/Untitled-design-11.png" alt="Logo burbuletas" />
          </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;