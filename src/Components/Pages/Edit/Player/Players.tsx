import PlayerData from "../../../../Models/playerData";
import PlayerCard from "./PlayerCard";
import Card from "../../../UI/Card";
import classes from "./Players.module.css";
import { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Match from "../Info/Match";

const Players: React.FC<{playerList: PlayerData[]}> = (props) => {
    // Error handling if list is empty
    if (!props.playerList || props.playerList.length <= 0)
        return <p>Player data not found!</p>;

    const playerCount: number = props.playerList.length;
    
    let curIndex = 0;
    const playerElements = props.playerList.map((playerData) => {
        curIndex++;
        const isLast = curIndex === playerCount;

        const colLg = playerCount <= 2 ? "5" : "3";
        
        return (
            <Col lg={colLg} key={playerData.id} >
                <PlayerCard
                    className={`width-${playerCount}`}
                    data={playerData}
                    index={curIndex}
                    />
            </Col>
        );
    });
    
    return (
        <Fragment>
            <Row className="justify-content-md-center">
                <Col lg="6" className={classes.actions}>
                    <Button className="m-2">Swap</Button>
                    <Button className="m-2">Reset</Button>
                    <Button className="m-2">Add player slot</Button>
                    <Button className="m-2">Remove player slot</Button>
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