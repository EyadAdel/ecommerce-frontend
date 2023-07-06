import { Search } from "@mui/icons-material";
import styled, { keyframes } from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { logout } from "../redux/userSlice.js";

const Container = styled.div`
  max-height: 70px;
  ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  z-index: 2;
  font-family: Lobster;
  ${mobile({ fontSize: "24px", display: "flex" })}
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  width: 100%;
  ${mobile({ padding: "0px" })}
`;

const Input = styled.input`
  border: none;
  padding: 10px;
  width: 95%;
  outline: none;
  ${mobile({ width: "100%" })}
`;

const Language = styled.span`
  font-size: 14px;
  margin-left: 5px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "space-around" })}
  ${mobile({ flex: 2 })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const breatheAnimation = keyframes`
 0% { top: -50px}
 100% { top: 16px}
`;

const Image = styled.img`
  height: 40px;
  width: 50px;
  object-fit: cover;
  top: 16px;
  position: absolute;
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-iteration-count: 1;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await axios.post(
        "https://ecommerce-backend-7cyp.onrender.com/api/auth/logout"
      );
      dispatch(logout());
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link
            to={`/`}
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Image src="https://uploads.turbologo.com/uploads/icon/preview_image/2877212/draw_svg20200610-32081-n7yvi6.svg.png" />
            <Logo>
              EYAD
              <StoreIcon />
            </Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search
              style={{
                color: "black",
                fontSize: 22,
                backgroundColor: "#ffc220",
                borderRadius: "0px 8px 8px 0px",
                padding: "10px",
                cursor: "pointer",
              }}
            />
          </SearchContainer>
          <Language>EN</Language>
        </Center>
        <Right>
          {!currentUser && (
            <MenuItem>
              <Link
                to={"/register"}
                style={{ textDecoration: "none", color: "black" }}
              >
                REGISTER
              </Link>
            </MenuItem>
          )}
          {!currentUser && (
            <MenuItem>
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "black" }}
              >
                SIGN IN
              </Link>
            </MenuItem>
          )}
          {currentUser && <MenuItem onClick={handleLogout}>LOG OUT</MenuItem>}
          <MenuItem>
            <Link to={"/cart"}>
              <Badge badgeContent={quantity} color="secondary">
                {quantity > 0 ? (
                  <ShoppingCartIcon style={{ color: "black" }} />
                ) : (
                  <ShoppingCartOutlinedIcon style={{ color: "black" }} />
                )}
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
