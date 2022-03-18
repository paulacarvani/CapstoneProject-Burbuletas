import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material/';
import { mobile } from "../responsive";
import { set } from "../store/modalSlide"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
    ${mobile({ width: "20%" })}
`;

const Logo = styled.div`
    flex: 1;
    ${mobile({ width: "50%" })}
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

const MenuItem = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
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
    const dispatch = useDispatch();
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SocialContainer>
                        <SocialIcon>
                            <a href="https://web.facebook.com/11Burbuletas" target="_blank">
                                <Facebook fontSize="large" />
                            </a>
                        </SocialIcon>
                        <SocialIcon>
                            <a href="https://www.instagram.com/burbuletas1/" target="_blank">
                                <Instagram fontSize="large" />
                            </a>
                        </SocialIcon>
                        <SocialIcon>
                            <WhatsApp fontSize="large" />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Logo>
                        <Link to={"/"} onClick={() => {
                            window.scrollTo(0, 0)
                        }}>
                            <Imag src="https://i.ibb.co/zmSngjH/Untitled-design-11.png" alt="Logo burbuletas" />
                        </Link>
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>
                        <Link to={"/"} onClick={() => {
                            window.scrollTo(0, 0)
                        }}>
                            INICIO
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={"/Favorites"} onClick={() => {
                            window.scrollTo(0, 0)
                        }}>
                            FAVORITOS
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={() => dispatch(set({ key: 'register', value: true }))}>REGISTRO</MenuItem>
                    <MenuItem onClick={() => dispatch(set({ key: 'signIn', value: true }))}>INGRESAR</MenuItem>
                </Right>
            </Wrapper>
        </Container >
    );
};

export default Navbar;
