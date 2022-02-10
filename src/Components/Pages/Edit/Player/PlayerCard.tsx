import PlayerData from "../../../../Models/playerData";
import {
    Button,
    Card,
    Col,
    Container,
    Dropdown,
    FormControl,
    InputGroup,
    Row,
} from "react-bootstrap";
import classes from "./PlayerCard.module.css";
import { MouseEventHandler, useRef } from "react";
import SimpleInputGroup from "../../../UI/SimpleInputGroup";

const PlayerCard: React.FC<{
    data: PlayerData;
    index: number;
    nameList: string[];
    className: string;
    score: number;
    increaseScore: any;
    decreaseScore: any;
}> = (props) => {
    const playerData: PlayerData = props.data;
    const enteredName = useRef<HTMLInputElement>(null);

    const nameDropdownItems = props.nameList.map((name) => {
        return <Dropdown.Item key={name}>{name}</Dropdown.Item>;
    });

    const increaseScoreHandler: MouseEventHandler = () => {
        props.increaseScore(playerData.id);
    };

    const decreaseScoreHandler: MouseEventHandler = () => {
        props.decreaseScore(playerData.id);
    };

    // const nameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    //     console.log(event.currentTarget.value);
    // }

    return (
        <Card
            className={`
                m-2
                ${classes.player}
                ${classes[props.className]}
                ${classes["player-" + props.index]}`}
        >
            <Container className="p-2">
                <Row>
                    <SimpleInputGroup>
                        <FormControl
                            placeholder="Player"
                            aria-label="Player name"
                            ref={enteredName}
                        />
                        <Dropdown>
                            <Dropdown.Toggle />
                            <Dropdown.Menu>{nameDropdownItems}</Dropdown.Menu>
                        </Dropdown>
                    </SimpleInputGroup>
                    <SimpleInputGroup>
                        <Button
                            variant="outline-primary"
                            onClick={decreaseScoreHandler}
                        >
                            -
                        </Button>
                        <InputGroup.Text>{props.score}</InputGroup.Text>
                        <Button
                            variant="outline-secondary"
                            onClick={increaseScoreHandler}
                        >
                            +
                        </Button>
                    </SimpleInputGroup>
                </Row>
            </Container>
        </Card>
    );
};

export default PlayerCard;
