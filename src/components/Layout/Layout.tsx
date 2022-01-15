import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../Header/Header';
import styled from "styled-components";

const StyledLayout = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Layout: FC = () => {
  return (
    <StyledLayout>
      <Header/>
      <Outlet/>

    </StyledLayout>
  );
};

export default Layout;