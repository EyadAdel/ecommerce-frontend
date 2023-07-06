/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Navbar from "./../components/Navbar";
import Announcement from "./../components/Announcement";
import Newsletter from "./../components/Newsletter";
import Footer from "./../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice.js";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;
const Description = styled.p`
  font-size: 20px;
  margin: 25px 0;
`;

const Price = styled.span`
  font-size: 50px;
  font-weight: 300;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 30px 0;
  ${mobile({ width: "100%" })}
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Color = styled.div`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 8px;
  cursor: pointer;
`;
const FilterTitle = styled.h3`
  color: gray;
  font-size: 25px;
  font-weight: 400;
`;
const SizeContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Select = styled.select`
  background-color: white;
  padding: 10px;
  border: 1px solid gray;
  margin-left: 10px;
`;
const Option = styled.option``;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({ flexDirection: "column", width: "100%" })}
`;
const Amount = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ marginBottom: "15px" })}
`;
const Value = styled.span`
  width: 20px;
  height: 20px;
  text-align: center;
  border: 1px solid teal;
  border-radius: 12px;
  padding: 8px 15px;
  margin: 0 15px;
  font-weight: bold;
  font-size: 18px;
`;
const Button = styled.button`
  border: 3px solid teal;
  padding: 15px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f2f8fd;
  }
  &:disabled {
    color: teal;
    cursor: not-allowed;
  }
`;

const WarningContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: -7px;
    left: 40%;
    border: 10px solid;
    border-color: transparent transparent gray transparent;
  }
`;

const Warning = styled.p`
  margin-top: 12px;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 12px;
  width: 30%;
  background-color: white;
`;

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const id = useLocation().pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (
      (color === "" && product.color.length > 0) ||
      (size === "" && product.size.length > 0)
    ) {
      setMessage(true);
      return;
    } else {
      setMessage(false);
      dispatch(addItemToCart({ ...product, color, size, quantity }));
    }
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.image} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            {product.color?.length > 0 && (
              <ColorContainer>
                <FilterTitle>Color</FilterTitle>
                {product.color?.map((c) => (
                  <Color color={c} key={c} onClick={() => setColor(c)} />
                ))}
              </ColorContainer>
            )}

            {product.size?.length > 0 && (
              <SizeContainer>
                <FilterTitle>Size</FilterTitle>
                <Select onChange={(e) => setSize(e.target.value)}>
                  <Option disabled>Select</Option>
                  {product.size?.map((s) => (
                    <Option key={s}>{s}</Option>
                  ))}
                </Select>
              </SizeContainer>
            )}
          </FilterContainer>
          <AmountContainer>
            <Amount>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("dec")}
              />
              <Value>{quantity}</Value>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("inc")}
              />
            </Amount>
            <Button onClick={handleAddToCart}>Add To Cart</Button>
          </AmountContainer>
          {message && (
            <WarningContainer>
              <Warning>
                Select <b>Size</b> & <b>Color</b> to add to Shopping Cart
              </Warning>
            </WarningContainer>
          )}
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
