import React, {FC} from 'react';
import {Link, useMatch} from "react-router-dom";
import styled from "styled-components";

interface INavigationLinkProps {
  children: React.ReactNode,
  to: string,
}

const StyledNavigationLink = styled(Link)<{ color: any }>`
  color: ${props => props.color ? (({theme}) => theme.colors.light_brown) : (({theme}) => theme.colors.white)};
  transition: 0.2s color;

  &:hover {
    color: ${({theme}) => theme.colors.light_brown};
    transition: 0.2s color;
  }
`

const NavigationLink: FC<INavigationLinkProps> = ({children, to}) => {
  const match = useMatch(to)
  return (
    <StyledNavigationLink
      to={to}
      color={match}
    >
      {children}
    </StyledNavigationLink>

  );
};

export default NavigationLink;