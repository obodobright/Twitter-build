import React from "react";
import styled from "styled-components";
import { RiHome7Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <Container>
      <WrapperLink>
        <MyLink to="/">
          <RiHome7Fill />{" "}
        </MyLink>
        <MyLink to="/search">
          <BiSearch />
        </MyLink>
        <MyLink to="/notification">
          <IoMdNotificationsOutline />
        </MyLink>
        <MyLink to="/message">
          <FiMail />
        </MyLink>
      </WrapperLink>
    </Container>
  );
};
export default Nav;
const MyLink = styled(Link)`
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    color: gray;
  }
`;
const WrapperLink = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  background: black;
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  border-top: 1px solid grey;
`;
const Container = styled.div``;
