import { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import PlayerCard from "./PlayerCard";
import Match from "../Info/Match";

import classes from "./Players.module.css";
import PlayerData from "../../../../Models/playerData";
import { editPlayerActions } from "../../../../store/editPlayersSlice";

const Players: React.FC = (props) => {
    const dispatch = useAppDispatch();

    const playerList: PlayerData[] = useAppSelector((state) => state.editPlayerData.playerList)
    const playerNameList: string[] = useAppSelector((state) => state.editPlayerData.playerNames)

    // Error handling if list is empty
    if (!playerList || playerList.length <= 0)
        return <p>Player data not found!</p>;

    const playerCount: number = playerList.length;

    const increaseScoreHandler = (playerId: string): void => {
        console.log(playerId);
        dispatch(editPlayerActions.increaseScore(playerId));
    }

    const decreaseScoreHandler = (playerId: string): void => {
        dispatch(editPlayerActions.decreaseScore(playerId));
    }

    let curIndex = 0;
    const playerElements = playerList.map((playerData) => {
        curIndex++;
        const colLg = playerCount <= 2 ? "5" : "3";

        return (
            <Col xs={colLg} key={playerData.id} >
                <PlayerCard
                    className={`width-${playerCount}`}
                    data={playerData}
                    score={playerData.score}
                    nameList={playerNameList}
                    index={curIndex}
                    decreaseScore={decreaseScoreHandler}
                    increaseScore={increaseScoreHandler}
                />
            </Col>
        );
    });

    return (
        <Fragment>
            <Row className="justify-content-md-center">
                <Col xs="auto" className={classes.actions}>
                    <Button className="m-2">Swap</Button>
                    <Button className="m-2">Reset</Button>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                {playerElements}
            </Row>
            <Match />
        </Fragment>
    );
}

export default Players;