import React from "react";
import { Badge } from '@mui/material';
import { ShoppingCart  }from '@mui/icons-material/';
import styled from "styled-components";
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material/';


const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
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

`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-left: 25px;
    cursor: pointer;
    justify-content: flex-end
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
          <MenuItem>
            <Badge badgeContent={4} color="primary">
                <ShoppingCart />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;