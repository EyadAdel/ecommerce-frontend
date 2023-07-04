import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders $50</Container>;
};

export default Announcement;
