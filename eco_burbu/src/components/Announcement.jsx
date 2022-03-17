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
  font-weight: 600;
  ${mobile({ fontSize: "12px", padding: "0px 15px" })}
`

const Announcement = () => {
  return (
    <Container>
        Envios gratis a nivel *regional por compras mayores a $20.000.     *(Sevilla y Roldanillo)
    </Container>
  )
}

export default Announcement
