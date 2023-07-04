import { styled } from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e6f1fc;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "50px" })}
`;

const Description = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "16px", textAlign: "center" })}
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  background-color: white;
  height: 50px;
  border: 1px solid lightgray;
  ${mobile({ width: "90%" })}
`;

const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 30px;
`;

const Button = styled.button`
  flex: 1;
  cursor: pointer;
  background-color: teal;
  color: white;
  border: none;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
