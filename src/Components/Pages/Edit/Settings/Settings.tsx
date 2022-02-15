import { MouseEventHandler } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { settingsActions } from "../../../../store/settingsSlice";

const Settings: React.FC = () => {
    const dispatch = useAppDispatch();

    const hasWaves: boolean = useAppSelector((state) => state.settings.hasWaves);
    const hasPools: boolean = useAppSelector((state) => state.settings.hasPools);
    // const isDoubles: boolean = useAppSelector((state) => state.settings.isDoubles);

    const toggleWavesHandler: MouseEventHandler = (): void => {
        dispatch(settingsActions.toggleWaves());
    }

    const togglePoolsHandler: MouseEventHandler = (): void => {
        dispatch(settingsActions.togglePools());
    }

    // const toggleDoublesHandler: MouseEventHandler = (): void => {
    //     dispatch(settingsActions.toggleDoubles());
    // }

    return (
        <Row className="justify-content-sm-center m-4">
            <Col xs="auto">
                <ButtonGroup aria-label="Basic example">
                    <Button onClick={toggleWavesHandler}>
                        {hasWaves ? "Hide" : "Show"} Waves
                    </Button>
                    <Button onClick={togglePoolsHandler}>
                        {hasPools ? "Hide" : "Show"} Pools
                    </Button>
                    {/* <Button variant={isDoubles ? "success" : "secondary"} onClick={toggleDoublesHandler}>
                        {isDoubles ? "Disable" : "Enable"} Doubles
                    </Button> */}
                </ButtonGroup>
            </Col>
        </Row>
    );
};

export default Settings;