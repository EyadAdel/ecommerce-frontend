import { styled } from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { newRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://svgshare.com/i/uMN.svg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  background-color: transparent;
  ${mobile({ width: "90%" })}
`;

const Title = styled.h1`
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  width: 70%;
  margin: 15px 10px 0 0;
  padding: 15px;
  font-size: 16px;
  ${mobile({ width: "90%" })}
`;

const Agreement = styled.span`
  font-size: 14px;
  letter-spacing: 1px;
  margin: 30px 0;
`;

const Button = styled.button`
  border: none;
  margin: 0 auto;
  padding: 15px;
  background-color: #00b493;
  color: white;
  width: 40%;
  font-size: 18px;
  cursor: pointer;
`;

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await newRequest.post("/auth/register", { ...user });
      try {
        const res = await newRequest.post("/auth/login", {
          email: user.email,
          password: user.password,
        });
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        navigate("/");
      } catch (err) {}
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            required
            placeholder="name"
            name="username"
            onChange={handleChange}
          />
          <Input
            required
            placeholder="email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <Input
            required
            placeholder="password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <Agreement>
            By creating an account. I consent to the processing of my personal
            data in accordance with the <strong>PRIVACY POLICY</strong>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
