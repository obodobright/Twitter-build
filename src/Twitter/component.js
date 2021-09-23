import React from "react";
import styled from "styled-components";
import Nav from "./navbar/downNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./navigation/home";
import Search from "./navigation/search";
import Notification from "./navigation/notification";
import Message from "./navigation/message";
const Component = () => {
  return (
    <Container>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/notification" exact component={Notification} />
          <Route path="/message" exact component={Message} />
        </Switch>
      </Router>
    </Container>
  );
};
export default Component;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: black;
`;
