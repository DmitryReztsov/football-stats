import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../store/selectors";
import {fetchCompetition} from "../../../store/competition/actions";
import {useDispatch} from "react-redux";
import {Title2} from "../../microcomponents/titles/Titles";

const Competitions: FC = () => {
    const competitions : any[] = useTypedSelector(state => state.competition)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCompetition())
    },[])

    return (
        <div>
            <Title2 centered>
                Actual competitions
            </Title2>
            <ul>
                {competitions.map((comp) => {
                    return <li key={comp.id}>{comp.name}</li>
                })}
            </ul>
        </div>
    );
};

export default Competitions;