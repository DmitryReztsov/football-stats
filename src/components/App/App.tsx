import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styled from "styled-components";
import Layout from "../Layout/Layout";
import Homepage from "../pages/Homepage/Homepage";
import Competitions from "../pages/Competitions/Competitions";
import Teams from "../pages/Teams/Teams";
import CompetitionPage from "../pages/CompetitionPage/CompetitionPage";
import TeamPage from "../pages/TeamPage/TeamPage";
import ErrorBanner from "../errors/ErrorBanner";

const StyledApp = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  flex: 1 1 auto;
  display: flex;
`

function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="competitions" element={<Competitions/>}/>
          <Route path="competitions/:id" element={<CompetitionPage/>}/>
          <Route path="teams" element={<Teams/>}/>
          <Route path="teams/:id" element={<TeamPage/>}/>
          <Route path="*" element={<ErrorBanner error={404}/>}/>
        </Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
