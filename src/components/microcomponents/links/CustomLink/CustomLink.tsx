import React, {FC} from 'react';
import {Link, useMatch} from "react-router-dom";
import styled, {DefaultTheme} from "styled-components";

interface ICustomLink {
  children: React.ReactNode,
  to: string,
}

const StyledLink = styled(Link)<{ color: any }>`
  color: ${props => props.color ? (({theme}) => theme.colors.font_light) : (({theme}) => theme.colors.font_dark)}
`

const CustomLink: FC<ICustomLink> = ({children, to}) => {
  const match = useMatch(to)
  return (
    <StyledLink
      to={to}
      color={match}
    >
      {children}
    </StyledLink>

  );
};

export default CustomLink;