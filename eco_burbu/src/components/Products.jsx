import styled from "styled-components";
import {popularProducts} from "../data"
import Product from "./Product"

const Container = styled.div`
    padding: 11px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Title = styled.h1`
  justify-self: center;
  width: 100%;
  text-align: center;
  margin-block-end: 1em;
`;

const Products = () => {
  return (
    <Container>
      <Title>Más vendidos</Title>
        {popularProducts.map(item=>(
            <Product key={item.id} item={item} />
        ))}
    </Container>
  );
};

export default Products;
