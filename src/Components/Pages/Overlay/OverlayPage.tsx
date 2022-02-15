import { Fragment, MouseEventHandler, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { overlayDataActions } from "../../../store/overlayDataSlice";
import classes from "./OverlayPage.module.css";
import "./OverlayPositionStyles.css";

const positionClasses = {
    container: 'ov-container ',
    midSpace: 'ov-mid-space',
    score: 'ov-score',
    player: 'ov-player',
    title: 'ov-title',
}

const OverlayPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const [lastUpdated, setLastUpdated] = useState(Date.now().toString());

    const leftPlayerName = useAppSelector((state) => state.overlayData.leftName);
    const leftPlayerScore = useAppSelector((state) => state.overlayData.leftScore);
    const rightPlayerName = useAppSelector((state) => state.overlayData.rightName);
    const rightPlayerScore = useAppSelector((state) => state.overlayData.rightScore);
    const matchTitle = useAppSelector((state) => state.overlayData.matchTitle);
    const matchBestOf = useAppSelector((state) => state.overlayData.matchBestOf);

    useEffect(() => {
        console.log("mount");
        // setInterval(() => fetchDataHandler(), 3000);
    }, [])
    
    const fetchDataHandler = () => {
        console.log("hey");

        const lastUpdate: string | null = localStorage.getItem("lastUpdate");
        console.log(lastUpdate + " : " + lastUpdated);
        if (lastUpdate != null) {
            if (parseInt(lastUpdated) > parseInt(lastUpdate)) {
                const overlayData = localStorage.getItem("overlayData");
                console.log(overlayData);
                if (overlayData != null) {
                    console.log(overlayData);
                    const parsedData = JSON.parse(overlayData);
                    const playerData = parsedData.playerData;
                    const matchData = parsedData.matchData;
                    parseData(playerData, matchData);
                }
                localStorage.setItem("lastUpdate", Date.now().toString())
            }
        }
    }

    const parseData = (playerData: any, matchData: any) => {
        console.log(playerData);
        console.log(matchData);
        if (playerData != null && matchData != null) {
            const player1 = playerData[0];
            const player2 = playerData[1];
            dispatch(overlayDataActions.setPlayer1Name(player1.name));
            dispatch(overlayDataActions.setPlayer2Name(player2.name));
            dispatch(overlayDataActions.setPlayer1Score(player1.score));
            dispatch(overlayDataActions.setPlayer2Score(player2.score));
            dispatch(overlayDataActions.setMatchBestOf(matchData.currentBestOf));
            dispatch(overlayDataActions.setMatchTitle(matchData.currentRound));
        }
    }

    fetchDataHandler();

    return (
        <Fragment>
            <Container fluid className={`${classes.overlay} ${positionClasses.container}`} >
                <Row className="justify-content-sm-center m-3">
                    <Col className={`${classes.player} ${classes.left} ${positionClasses.player}`}>
                        {leftPlayerName}
                    </Col>
                    <Col className={`${classes.score} ${classes.left} ${positionClasses.score}`}>
                        {leftPlayerScore}
                    </Col>
                    <Col className={`${positionClasses.midSpace}`}>
                        
                    </Col>
                    <Col className={`${classes.score} ${classes.right} ${positionClasses.score}`}>
                        {rightPlayerScore}
                    </Col>
                    <Col className={`${classes.player} ${classes.right} ${positionClasses.player}`}>
                        {rightPlayerName}
                    </Col>
                </Row>
                <Row className="justify-content-sm-center m-3">
                    <Col className={`${classes.match} ${positionClasses.title}`}>
                        {matchTitle} (Bo {matchBestOf})
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default OverlayPage;