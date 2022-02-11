import { FormControl } from "react-bootstrap";
import SimpleDropDown from "../../../UI/SimpleDropdown";
import SimpleInputGroup from "../../../UI/SimpleInputGroup";

const Waves: React.FC<{
    className: string;
    listItems: string[];
    onChange: any;
    inputValue: string;
}> = (props) => {
    const textValue = props.inputValue;

    const dropDownOnChangeHandler: any = (value: string) => {
        if (value !== null) props.onChange(value);
    };

    const waveNameOnChangeHandler: any = (event: any) => {
        const value = event.currentTarget.value;
        if (value !== null) props.onChange(value);
    };

    return (
        <SimpleInputGroup>
            <FormControl
                placeholder="Wave A"
                aria-label="Wave name"
                value={textValue}
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
