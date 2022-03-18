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

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`
    
`;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Suculentas</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrar por:</FilterText>
                    <Select name="tipo" onChange={handleFilters}>
                        <Option disabled>Tipo</Option>
                        <Option>Suculentas</Option>
                        <Option>cactus</Option>
                        <Option>Plantitas</Option>
                    </Select>
                    <Select name="base" onChange={handleFilters}>
                        <Option disabled>Base</Option>
                        <Option>Animalitos</Option>
                        <Option>Materitas</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Ordenar Productos:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Nuevo</Option>
                        <Option value="asc">Precio (asc)</Option>
                        <Option value="desc">Precio (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Footer />
        </Container>
    )
}

export default ProductList