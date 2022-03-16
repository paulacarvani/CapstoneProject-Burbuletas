import styled from "styled-components";
import {
    Facebook,
    Instagram,
    WhatsApp,
    Map,
    PhoneAndroidOutlined,
    Email,
} from '@mui/icons-material/';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    background-color: #e2f0cb;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    margin-left: 150px;
    ${mobile({
    flexDirection: "column", display: "flex", alignItems: "center",
    justifyContent: "center", marginLeft: "50px"
})}
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const Imag = styled.img`
    width: 50%;
    height: 50%;
    display: flex;
    border-radius:10em;
    ${mobile({ width: "100%", borderRadius: "50%" })}
`;
const SocialContainer = styled.div`
    display: flex;
    ${mobile({ padding: "0px 120px 0px 0px" })}
`;
const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
`;
const Logo = styled.div`

    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
    image-rendering: pixelated;
    ${mobile({ padding: "20px 50px 0px 50px", justifyContent: "right" })}
`;

const Descrip = styled.p`
    margin: 20px 0px;
    font-family: cursive;
    font-size: 120%;
`;
const Title = styled.h2`
    margin-bottom: 30px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Title>Burbuletas</Title>
                <Descrip>
                    "Cultivo plantas por muchas razones: para complacer mi ojo o mi alma,
                    desafiar los elementos o desafiar mi paciencia, por novedad o por nostalgia,
                    pero principalmente por la alegría de verlas crecer." – David Hobson
                </Descrip>
            </Left>
            <Center>
                <Logo>
                    <Imag src="https://i.postimg.cc/sgY6NTJ1/45f92fbd-d7cf-4987-8c42-ec32a0023f6c.jpg"></Imag>
                </Logo>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <a href="https://web.facebook.com/11Burbuletas" target="_blank">
                            <Facebook href="https://web.facebook.com/11Burbuletas" fontSize="large" />
                        </a>
                    </SocialIcon >
                    <SocialIcon color="E4405F">
                        <a href="https://www.instagram.com/burbuletas1/" target="_blank">
                            <Instagram fontSize="large" />
                        </a>
                    </SocialIcon>
                    <SocialIcon color="8FD355">
                        <WhatsApp fontSize="large" />
                    </SocialIcon>
                </SocialContainer>
            </Center>
            <Right>
                <Title>Contacto</Title>
                <ContactItem><Map style={{ marginRight: "10px" }} />
                    Sevilla-Roldanillo - Colombia
                </ContactItem>
                <ContactItem><PhoneAndroidOutlined style={{ marginRight: "10px" }} />
                    +57 317 425 49 20
                </ContactItem>
                <ContactItem><Email style={{ marginRight: "10px" }} />
                    burbuletas@gmail.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer;
