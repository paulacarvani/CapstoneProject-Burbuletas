import styled from "styled-components";
import Product from "./Product"

const Container = styled.div`
    padding: 0px;
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

const Products = ({title,products}) => {
  return (
    <Container>
      <Title>{title}</Title>
        {products.map(item=>(
            <Product key={item.id} item={item} />
        ))}
    </Container>
  );
};

export default Products;
