import PlayerData from '../../../../Models/playerData';
import { Button, Card, Col, Container, Dropdown, FormControl, InputGroup, Row } from 'react-bootstrap';
import classes from './PlayerCard.module.css';
import { ChangeEventHandler, MouseEventHandler } from 'react';


const PlayerCard: React.FC<{
    data: PlayerData;
    index: number;
    nameList: string[];
    className: string;
    score: number;
    increaseScore: any;
    decreaseScore: any;
}> = (props) => {
    const playerData : PlayerData = props.data;

    const nameDropdownItems = props.nameList.map(name => {
        return (
            <Dropdown.Item key={name}>{name}</Dropdown.Item>
        );
    })

    const increaseScoreHandler : MouseEventHandler = () => {
        props.increaseScore(playerData.id);
    }

    const decreaseScoreHandler: MouseEventHandler = () => {
        props.decreaseScore(playerData.id);
    }

    const nameChangeHandler: ChangeEventHandler = (event) => {
        console.log(event.target.nodeValue);
    }

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
                    <Col xs="8">
                        <InputGroup>
                            <FormControl
                                placeholder="Player"
                                aria-label="Player name"
                                value={playerData.name}
                                onChange={nameChangeHandler}
                            />
                            <Dropdown>
                                <Dropdown.Toggle />
                                <Dropdown.Menu>
                                    { nameDropdownItems }
                                </Dropdown.Menu>
                            </Dropdown>
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <InputGroup>
                            <Button variant="outline-primary" onClick={decreaseScoreHandler}>-</Button>
                            <InputGroup.Text>{props.score}</InputGroup.Text>
                            <Button variant="outline-secondary" onClick={increaseScoreHandler}>+</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default PlayerCard;