
import React from "react";
import { Row } from "react-bootstrap";

const Home = () => {
    return (
        <>
            <Row>
                <h1 className="home-title">TS-DETECT Anti-Pattern Detection IntelliJ Plugin</h1>
                <h4><strong>Terminology</strong></h4>
                <p>
                    Test code smells - Poor unit testing practices that may indicate deeper problems in the source code
                    <br></br>
                    Unit tests - Tests intended to test a specific functionality of the source code 
                </p>
                <h4><strong>Project Description</strong></h4>
                <p>
                    Previously developed by Anthony Peruma and his team; TSDetect is an open source tool used for detecting various code smells found in unit tests, specifically that of Java projects utilizing Junit5. 
                    <br></br>
                    <br></br>
                    Our team is tasked with improving this project with the following features: user data analysis and storage of relevant user data, results checking, and possible usage against python projects. 
                    This feature set is expected to change as the team researches and develops solutions throughout the duration of the senior project journey. 
                    <br></br>
                    <br></br>
                    The goal of this project is to deliver well designed solutions to each of the feature sets provided to our team. In addition, we aim to traverse all steps of a software engineering project from the ideation phase to these delivered solutions.
                </p>
                <h4><strong>References</strong></h4>
                <p>
                    <ol>
                        <li>https://en.wikipedia.org/wiki/Code_smell</li>
                        <li>https://testsmells.org/index.html </li>
                    </ol>
                </p>
                
            </Row>
        </>
    )
}

export default Home;