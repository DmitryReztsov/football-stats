import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../store/selectors";
import {fetchCompetition} from "../../../store/competition/actions";
import {useDispatch} from "react-redux";
import {Title2} from "../../microcomponents/titles/Titles";

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
            <div>
                {competitions.map((comp) => {
                    return <div key={comp.id}>{comp.name}</div>
                })}
            </div>
        </div>
    );
};

export default Competitions;