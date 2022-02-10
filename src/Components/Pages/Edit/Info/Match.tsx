import {
    Button,
    Card,
    Col,
    Dropdown,
    FormControl,
    InputGroup,
    Row,
} from "react-bootstrap";
import { Plus, Dash } from "react-bootstrap-icons";
import classes from "Match.module.css";
import SimpleDropDown from "../../../UI/SimpleDropdown";
import BestOf from "./Bestof";
import Pool from "./Pool";
import Round from "./Round";
import Waves from "./Wave";
import { Fragment } from "react";
import { useAppSelector } from "../../../../hooks";

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
    const hasWaves: boolean = useAppSelector(
        (state) => state.settings.hasWaves
    );
    const hasPools: boolean = useAppSelector(
        (state) => state.settings.hasPools
    );
    const isDoubles: boolean = useAppSelector(
        (state) => state.settings.isDoubles
    );

    const waveNameChangeHandler = (value: string) => {};

    const roundNameChangeHandler = (value: string) => {};

    const poolChangeHandler = (value: string) => {};

    const bestOfChangeHandler = (value: string) => {};

    const wavesFragment = (
        <Waves
            className={""}
            listItems={waveNames}
            onChange={waveNameChangeHandler}
        />
    );

    const roundFragment = (
        <Round
            className={""}
            listItems={roundNames}
            onChange={roundNameChangeHandler}
        />
    );

    const poolFragment = <Pool className="" onChange={poolChangeHandler} />;

    const bestOfFragment = <BestOf className="" onChange={bestOfChangeHandler} />;

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
