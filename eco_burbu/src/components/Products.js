import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product"
import { useEffect, useState } from "react";
import axios from "axios";
import { publicRequest } from "../requestMethods";


const Container = styled.div`
padding: 0px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat
            ? `/products?category=${cat}`
            : "/products"
        );
        setProducts(res.data);
        console.log(res);
      } catch (err) { }
    };
    getProducts();
  }, [cat]);



  return (
    <Container>
      {products.map(item => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
