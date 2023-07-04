import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: black;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Link to={`products/${category.category}`}>
        <Image src={category.img} />
        <Info>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
      <Title>{category.title}</Title>
    </Container>
  );
};

export default CategoryItem;
