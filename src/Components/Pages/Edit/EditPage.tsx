import { Link } from "react-router-dom";
import Players from "./Player/Players";

import { Card, Container } from "react-bootstrap";

import classes from "./EditPage.module.css";
import Settings from "./Settings/Settings";
import Match from "./Info/Match";

const EditPage: React.FC = () => {

    return (
        <Container fluid>
            <Container className="p-2">
                <Link to="/welcome" className="debug-button mr-2">Back</Link>
            </Container>
            <Container className="p-2">
                <Card body className={`centered ${classes.content}`}>
                    <Players />
                    <Match />
                    <Settings />
                </Card>
            </Container>
        </Container>
    );
}

export default EditPage;