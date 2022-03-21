import  styled  from "styled-components"
import { Categorias } from "../data"
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    margin-top: 50px;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
        {Categorias.map(item=>(
            <CategoryItem key={item.id} item={item}/>
        ))}
    </Container>
  )
};

export default Categories;