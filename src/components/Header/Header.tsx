import React, {FC} from 'react';
import styled from "styled-components";
import CustomLink from "../microcomponents/links/CustomLink/CustomLink";

const StyledHeader = styled.header`
  background-color: ${({theme}) => theme.colors.dark_green};
  
  h1 {
    text-align: center;
    font-size: 3rem;
    padding: 1rem;
    color: ${({theme}) => theme.colors.font_light};
    font-weight: 700;
    letter-spacing: 0.1rem;
  }
  
  nav {
    text-align: center;
    font-size: 1.5rem;
    padding: 0.5rem;
    color: ${({theme}) => theme.colors.font_light};
  }
  
  ul {
    display: inline-flex;
  }
  li {
    margin: 0 0.25rem;
  }
`

const Header: FC = () => {
  return (
    <StyledHeader>
      <h1>Football Stats</h1>
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
    </StyledHeader>
  );
};

export default Header;