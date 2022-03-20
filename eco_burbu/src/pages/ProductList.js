import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar1";
import Products from "../components/Products";



const Container = styled.div`
    
`;

const Title = styled.h1`
    margin: 20px;
`;


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
/*    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };
*/

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <Products cat={cat} />
            <Footer />
        </Container>
    )
}

export default ProductList