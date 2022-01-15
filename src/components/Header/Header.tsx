import React, {FC} from 'react';
import styled from "styled-components";
import CustomLink from "../microcomponents/links/CustomLink/CustomLink";
import {Title1} from "../microcomponents/titles/Titles";
import Container from "../Container/Container";

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
              <CustomLink to={"/"}>Home</CustomLink>
            </li>
            <li>
              <CustomLink to={"/leagues"}>Leagues</CustomLink>
            </li>
            <li>
              <CustomLink to={"/teams"}>Teams</CustomLink>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;