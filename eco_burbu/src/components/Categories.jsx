import  styled  from "styled-components"
import { sliderItems } from "../data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
        {sliderItems.map(item=>(
            <CategoryItem key={item.id} item={item}/>
        ))}
    </Container>
  )
};

export default Categories;
