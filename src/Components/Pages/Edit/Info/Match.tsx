import { Row } from "react-bootstrap";
import BestOf from "./Bestof";
import Pool from "./Pool";
import Round from "./Round";
import Waves from "./Wave";
import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { editMatchActions } from "../../../../store/editMatchSlice";

const waveNames: string[] = [
    "None",
    "Wave A",
    "Wave B",
    "Wave C",
    "Wave E",
    "Wave F",
    "Wave G",
];

const roundNames: string[] = [
    "Friendlies",
    "Grand Final",
    "Semi Final",
    "Quarter Final",
    "Round",
];

const Match: React.FC = () => {
    const dispatch = useAppDispatch();

    const waveTextValue: string = useAppSelector(
        (state) => state.editMatchData.currentWave
    );

    const roundTextValue: string = useAppSelector(
        (state) => state.editMatchData.currentRound
    );

    const poolTextValue: string = useAppSelector(
        (state) => state.editMatchData.currentPool.toString()
    );

    const bestOfTextValue: string = useAppSelector(
        (state) => state.editMatchData.currentBestOf.toString()
    );
    const hasWaves: boolean = useAppSelector(
        (state) => state.settings.hasWaves
    );

    const hasPools: boolean = useAppSelector(
        (state) => state.settings.hasPools
    );

    const waveNameChangeHandler = (value: string) => {
        dispatch(editMatchActions.changeWave(value));
    };

    const roundNameChangeHandler = (value: string) => {
        dispatch(editMatchActions.changeRound(value));
    };

    const poolIncreaseHandler = () => {
        dispatch(editMatchActions.increasePool());
    };

    const poolDecreaseHandler = () => {
        dispatch(editMatchActions.decreasePool());
    };

    const bestOfIncreaseHandler = () => {
        dispatch(editMatchActions.increaseBestOf());
    };

    const bestOfDecreaseHandler = () => {
        dispatch(editMatchActions.decreaseBestOf());
    };

    const wavesFragment = (
        <Waves
            className={""}
            listItems={waveNames}
            onChange={waveNameChangeHandler}
            inputValue={waveTextValue}
        />
    );

    const roundFragment = (
        <Round
            className={""}
            listItems={roundNames}
            onChange={roundNameChangeHandler}
            inputValue={roundTextValue}
        />
    );

    const poolFragment = <Pool
        className=""
        onDecrease={poolDecreaseHandler}
        onIncrease={poolIncreaseHandler}
        inputValue={poolTextValue}
        />;

    const bestOfFragment = <BestOf
        className=""
        onDecrease={bestOfDecreaseHandler}
        onIncrease={bestOfIncreaseHandler}
        inputValue={bestOfTextValue}
    />;

    return (
        <Fragment>
            <Row className="justify-content-md-center m-2">
                {hasWaves && wavesFragment}
                {roundFragment}
            </Row>
            <Row className="justify-content-md-center m-2">
                {hasPools && poolFragment}
                {bestOfFragment}
            </Row>
        </Fragment>
    );
};

export default Match;
