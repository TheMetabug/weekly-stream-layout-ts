import { FormEventHandler, useState } from "react";
import { FormControl } from "react-bootstrap";
import SimpleDropDown from "../../../UI/SimpleDropdown";
import SimpleInputGroup from "../../../UI/SimpleInputGroup";

const Round: React.FC<{
    className: string;
    listItems: string[];
    onChange: any;
}> = (props) => {
    const [roundName, setRoundName] = useState("");

    const dropDownOnChangeHandler: FormEventHandler = (event) => {
        const value = event.currentTarget.textContent;
        if (value !== null) setRoundName(value);
        else setRoundName("");
    };

    const roundNameOnChangeHandler: FormEventHandler = (event) => {
        const value = event.currentTarget.textContent;
        if (value !== null) props.onChange(value);
    };

    return (
        <SimpleInputGroup>
            <FormControl
                placeholder="Round 1"
                aria-label="Player name"
                value={roundName}
                onChange={roundNameOnChangeHandler}
            />
            <SimpleDropDown
                className={""}
                listItems={props.listItems}
                onChange={dropDownOnChangeHandler}
            />
        </SimpleInputGroup>
    );
};

export default Round;
