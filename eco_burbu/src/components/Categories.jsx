import  styled  from "styled-components"
import { Categorias } from "../data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
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
