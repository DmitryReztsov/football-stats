import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

interface ITeamLinkProps {
  children: string,
  id: number,
}

const StyledTeamLink = styled(Link)`
  color: ${({theme}) => theme.colors.black};
  font-weight: bold;
  
  &:visited {
    color: ${({theme}) => theme.colors.black};
  }
  
  &:hover,active {
    color: ${({theme}) => theme.colors.middle_green};
  }
`

const TeamLink: FC<ITeamLinkProps> = ({id,children}) => (
    <StyledTeamLink
      to={`/teams/${id}`}
    >
      {children}
    </StyledTeamLink>
  );

export default TeamLink;