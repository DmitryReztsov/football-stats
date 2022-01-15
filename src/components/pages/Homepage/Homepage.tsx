import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {Title2} from "../../microcomponents/titles/Titles";
import Container from "../../Container/Container";
import axios from "axios";

const StyledHomePage = styled.main`
  background-color: ${({theme}) => theme.colors.bg};
  flex: 1 1 auto;
  padding: 1rem;
  
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

  const [leagues, setLeagues] = useState([])

  const clickHandler = () => {
    const url = 'https://api.football-data.org/v2/competitions'

    axios.get(url, {
      headers: {
        'X-Auth-Token': '1d03ffda47574379b2496f1d6e897afd',
      },
    }).then((response) => setLeagues(response.data.competitions))
  }

  return (
    <StyledHomePage>
      <Container>
        <Title2 centered>Welcome to Football Stats!</Title2>
        <p>This is a small App, which can show you information about leagues, current matches and other statistics</p>
        <button onClick={clickHandler}>Кнопка</button>
        <ul>
          {leagues.map((comp: any) => {
            return <li key={Math.random()}>{comp.name}</li>
          })}
        </ul>

      </Container>
    </StyledHomePage>
  );
};

export default Homepage;