import React, {FC} from 'react';
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import Container from "../containers/Container/Container";

const StyledMain = styled.main`
  background-color: ${({theme}) => theme.colors.bg};
  flex: 1 1 auto;
  padding: 1rem;
  @media ${({theme}) => theme.media.small} {
    padding: 0.5rem;
  }
`

const Main: FC = () => (
    <StyledMain>
      <Container>
        <Outlet/>
      </Container>
    </StyledMain>
  );

export default Main;