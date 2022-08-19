import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      <Marquee speed={40} gradient={false}>
        Fresh deal! free shipping on order above ₹900
      </Marquee>
    </Container>
  );
};

export default Announcement;
