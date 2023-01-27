
import React from "react";
import { Accordion } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import FourUps from '../4ups.json';

const Home = () => {
    return (
        <>
            <Row>
                <h1 className="weekly-header-text">Weekly Updates</h1>
            </Row>
            <Row>
                <Col sm={2}>
                    <Row className="weekly-menu-item">
                        <a href="https://docs.google.com/spreadsheets/d/18-L8U9jV1wC0lBaZethwOkAlIVz_PU4vnbdsJsMclNw/edit?usp=sharing">
                            <Button variant="success">
                                Fall Time Tracking Spreadsheet
                            </Button>
                        </a>
                    </Row>
                    <Row className="weekly-menu-item">
                        <a href="tbd">
                            <Button variant="warning">
                                Spring Time Tracking (TODO)
                            </Button>
                        </a>
                    </Row>
                </Col>
                <Col>
                    <Accordion>
                        {Object.values(FourUps).map((data, idx) => (
                            <Accordion.Item eventKey={idx}>
                                <Accordion.Header>{"Week of " + data.StartDate}</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col>
                                            <h6><strong>Progress</strong></h6>
                                            <ol>{data.Progress.map(val => (
                                                <li>{val}</li>
                                            ))}</ol>
                                        </Col>
                                        <Col>
                                            <h6><strong>Risks</strong></h6>
                                            <ol>{data.Risks.map(val => (
                                                <li>{val}</li>
                                            ))}</ol>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h6><strong>Plans</strong></h6>
                                            <ol>{data.Plans.map(val => (
                                                <li>{val}</li>
                                            ))}</ol>
                                        </Col>
                                        <Col>
                                            <h6><strong>Needs</strong></h6>
                                            <ol>{data.Needs.map(val => (
                                                <li>{val}</li>
                                            ))}</ol>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </>
    )
}

export default Home;