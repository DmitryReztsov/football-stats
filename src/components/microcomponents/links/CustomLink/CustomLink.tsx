import React, {FC} from 'react';
import {Link, useMatch} from "react-router-dom";
import styled from "styled-components";

interface ICustomLink {
  children: React.ReactNode,
  to: string,
}

const StyledLink = styled(Link)<{ color: any }>`
  color: ${props => props.color ? (({theme}) => theme.colors.light_brown) : (({theme}) => theme.colors.white)};
  transition: 0.2s color;

  &:hover {
    color: ${({theme}) => theme.colors.light_brown};
    transition: 0.2s color;
  }
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