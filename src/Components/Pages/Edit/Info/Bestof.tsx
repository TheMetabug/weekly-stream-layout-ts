import { Button, InputGroup } from "react-bootstrap";
import { Dash, Plus } from "react-bootstrap-icons";
import SimpleInputGroup from "../../../UI/SimpleInputGroup";


const BestOf: React.FC<{
    className: string;
    onIncrease: any;
    onDecrease: any;
    inputValue: string;
}> = (props) => {

    return (
        <SimpleInputGroup>
            <Button variant="outline-secondary" onClick={props.onDecrease}><Dash /></Button>
            <InputGroup.Text>BO</InputGroup.Text>
            <InputGroup.Text>{props.inputValue}</InputGroup.Text>
            <Button variant="outline-secondary" onClick={props.onIncrease}><Plus /></Button>
        </SimpleInputGroup>
    )

}

export default BestOf;