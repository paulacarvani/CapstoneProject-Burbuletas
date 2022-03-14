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
    background-color: #e2f0cb;
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
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const Imag = styled.img`
    width: 50%;
    height: 50%;
    display: flex;
    border-radius:5em;
`;
const SocialContainer = styled.div`
    display: flex;
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
    margin-right: 20px;
`;
const Logo = styled.div`

    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
    image-rendering: pixelated;
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
            <Title>Burbuletas</Title>
            <Descrip>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut quos incidunt voluptate temporibus.
                Non excepturi voluptatibus quam earum reiciendis eaque. Laudantium hic itaque quasi maiores molestiae officiis alias soluta.
            </Descrip>
        </Left>
        <Center>
            <Logo>
                <Imag src="https://i.postimg.cc/sgY6NTJ1/45f92fbd-d7cf-4987-8c42-ec32a0023f6c.jpg"></Imag>
            </Logo>
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
        <Right>
            <Title>Contacto</Title>
            <ContactItem><Map style={{marginRight:"10px"}}/>
                carrera 203e #45-147 Cali - Colobia
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>
                +57 340 4855 214
            </ContactItem>
            <ContactItem><Email style={{marginRight:"10px"}}/>
                burbuletas@gmail.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer;
