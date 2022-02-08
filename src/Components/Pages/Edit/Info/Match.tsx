import classes from 'Match.module.css';
import { Fragment } from 'react';
import { Button, Card, Col, Dropdown, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Plus, Dash } from 'react-bootstrap-icons';

const Match: React.FC = () => {
    return (
        <Row className="justify-content-md-center m-5">
            <Card>
                <Row className="justify-content-md-center m-2">
                    <Col lg="auto">
                        <InputGroup>
                                <FormControl
                                    placeholder="Wave A"
                                    aria-label="Wave name"
                                />
                                <Dropdown>
                                    <Dropdown.Toggle>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>None</Dropdown.Item>
                                        <Dropdown.Item>Wave A</Dropdown.Item>
                                        <Dropdown.Item>Wave B</Dropdown.Item>
                                        <Dropdown.Item>Wave C</Dropdown.Item>
                                        <Dropdown.Item>Wave E</Dropdown.Item>
                                        <Dropdown.Item>Wave F</Dropdown.Item>
                                        <Dropdown.Item>Wave G</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                        </InputGroup>
                    </Col>

                    <Col lg="auto">
                    <InputGroup>
                            <Button variant="outline-secondary"><Dash /></Button>
                            <InputGroup.Text>Pools</InputGroup.Text>
                            <InputGroup.Text>0</InputGroup.Text>
                            <Button variant="outline-secondary"><Plus /></Button>
                        </InputGroup>
                    </Col>

                    <Col lg="auto">
                        <InputGroup>
                                <FormControl
                                    placeholder="Round 1"
                                    aria-label="Player name"
                                />
                                <Dropdown>
                                    <Dropdown.Toggle>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Round</Dropdown.Item>
                                        <Dropdown.Item>Quarter Final</Dropdown.Item>
                                        <Dropdown.Item>Semi Final</Dropdown.Item>
                                        <Dropdown.Item>Grand Final</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                        </InputGroup>
                    </Col>
                </Row>
                
                <Row className="justify-content-md-center m-2">
                    <Col lg="auto">       
                        <InputGroup>
                            <Button variant="outline-secondary"><Dash /></Button>
                            <InputGroup.Text>BO</InputGroup.Text>
                            <InputGroup.Text>0</InputGroup.Text>
                            <Button variant="outline-secondary"><Plus /></Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Card>
        </Row>
    )
}

export default Match;