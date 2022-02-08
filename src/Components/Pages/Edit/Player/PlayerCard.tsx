import PlayerData from '../../../../Models/playerData';
import { Button, Card, Col, Container, Dropdown, FormControl, InputGroup, Row } from 'react-bootstrap';
import classes from './PlayerCard.module.css';

const PlayerCard: React.FC<{
    data: PlayerData;
    index: number;
    className: string;
}> = (props) => {
    const playerData = props.data;

    return (
        <Card
            className={`
                ${classes.player}
                ${classes[props.className]}
                ${classes["player-" + props.index]
            }`}
        >
            <Container className='p-2'>
                <Row>
                    <Col lg="8">
                        <InputGroup>
                            <FormControl
                                placeholder="Player"
                                aria-label="Player name"
                            />
                            <Dropdown>
                                <Dropdown.Toggle>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Player A</Dropdown.Item>
                                    <Dropdown.Item>Player B</Dropdown.Item>
                                    <Dropdown.Item>Player C</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </InputGroup>
                    </Col>
                    <Col lg="4">
                        <InputGroup>
                            <Button variant="outline-primary">-</Button>
                            <InputGroup.Text>0</InputGroup.Text>
                            <Button variant="outline-secondary">+</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default PlayerCard;