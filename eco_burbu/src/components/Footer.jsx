import styled from "styled-components";
import { 
    Facebook,
    Instagram,
    WhatsApp,
    Map,
    Phone,
    Email,} from '@mui/icons-material/';

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const Imag = styled.img`
    width: 150PX;
    height: 150px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Logo = styled.div`
    align-item: flex-end;
`;

const Descrip = styled.p`
    margin: 20px 0px;
`;
const Title = styled.h2`
    margin-bottom: 30px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    alingn-items: center;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                <Imag src="https://i.postimg.cc/sgY6NTJ1/45f92fbd-d7cf-4987-8c42-ec32a0023f6c.jpg"></Imag>
            </Logo>
            <Descrip>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut quos incidunt voluptate temporibus.
                Non excepturi voluptatibus quam earum reiciendis eaque. Laudantium hic itaque quasi maiores molestiae officiis alias soluta.
            </Descrip>
        </Left>
        <Center>
            <Title>Burbuletas</Title>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook fontSize="large"  />
                </SocialIcon >
                <SocialIcon color="E4405F">
                    <Instagram fontSize="large"  />
                </SocialIcon>
                <SocialIcon color="8FD355">
                    <WhatsApp fontSize="large"  />
                </SocialIcon>
            </SocialContainer>
        </Center>
        <Right />
            <Title>Contacto</Title>
            <ContactItem><Map />
                carrera 203e #45-147 Cali - Colobia
            </ContactItem>
            <ContactItem><Phone />
                +57 340 4855 214
            </ContactItem>
            <ContactItem><Email />
                burbuletas@gmail.com
            </ContactItem>
    </Container>
  )
}

export default Footer;