import PlayerData from "../../../../Models/playerData";
import {
    Button,
    Card,
    Container,
    FormControl,
    InputGroup,
    Row,
} from "react-bootstrap";
import classes from "./PlayerCard.module.css";
import { MouseEventHandler } from "react";
import SimpleInputGroup from "../../../UI/SimpleInputGroup";
import { Dash, Plus } from "react-bootstrap-icons";
import SimpleDropDown from "../../../UI/SimpleDropdown";

const PlayerCard: React.FC<{
    data: PlayerData;
    index: number;
    nameList: string[];
    className: string;
    score: number;
    increaseScore: any;
    decreaseScore: any;
    changeName: any;
}> = (props) => {
    const playerData: PlayerData = props.data;
    const enteredName = playerData.name;

    const increaseScoreHandler: MouseEventHandler = () => {
        props.increaseScore(playerData.id);
    };

    const decreaseScoreHandler: MouseEventHandler = () => {
        props.decreaseScore(playerData.id);
    };

    const nameChangeHandler: any = (event: any) => {
        props.changeName(event.target.value, props.data.id);
    }

    const nameSelectedHandler: any = (value: string) => {
        props.changeName(value, props.data.id);
    }

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
                            value={enteredName}
                            onChange={nameChangeHandler}
                        />
                        <SimpleDropDown
                            className={""}
                            listItems={props.nameList}
                            onChange={nameSelectedHandler}
                        />
                    </SimpleInputGroup>
                    <SimpleInputGroup>
                        <Button
                            variant="outline-secondary"
                            onClick={decreaseScoreHandler}
                        >
                            <Dash />
                        </Button>
                        <InputGroup.Text>{props.score}</InputGroup.Text>
                        <Button
                            variant="outline-secondary"
                            onClick={increaseScoreHandler}
                        >
                            <Plus />
                        </Button>
                    </SimpleInputGroup>
                </Row>
            </Container>
        </Card>
    );
};

export default PlayerCard;
