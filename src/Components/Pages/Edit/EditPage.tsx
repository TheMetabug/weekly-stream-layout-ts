import { Fragment } from "react";
import { Link } from "react-router-dom";
import PlayerData from "../../../Models/playerData";
import Players from "./Player/Players";

import { Card, Container, Row } from "react-bootstrap";

import classes from "./EditPage.module.css";

const DUMMY_DATA = [new PlayerData(1), new PlayerData(2)]

const EditPage: React.FC = () => {

    const playerData = DUMMY_DATA;

    return (
        <Container fluid>
            <Container className="p-2">
                <Link to="/welcome" className="debug-button mr-2">Back</Link>
            </Container>
            <Container className="p-2">
                <Card body className={`centered ${classes.content}`}>
                    <Players playerList={playerData}/>
                </Card>
            </Container>
        </Container>
    );
}

export default EditPage;