import { FormControl } from "react-bootstrap";
import SimpleDropDown from "../../../UI/SimpleDropdown";
import SimpleInputGroup from "../../../UI/SimpleInputGroup";

const Round: React.FC<{
    className: string;
    listItems: string[];
    onChange: any;
    inputValue: string;
}> = (props) => {
    const textValue = props.inputValue;

    const dropDownOnChangeHandler: any = (value: string) => {
        if (value !== null) props.onChange(value);
    };

    const roundNameOnChangeHandler: any = (event: any) => {
        const value = event.currentTarget.value;
        if (value !== null) props.onChange(value);
    };

    return (
        <SimpleInputGroup>
            <FormControl
                placeholder="Round 1"
                aria-label="Round name"
                value={textValue}
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
