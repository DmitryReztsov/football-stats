import React, {FC} from 'react';
import styled from "styled-components";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

const StyledLayout = styled.div`
  min-height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 3px 1px #9e9c9c;
`

const Layout: FC = () => (
    <StyledLayout>
      <Header/>
      <Main/>
      <Footer/>
    </StyledLayout>
  );

export default Layout;