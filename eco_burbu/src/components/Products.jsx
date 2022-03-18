import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product"
import { useEffect, useState } from "react";
import axios from "axios";


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
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
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
