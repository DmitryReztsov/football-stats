import React, {FC} from 'react';
import styled from "styled-components";
import NavigationLink from "../microcomponents/links/NavigationLink/NavigationLink";
import {Title1} from "../microcomponents/titles/Titles";
import Container from "../containers/Container/Container";

const StyledHeader = styled.header`
  background-color: ${({theme}) => theme.colors.dark_green};
  padding: 2rem;

  nav {
    text-align: center;
    font-size: 1.5rem;
    padding: 0.5rem;
    color: ${({theme}) => theme.colors.black};
  }
  
  ul {
    display: inline-flex;
  }
  
  li {
    margin: 0 0.5rem;
  }
`

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Title1>Football Stats</Title1>
        <nav>
          <ul>
            <li>
              <NavigationLink to={"/"}>Home</NavigationLink>
            </li>
            <li>
              <NavigationLink to={"/competitions"}>Competitions</NavigationLink>
            </li>
            <li>
              <NavigationLink to={"/teams"}>Teams</NavigationLink>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;