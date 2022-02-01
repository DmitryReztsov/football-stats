import React, {FC} from 'react';
import styled from "styled-components";
import Container from "../containers/Container/Container";
import {Outlet} from "react-router-dom";

const StyledMain = styled.main`
  background-color: ${({theme}) => theme.colors.bg};
  flex: 1 1 auto;
  padding: 1rem;
`

const Main: FC = () => {
  return (
    <StyledMain>
      <Container>
        <Outlet/>
      </Container>
    </StyledMain>
  );
};

export default Main;