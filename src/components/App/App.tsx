import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Layout from "../Layout/Layout";
import Homepage from "../pages/Homepage/Homepage";
import Leagues from "../pages/Leagues/Leagues";
import Teams from "../pages/Teams/Teams";

function App() {
  return (
    <>
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path={"leagues"} element={<Leagues/>}/>
                <Route path={"teams"} element={<Teams/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App;
