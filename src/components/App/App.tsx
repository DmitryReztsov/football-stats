import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from "../Layout/Layout";
import Homepage from "../pages/Homepage/Homepage";
import Leagues from "../pages/Leagues/Leagues";
import Teams from "../pages/Teams/Teams";
import styled from "styled-components";
import {absolute} from "../../styles/fragments";

const StyledApp = styled.div`
  background-color: ${({theme}) => theme.colors.light_brown};
  ${absolute};
`

function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path={"leagues"} element={<Leagues/>}/>
          <Route path={"teams"} element={<Teams/>}/>
        </Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
