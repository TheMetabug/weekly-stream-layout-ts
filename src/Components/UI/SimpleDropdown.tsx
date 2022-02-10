import { ChangeEventHandler, FormEventHandler } from 'react';
import { Dropdown } from 'react-bootstrap';

const SimpleDropDown: React.FC<{
    className: string;
    listItems: string[];
    onChange: any;
}> = (props) => {

    const listItems = props.listItems.map(item => {
        return <Dropdown.Item key={item}>{item}</Dropdown.Item>;
    });

    const onChangeHandler: FormEventHandler = (event) => {
        props.onChange(event.currentTarget.textContent);
    };

    return (
        <Dropdown className={props.className} onChange={onChangeHandler}>
            <Dropdown.Toggle>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                { listItems }
            </Dropdown.Menu>
        </Dropdown>
    )

}

export default SimpleDropDown;