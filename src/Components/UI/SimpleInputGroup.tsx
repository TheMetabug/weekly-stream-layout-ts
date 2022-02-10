import { Col, InputGroup } from "react-bootstrap";

const SimpleInputGroup: React.FC = (props) => {
    return (
        <Col xs="auto" sm="auto" className="m-2">
            <InputGroup>
                {props.children}
            </InputGroup>
        </Col>
    )
}

export default SimpleInputGroup;