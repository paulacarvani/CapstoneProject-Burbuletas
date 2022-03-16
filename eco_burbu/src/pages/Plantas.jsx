import Announcement from "../components/Announcement";
import styled from "styled-components";
import Navbar1 from "../components/Navbar1"
import Products from "../components/Products";
import Footer from "../components/Footer";
import {Materas} from "../data"
//import { Products } from "../data"

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
    font-size: 20px;
    font-weight: 600;
    margin-right: 15px;
`;
const Select = styled.select`
    padding: 10px;
`;
const Option = styled.option`
`;

const Plantas =  () => {
  return (
    <Container>
        <Announcement />
        <Navbar1 />
        <Title>Plantitas</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Categorias:</FilterText>
                <Select>
                    <Option disabled selected>
                        Tipos
                    </Option>
                    <Option>Todo</Option>
                    <Option>Captus</Option>
                    <Option>Suculentas</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products products={Materas}/>
        <Footer />
    </Container>
  )
}

export default Plantas; 