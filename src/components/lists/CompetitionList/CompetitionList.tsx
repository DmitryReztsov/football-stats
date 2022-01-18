import React, {FC} from 'react';
import styled from "styled-components";

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
    children: React.ReactNode []
}

const CompetitionList: FC<ICompetitionList> = ({children}) => {
    return (
        <StyledCompetitionList>
            {children}
        </StyledCompetitionList>
    );
};

export default CompetitionList;