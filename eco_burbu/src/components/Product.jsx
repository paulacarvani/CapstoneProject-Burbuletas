import styled from "styled-components";
import { Search, FavoriteBorder } from '@mui/icons-material/';
import { Link } from "react-router-dom";


const Info = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  background-color: rgba(0,0,0,0.2);
  justify-content: center;
  transition: all 250ms ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FCF1EA;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #FFDAC1;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 100ms ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.4);
  }
`;


const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.image} />
      <Info>
        <Icon>
          <Link to={`/Product/${item._id}`} onClick={() => {
            window.scrollTo(0, 0)
          }}>
            <Search />
          </Link>
        </Icon>
        <Icon>
          <Link to={`/Favorites`} onClick={() => {
            window.scrollTo(0, 0)
          }}>
            <FavoriteBorder />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
