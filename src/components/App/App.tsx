import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from "../Layout/Layout";
import Homepage from "../pages/Homepage/Homepage";
import Competitions from "../pages/Competitions/Competitions";
import Teams from "../pages/Teams/Teams";
import styled from "styled-components";
import CompetitionPage from "../pages/CompetitionPage/CompetitionPage";

const StyledApp = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    flex: 1 1 auto;
    display: flex;
`

function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path={"competitions"} element={<Competitions/>}/>
          <Route path={"competitions/:id"} element={<CompetitionPage/>}/>
          <Route path={"teams"} element={<Teams/>}/>
        </Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
