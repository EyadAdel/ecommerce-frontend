import { styled } from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useDispatch } from "react-redux";
import { loginStart } from "../redux/userSlice.js";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  /* background: url("https://svgshare.com/i/uMN.svg"); */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px 10px;
  width: 30%;
  background-color: white;
  ${mobile({ padding: "20px 0px", width: "90%" })}
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  width: 80%;
  padding: 15px;
  font-size: 18px;
`;

const Button = styled.button`
  width: 88%;
  border: none;
  margin: 0 auto;
  padding: 15px;
  background-color: #00b493;
  color: white;
  font-size: 18px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    color: green;
  }
`;

const Link = styled.a`
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    setSpinner(true);
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://ecommerce-backend-7cyp.onrender.com/api/auth/login",
        { email, password }
      );
      dispatch(loginStart());
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      // navigate("/");
      window.history.back();
    } catch (err) {
      setError(err.response.data);
      setSpinner(false);
      console.log(error);
    }
  };

  return (
    <Container>
      {spinner ? (
        <Spinner />
      ) : (
        <Wrapper>
          <Title>Sign In</Title>
          <Form>
            <Input
              placeholder="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button onClick={handleClick}>Log In</Button>
            {error && <Error>Wrong Email or Password!</Error>}
            <Link>Forgotten password?</Link>
            <Link
              onClick={() => {
                navigate("/register");
              }}
            >
              CREATE A NEW ACCOUNT
            </Link>
          </Form>
        </Wrapper>
      )}
    </Container>
  );
};

export default Login;
