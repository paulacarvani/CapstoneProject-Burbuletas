import styled from "styled-components"
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    position: relative;
    ${mobile({ height: "0%" })}

`;
const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;
const Title = styled.h1`
    color: #631EC0;
    margin-bottom: 20px;
    backdrop-filter: blur(10px);
    padding: 0.2em 0.5em;
    border-radius: 05em;
    box-shadow: 0px 0px 0px 0.5px;
    ${mobile({ fontSize: "small" })}
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: antiquewhite;
    color: #5d8343;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0px 0px 0px 0.5px coral;
    border-radius: 1em;
    
    a:link, a:visited, a:active {
        text-decoration:none;
    }

    ${mobile({ fontSize: "x-small", padding: "revert" })}
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;


const CategoryItem = ({ item }) => {
    return (
        <Container>

            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>
                    <Link to={`/products/${item.cat}`} onClick={() => {
                        window.scrollTo(0, 0)
                    }}>
                        Comprar ahora
                    </Link>
                </Button>
            </Info>

        </Container>
    )
}

export default CategoryItem