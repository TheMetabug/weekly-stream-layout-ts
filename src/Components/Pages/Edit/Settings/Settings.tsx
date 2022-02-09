import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { useAppSelector } from "../../../../hooks";

const Settings: React.FC = () => {

    const hasWaves: boolean = useAppSelector((state) => state.settings.hasWaves);
    const hasPools: boolean = useAppSelector((state) => state.settings.hasPools);
    const isDoubles: boolean = useAppSelector((state) => state.settings.isDoubles);


    return (
        <Row className="justify-content-md-center">
            <Col xs="auto">
                <ButtonGroup aria-label="Basic example">
                    <Button variant={hasWaves ? "success" : "secondary"}>
                        {hasWaves ? "Disable" : "Enable"} Waves
                    </Button>
                    <Button variant={hasPools ? "success" : "secondary"}>
                        {hasWaves ? "Disable" : "Enable"} Pools
                    </Button>
                    <Button variant={isDoubles ? "success" : "secondary"}>
                        {hasWaves ? "Disable" : "Enable"} Doubles
                    </Button>
                </ButtonGroup>
            </Col>
        </Row>
    );
};

export default Settings;