import React, {FC} from 'react';
import styled from "styled-components";
import {Title2} from "../../microcomponents/titles/Titles";
import Searchbar from "../../Searchbar/Searchbar";
import MatchList from "../../MatchList/MatchList";
import { useParams } from 'react-router-dom';


//const StyledCompetitionPage = styled.div``

const CompetitionPage: FC = () => {
  const {id} = useParams()
  return (
    <div>
      <Title2 centered>
        {id} schedule
      </Title2>
      <Searchbar/>
      <MatchList></MatchList>
    </div>
  );
};

export default CompetitionPage;