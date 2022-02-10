import { FormEventHandler } from "react";
import { Button, InputGroup } from "react-bootstrap";
import { Dash, Plus } from "react-bootstrap-icons";
import SimpleInputGroup from "../../../UI/SimpleInputGroup";


const BestOf: React.FC<{
    className: string;
    onChange: any;
}> = (props) => {

    const onChangeHandler: FormEventHandler = (event) => {
        props.onChange(event.currentTarget.textContent);
    };

    return (
        <SimpleInputGroup>
            <Button variant="outline-secondary"><Dash /></Button>
            <InputGroup.Text>BO</InputGroup.Text>
            <InputGroup.Text onChange={onChangeHandler}>0</InputGroup.Text>
            <Button variant="outline-secondary"><Plus /></Button>
        </SimpleInputGroup>
    )

}

export default BestOf;