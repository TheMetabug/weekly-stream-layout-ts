import { Fragment, MouseEventHandler, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import classes from "./OverlayPage.module.css";

const OverlayPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const [lastUpdated, setLastUpdated] = useState(Date.now().toString());

    const leftPlayerName = useAppSelector((state) => state.overlayData.leftName);
    const leftPlayerScore = useAppSelector((state) => state.overlayData.leftScore);
    const rightPlayerName = useAppSelector((state) => state.overlayData.rightName);
    const rightPlayerScore = useAppSelector((state) => state.overlayData.rightScore);
    const matchTitle = useAppSelector((state) => state.overlayData.matchTitle);
    const matchBestOf = useAppSelector((state) => state.overlayData.matchBestOf);

    const fetchDataHandler: MouseEventHandler = () => {
        const lastUpdate: string | null = localStorage.getItem("lastUpdate");
        if (lastUpdate != null) {
            if (Date.parse(lastUpdated) > Date.parse(lastUpdate)) {
                const overlayData = localStorage.getItem("overlayData");
                if (overlayData != null) {
                    const parsedData = JSON.parse(overlayData);
                    const playerData = parsedData.playerData;
                    const matchData = parsedData.matchData;
                }
            }
        }
    }

    return (
        <Fragment>
            <div className="debug-div">
                <div>
                    <Link className='debug-button' to="/welcome">Back</Link>
                </div>
            </div>
            <Container fluid className={classes.overlay} >
                <Row sm="5" className="justify-content-sm-center m-3">
                    <Col sm="1" className={`${classes.score} ${classes.left}`}>
                        {leftPlayerScore}
                    </Col>
                    <Col sm="1" className={`${classes.player} ${classes.left}`}>
                        {leftPlayerName}
                    </Col>
                    <Col sm="2">
                        
                    </Col>
                    <Col sm="1" className={`${classes.player} ${classes.right}`}>
                        {rightPlayerName}
                    </Col>
                    <Col sm="1" className={`${classes.score} ${classes.right}`}>
                        {rightPlayerScore}
                    </Col>
                </Row>
                <Row sm="5" className="justify-content-sm-center m-3">
                    <Col sm="2" className={`${classes.match}`}>
                        {matchTitle} (Bo {matchBestOf})
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default OverlayPage;