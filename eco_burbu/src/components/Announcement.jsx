import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 45px;
  background-color: #aed79c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  ${mobile({ height: "50px" })}
`

const Announcement = () => {
  return (
    <Container>
        Envios gratis a nivel *regional por compras mayores a $20.000.*(Sevilla y Roldanillo)
    </Container>
  )
}

export default Announcement
