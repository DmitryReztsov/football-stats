import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../store/selectors";
import {fetchCompetition} from "../../../store/competition/actions";
import {useDispatch} from "react-redux";
import {Title2} from "../../microcomponents/titles/Titles";
import CompetitionList from "../../lists/CompetitionList/CompetitionList";
import {url} from "inspector";

const Competitions: FC = () => {
    const {competitions, loading, error} = useTypedSelector(state => state.competition)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCompetition())
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>Ууу, ошибка! {error.message}</h1>
    }

    return (
        <div>
            <Title2 centered>
                Actual competitions
            </Title2>
            <CompetitionList>
                {competitions.map((comp) => {
                    return (
                        <div
                            key={comp.id}
                        >
                            <div style={{backgroundImage: `url(../src/assets/${comp.code}.png)`}}/>
                            {comp.name}
                        </div>
                    )
                })}
            </CompetitionList>
            <div>

            </div>
        </div>
    );
};

export default Competitions;