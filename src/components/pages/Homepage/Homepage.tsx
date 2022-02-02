import React, {FC, useState} from 'react';
import styled from "styled-components";
import {Title2} from "../../microcomponents/titles/Titles";
import axios from "axios";

const StyledHomePage = styled.div`
  p {
    text-align: center;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0 auto;
    width: 75%;
    line-height: 2rem;
  }
`

const Homepage: FC = () => {

  return (
    <StyledHomePage>
      <Title2 centered>
        Welcome to Football Stats!
      </Title2>
      <p>This is a small App, which can show you information about leagues, current matches and other
        statistics
      </p>
    </StyledHomePage>
  );
};

export default Homepage;