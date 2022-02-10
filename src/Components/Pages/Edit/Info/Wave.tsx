import { FormEventHandler, useState } from "react";
import { FormControl } from "react-bootstrap";
import SimpleDropDown from "../../../UI/SimpleDropdown";
import SimpleInputGroup from "../../../UI/SimpleInputGroup";

const Waves: React.FC<{
    className: string;
    listItems: string[];
    onChange: any;
}> = (props) => {
    const [waveName, setRoundName] = useState("");

    const dropDownOnChangeHandler: FormEventHandler = (event) => {
        const value = event.currentTarget.textContent;
        if (value !== null) setRoundName(value);
        else setRoundName("");
    };

    const waveNameOnChangeHandler: FormEventHandler = (event) => {
        const value = event.currentTarget.textContent;
        if (value !== null) props.onChange(value);
    };

    return (
        <SimpleInputGroup>
            <FormControl
                placeholder="Wave A"
                aria-label="Wave name"
                value={waveName}
                onChange={waveNameOnChangeHandler}
            />
            <SimpleDropDown
                className={""}
                listItems={props.listItems}
                onChange={dropDownOnChangeHandler}
            />
        </SimpleInputGroup>
    );
};

export default Waves;
