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
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Suculentas</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrar por: </FilterText>
                    <Select>
                        <Option disabled selected>
                            Tamaño
                        </Option>
                        <Option>Pequeña</Option>
                        <Option>Mediana</Option>
                        <Option>Grande</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Ordenar por:</FilterText>
                    <Select>
                        <Option selected>Nuevo</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Footer />
        </Container>
    )
}

export default ProductList