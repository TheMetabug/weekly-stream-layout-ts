import { Dropdown, DropdownButton } from 'react-bootstrap';

const SimpleDropDown: React.FC<{
    className: string;
    listItems: string[];
    onChange: any;
}> = (props) => {

    const listItems = props.listItems.map(item => {
        return <Dropdown.Item key={item} eventKey={item}>{item}</Dropdown.Item>;
    });

    const onChangeHandler: any = (event: string) => {
        props.onChange(event);
    };

    return (
        <DropdownButton title="" className={"dark-theme-btn-primary"} onSelect={onChangeHandler}>
            { listItems }
        </DropdownButton>
    )

}

export default SimpleDropDown;