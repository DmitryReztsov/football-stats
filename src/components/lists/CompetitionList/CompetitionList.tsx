import React, {FC} from 'react';
import styled from "styled-components";
import {ICompetition} from "../../../store/competition/types";

const StyledCompetitionList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > div {
        border: 1px solid black;
        flex: 0 1 20%;
        padding: 5px;
        margin: 5px;
        border-radius: 3px;
    }
`

interface ICompetitionList {
    competitions: ICompetition []
}

const CompetitionList: FC<ICompetitionList> = ({competitions}) => {
    return (
        <StyledCompetitionList>
            {competitions.map((comp) => {
                return (
                    <div
                        key={comp.id}
                    >
                        <div style={{background: `url(/assets/${comp.code}.png) center no-repeat`, width: 100, height: 100, backgroundSize: "contain"}}/>
                        <p>{comp.name}</p>
                        <p></p>
                    </div>
                )
            })}
        </StyledCompetitionList>
    );
};

export default CompetitionList;