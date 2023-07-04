import {
  Email,
  Facebook,
  Instagram,
  LocalPhone,
  LocationOn,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h1`
  margin-bottom: 30px;
`;

const Description = styled.p`
  margin-bottom: 30px;
  line-height: 1.5;
`;

const IconContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
  margin-right: 15px;
  color: white;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-weight: 500;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactContainer = styled.div``;

const ContactItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EYAD.</Logo>
        <Description>
          There are many varations of Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ratione doloremque id corrupti debitis, commodi,
          molestias ab aut earum voluptates expedita, facilis accusantium
          beatae? Distinctio, explicabo? Amet aspernatur excepturi modi facilis.
        </Description>
        <IconContainer>
          <Icon color={"1155cc"}>
            <Facebook />
          </Icon>
          <Icon color={"d84e8b"}>
            <Instagram />
          </Icon>
          <Icon color={"7abae0"}>
            <Twitter />
          </Icon>
          <Icon color={"a02d2d"}>
            <Pinterest />
          </Icon>
        </IconContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Favorites</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactContainer>
          <ContactItem>
            <LocationOn /> Misr Aswan St.Qena Egypt
          </ContactItem>
          <ContactItem>
            <LocalPhone /> +2 01028252809
          </ContactItem>
          <ContactItem>
            <Email /> contact@eyad.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </ContactContainer>
      </Right>
    </Container>
  );
};

export default Footer;
