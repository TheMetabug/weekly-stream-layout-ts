import { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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

    const [lastUpdated, setLastUpdated] = useState("0");

    const leftPlayerName = useAppSelector((state) => state.overlayData.leftName);
    const leftPlayerScore = useAppSelector((state) => state.overlayData.leftScore);
    const rightPlayerName = useAppSelector((state) => state.overlayData.rightName);
    const rightPlayerScore = useAppSelector((state) => state.overlayData.rightScore);
    const matchTitle = useAppSelector((state) => state.overlayData.matchTitle);
    const matchBestOf = useAppSelector((state) => state.overlayData.matchBestOf);

    useEffect(() => {
        const interval = setInterval(() => fetchDataHandler(), 3000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    // This handles data fetching from localstorage
    // TODO: fetch similiar data from actual database
    const fetchDataHandler = () => {
        console.log("fetching data..");
        // Check is data null or not
        const lastUpdate: string | null = localStorage.getItem("lastUpdate");

        if (lastUpdate != null) {
            const overlayData = localStorage.getItem("overlayData");

            // Split and parse stringified data from JSON
            if (overlayData != null) {
                const parsedData = JSON.parse(overlayData);
                const playerData = parsedData.playerData;
                const matchData = parsedData.matchData;
                parseData(playerData, matchData);
            }
            
            // Remove lastupdate so we won't update it unnecessarily
            localStorage.removeItem("lastUpdate")   
            console.log("success!");
        }
    }

    // This handles data parsing and apply it to redux
    // TODO: maybe we don't need redux here..
    const parseData = (playerData: any, matchData: any) => {
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