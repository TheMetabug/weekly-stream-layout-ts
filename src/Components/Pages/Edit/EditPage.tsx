import { Link } from "react-router-dom";
import Players from "./Player/Players";

import { Card, Container } from "react-bootstrap";

import classes from "./EditPage.module.css";
import Settings from "./Settings/Settings";
import Match from "./Info/Match";

const EditPage: React.FC = () => {

    const onUpdateHandler: any = () => {
        
    }

    return (
        <Container fluid>
            <Container className="p-2">
                <Link to="/welcome" className="debug-button mr-2">Back</Link>
            </Container>
            <Container className="p-2">
                <Card body className={`centered dark-theme-bg ${classes.content}`}>
                    <Players onUpdate={onUpdateHandler} />
                    <Match />
                    <Settings />
                </Card>
            </Container>
        </Container>
    );
}

export default EditPage;